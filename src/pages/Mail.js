import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Content from '../components/Content';

const Mail = () => {
  const { id } = useParams();
  const mails = useSelector((state) => state.tag.mails);
  const mail = mails.find((mail) => mail.id.toString() === id);

  if (!mail) {
    return <div>Mail not found.</div>;
  }

  return (
    <div>
      <Content 
        tag={mail.tag}
        subject={mail.subject}
        body={mail.body}
        userId={mail.userId}/>
    </div>
  );
};

export default Mail;
