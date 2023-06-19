import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/outline'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setUser } from '../features/userSlice'

const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleUserClick = (selectedUser) => {
        dispatch(setUser(selectedUser));
        navigate(`/tags/inbox`);
    }

  return (
    <div className="h-screen bg-[url('/public/background.jpg')] grid items-center">
        <div className='bg-white rounded-full border-2 border-blue-500 p-4 w-fit m-auto'>
            <img className='m-auto h-32 aspect-auto' src='../logo.png' alt='Logo'></img>
        </div>
        <div className='backdrop-blur-2xl sm:w-1/4 mx-1 sm:m-auto rounded-md outline-dashed
                grid grid-flow-row'>
            <div className='p-3 flex justify-center font-bold 
                text-lg border-b-2 border-black'>
                    Select user
                </div>
            <div className='mx-3 my-1 p-3 flex justify-between font-semibold cursor-pointer
                transition ease-in-out delay-150 
                hover:-translate-y-1 hover:scale-110 duration-300'
                onClick={() => handleUserClick(1)}>
                    <span>User 1</span>
                    <ChevronRightIcon className='h-6'/>
                </div>
            <div className='h-1 border-[1px] border-black bg-black opacity-20'></div>
            <div className='mx-3 my-1 p-3 flex justify-between font-semibold cursor-pointer
                transition ease-in-out delay-150 
                hover:-translate-y-1 hover:scale-110 duration-300'
                onClick={() => handleUserClick(2)}>
                    <span>User 2</span>
                    <ChevronRightIcon className='h-6'/>
                </div>
        </div>
    </div>
  )
}

export default Home