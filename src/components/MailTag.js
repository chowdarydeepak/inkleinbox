import React from 'react';
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setTag } from '../features/tagSlice';

const MailTag = ({ tag, Icon, isActive }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleTagClick = (selectedTag) => {
        dispatch(setTag(selectedTag));
        navigate(`/tags/${selectedTag}`);
    };



    return (
        <div className={`flex items-center space-x-4 border-b-2 border-black
        hover:text-rose-500 hover:border-rose-500 hover:scale-110 pb-1 cursor-pointer
        ${isActive && "text-rose-900 border-rose-900 z-[999]"}`} 
            onClick={() => handleTagClick(tag)}>
            <Icon className='h-6'/>
            <span className='hidden sm:inline-flex font-bold'>{tag.charAt(0).toUpperCase() + tag.slice(1)}</span>
        </div>
    )
}

export default MailTag