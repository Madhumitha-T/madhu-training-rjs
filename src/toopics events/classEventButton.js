import React from "react";
import { render } from "react-dom";


const box={
  backgroudColor:"red"
};
class ClassEventButton extends React.Component{

    state={
        COUNTRIES:['india','nepal','america','london'],
    };
    

    
    takeClick=(args)=>{
     console.log(this);
    }
    render() {
        return (
            <ul className="list-group">

              {this.state.COUNTRIES.map((el,indx)=> (                    
                <li key={indx.toString()} style={box} className="list-group-item" >
                  {el}{'  '}
                  <button className="btn-btn-sm btn-primary" 
                  onClick={this.takeClick}
                  >click</button>
                  </li>
              )
         )}
      
      

    
</ul>

        );
      
              }
}

export default ClassEventButton;