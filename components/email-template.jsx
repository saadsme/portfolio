import * as React from 'react';

export const EmailTemplate = ({
  firstName,
}) => (
  <div className='flex flex-col gap-3'>
    <h1>Hi 👋</h1>
    <div>Thanks for subscribing to my email list! Welcome aboard! 🚀 <br/><br/>
    I'll be sending monthly emails to you about any cool things I come across.</div>
    <br/>Saad
    <br/><br/> There is no surprise, I just wanted to see if you would actually subscribe to my email list. 😂😂 If you're reading this you're a real one.🫶 
    <br/><br/>also im still working on the unsubscribe button so you're stuck with me for now. 😈
  </div>
);