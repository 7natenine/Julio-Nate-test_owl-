import React from 'react';
import './Chat.css';

function Chat(props) {
    return (
    props.store.chatEvents.map((list) => {
        if(list.inSession && list.onStage){
        return ( 
            <li className='chatLog'>
                <img src={list.avatr} height='80px' alt='avatar-img' />
                <p>{list.name}</p>
                <div class="info">On Stage<span class="dot"></span></div> 
            </li>)
        }
        })
    );
}

export default Chat;
 
