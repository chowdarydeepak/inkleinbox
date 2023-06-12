import React, { useState } from 'react';
import { TrashIcon, InboxInIcon, DocumentIcon, ShieldExclamationIcon, AtSymbolIcon, SearchIcon} from '@heroicons/react/outline'
import MailTag from './MailTag';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const activeTag = useSelector(state => state.tag.value)

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      navigate(`/search?term=${encodeURIComponent(searchTerm)}`);
    } else {
      navigate('/');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='p-4 pb-0 bg-gradient-to-b from-pink-300 via-purple-300 to-indigo-400 flex flex-col w-full space-y-2'>
      <div className='flex justify-center'>
        <img className='h-20 aspect-auto' src='../logo.png' alt='Logo'/>
      </div>
      <div className='pt-3 flex flex-row justify-between justify-items-start'>
        <div className='flex flex-row space-x-4'>
          <MailTag tag='all' Icon={AtSymbolIcon} isActive={activeTag === 'all'}/>
          <MailTag tag='inbox' Icon={InboxInIcon} isActive={activeTag === 'inbox'}/>
          <MailTag tag='draft' Icon={DocumentIcon} isActive={activeTag === 'draft'}/>
          <MailTag tag='spam' Icon={ShieldExclamationIcon} isActive={activeTag === 'spam'}/>
          <MailTag tag='trash' Icon={TrashIcon} isActive={activeTag === 'trash'}/>
        </div>
        <div className='flex mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md 
        rounded-full border border-gray-200 px-5 mb-2 items-center sm:max-w-xl lg:max-w-2xl'>
          <input
            type="text"
            className='bg-transparent text-black'
            value={searchTerm}
            placeholder="Search Here"
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            />
          <button onClick={handleSearch}><SearchIcon className='h-4 mr-3 text-black'/></button>
        </div>
      </div>
    </div>
  );
};

export default Header;
