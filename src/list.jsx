import React from "react";
import classes from "./list.css";
// class List extends React.Component{}


// export default App;
   function List(props) {
    console.log(props)
    const {id,countries}=(props)
    return (
      <ul className="list-group">
        <div>{props.nameDum}</div>
        {countries.map((el,e)=> (                    
          <li key={e.title} className="list-group-item">
            {el}
            </li>
        )
   )}

  
</ul>
    );
    }

    List.defaultProps={
      nameDum: ["Default value"],
      countries:['default'],
    }
      
  





export default List;