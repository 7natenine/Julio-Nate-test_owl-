import React from 'react';
import './Stage.css';

function Stage(props){
    return(
      props.store.participants.map((list) => {
        
        if(list.onStage){
        
            return (
              <li className="Stage">
                <p>{list.name}</p>
                <img src={list.avatar} height='80px' alt='avatar-img' />
              </li>
            )
  
          }
      
      })
    )
  
  }
  
  
   
  export default Stage;