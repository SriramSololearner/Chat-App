import React from 'react';
import cam from '../img/cam.png';
import Add from '../img/add.png';
import More from '../img/more.png';
import Messages from './Messages';
import Input from '../components/Input';

const Chat = () => {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>Jane</span>
                <div className="chatIcons">
                    <img src={cam} alt="no-img" />
                    <img src={Add} alt="no-img" />
                    <img src={More} alt="no-img" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default Chat;