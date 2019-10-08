import React from 'react';
import './Participant.css'

function Participant(props) {
  return (
  props.store.participants.map((list) => {
      if(list.inSession && list.onStage){
      return ( 
          <li className='List'>
            <img src={list.avatar} height='80px' alt='avatar-img' />
            <p>{list.name}</p>
            <div class="info">On Stage<span class="dot"></span></div> 
          </li>)
    }
    if(list.inSession){
      return ( 
          <li className='List'>
            <img src={list.avatar} height='80px' alt='avatar-img' />
            <p>{list.name}</p>
            <div class="info"></div> 
          </li>)
    }
    })
  );
}

export default Participant;
 

// export default function lists (props){
// return( 
//   <section className="List"> 
//     <header className="List-header"></header>
//   </section>
// )
// }