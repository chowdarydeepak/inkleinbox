import React from 'react'
import { ChevronLeftIcon } from '@heroicons/react/outline'
import { useNavigate } from 'react-router-dom';

const Content = ({ subject, body, userId, tag}) => {

    const navigate = useNavigate();

    const handleGoBack = () => {
        const currentTag = tag.toLowerCase();
        navigate(`/tags/${currentTag}`);
  };

  return (
    <div className='pl-2 pt-5 w-2/3'>
        <div className='flex flex-row items-end space-x-4 justify-between'>
            <div className='flex items-end space-x-4'>
              <ChevronLeftIcon className='h-6 rounded-full hover:bg-white cursor-pointer hover:scale-110' onClick={handleGoBack}/>
              <div className='text-lg font-semibold'>{subject}</div>
            </div>
            <div className=' bg-gray-400 rounded-sm text-sm px-2'>User {userId}</div>
        </div>
        <div className='ml-10 pt-10 text-sm'>{body}</div>
    </div>
  )
}

export default Content