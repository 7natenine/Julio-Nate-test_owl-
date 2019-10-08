import React from 'react';
import './App.css';

function App(props) {
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

export default App;
 



// import React from 'react';
// import List from './List'

// import './App.css'

// function App(props) {

  
//   return (
//     <main className='App'>
//       <header className="App-header">
//         <h1>Trelloyes!</h1>
//       </header>
//       <div className="App-list">
//     {props.store.lists.map(list=> {
//       return (
//           <List header={list.header} cards={list.cardIds.map(card =>{
//             return(
//               props.store.allCards[card]
//             )
//           })
//           } key={list.id}/>   
//         );
//       })
//     }      
//       </div>
//     </main>
//   );
// }

// export default App;




// ReactDOM.render(<App store={store}/>, document.getElementById('root'));