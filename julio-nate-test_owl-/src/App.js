import React from 'react';
import './App.css';
//import Store from './Store'
//<p>{stamp.getHours()}:{stamp.getMinutes()}</p>

function App(props){

  return(
    props.store.chatEvents.map((list) => {
    let stamp = new Date(list.timestamp);
    console.log(stamp);
      if(list.type === 'message') {
        return(
          <div class="chat">
            <p>{stamp.getHours()}:{stamp.getMinutes()}</p>
            <img src={list.avatar} alt="avatar"/>
            <p className='message'>{list.message}</p>  
          </div>
        )
      }
      else if(list.type !== 'message'){
        
        switch(list.type){

          case 'thumbs-up': 
                return (<p>{stamp.getHours()}:{stamp.getMinutes()}{list.name} gave a thumbs up</p>);
          case 'thumbs-down':
                return (<p>{stamp.getHours()}:{stamp.getMinutes()}{list.name} gave a thumbs down</p>);
          case 'clap': 
                return (<p>{stamp.getHours()}:{stamp.getMinutes()}{list.name} clapped</p>);
          case 'raise-hand': 
                return (<p>{stamp.getHours()}:{stamp.getMinutes()}{list.name} raised their hand</p>);
          case 'join': 
                return (<p>{stamp.getHours()}:{stamp.getMinutes()}{list.name} joined</p>);
          case 'leave':
                return (<p>{stamp.getHours()}:{stamp.getMinutes()}{list.name} left</p>);
          case 'join-stage': 
                return (<p>{stamp.getHours()}:{stamp.getMinutes()}{list.name} joined the stage</p>);
          case 'leave-stage':
                return (<p>{stamp.getHours()}:{stamp.getMinutes()}{list.name} left the stage</p>);
          default: 
              console.log('Error');

        }
      }
    
    })
  )

}


 
export default App;