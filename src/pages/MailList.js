import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { setTag, fetchMailsAsync } from '../features/tagSlice';
import { ChevronDoubleRightIcon } from '@heroicons/react/outline'

const MailList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const activeTag = useSelector((state) => state.tag.value);
  const mails = useSelector((state) => state.tag.mails);
  const status = useSelector((state) => state.tag.status);
  const error = useSelector((state) => state.tag.error);

  const handleMailClick = (id) => {
    navigate(`/mail/${id}`);
  };

  useEffect(() => {
    dispatch(fetchMailsAsync());
    console.log('selected')
  }, [dispatch]);

  useEffect(() => {
    const pathSegments = location.pathname.split('/');
    const tagFromPath = pathSegments[2];
    console.log('selected') 
    dispatch(setTag(tagFromPath || 'inbox'));
  }, [location.pathname, dispatch]);

  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('term');

  const filteredMails = mails.filter((mail) => {
    if (searchTerm) {
      // Filter mails by search term in all tags
      console.log('selected')
      return (
        (mail.subject && mail.subject.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (mail.body && mail.body.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    } else if (activeTag === 'all') {
      // Display all mails without search term
      console.log('All')
      return true;
    } else {
      // Filter mails by active tag
      console.log('Tag')
      return mail.tag === activeTag;
    }
  });
  
  

  const renderMailList = () => {
    if (status === 'loading') {
      return <div>Loading...</div>;
    } else if (status === 'failed') {
      return <div>Error: {error}</div>;
    } else if (filteredMails.length === 0) {
      return <div>No mails found.</div>;
    } else {
      return (
        <>
          {filteredMails.map((mail) => (
            <div key={mail.id} onClick={() => handleMailClick(mail.id)}>
              <div className='cursor-pointer hover:bg-gray-100 rounded-lg hover:shadow-lg border
              border-white p-2 hover:scale-[1.02]
              flex flex-row space-x-5'>
                <ChevronDoubleRightIcon className='h-6 text-orange-400'/>
                <div className=''>User {mail.userId}</div>
                <div className='font-semibold w-1/5 truncate'>{mail.subject}</div>
                <div className='w-3/5 truncate'>{mail.body}</div>
              </div>
            </div>
          ))}
        </>
      );
    }
  };

  return (
    <div className='m-2 bg-gray-200 p-2 rounded-lg'>
      {renderMailList()}
    </div>
  );
};

export default MailList;
