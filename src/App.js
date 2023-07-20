import List from "./list" ;
import "./App.css";
import EventHandler from "./toopics events/event handler";
import ClassEventButton from "./toopics events/classEventButton";
import { useState } from 'react';
import {  ThemeProvider } from "styled-components";
import { themed } from "./toopics events/themeing/theme";
import CustomStyling from "./toopics events/styled comp/component";

function App () {
 
        
    
      return (
        
        <ul style={{ margin: '16px' }}>
          <ThemeProvider theme={themed}>
          <CustomStyling />
        
          
              {/* <EventHandler/> */}
         {/* <ClassEventButton/> */}
         </ThemeProvider>
              <hr />
            </ul>
            
          )}
        
      
      
    
    



export default App; 

// const COUNTRIES=['india','nepal','america','london'];
  // const fruits=['Apple','orange','grapes','papaya','pineapple','peaers'];

  // return (
  
  //       <div className="containers p-5">
  //         <EventHandler/>

          
  //          <ClassEventButton/>
  //      {/* <List countries={COUNTRIES} name="Number Of Countries" id='5' /> */}
  //       </div>
  // );

  // const initialState = [
    //     { id: 1, name: 'Banana', amount: 5 },
    //     { id: 2, name: 'Apple', amount: 6 },
    //     {id:3,name:'pineapple',amount: 7},
    //   ];
    
    //   const remove = () => {
    //     setFruits((current) =>
    //       current.filter((fruit) => fruit.id !== 3)
    //     );
    //   };
    
    //   const [fruits, setFruits] = useState(initialState);
    
    //   return (
    //     <ul style={{ margin: '16px' }}>
    //       <button onClick={remove}>Remove </button>
    //       {fruits.map((fruit) => (
    //         <li key={fruit.id}>
    //           <h2>Name: {fruit.name}</h2>
    //           <h2>Amount: {fruit.amount}</h2>
      
    //           <hr />
    //         </li>
    //       ))}
    //     </ul>
    //   );
    // }
    
    