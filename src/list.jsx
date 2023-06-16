import React from "react";
import classes from "./list.css";
class List extends React.Component{
  constructor(props){
    super(props);
  this.state={name:'react', regno:'105'};
  setTimeout(() =>{
    this.setState({name:'Angular'})
    this.setState({regno:'102'})
  },5000);
  }
  
  


  render() {
    console.log(this.props)
    return (
      <ul className="list-group">
        <div>{this.state.name}</div>
        <div>{this.state.regno}</div>
        {this.props.countries.map((el,e)=> (                    
          <li key={e.title} className="list-group-item">
            {el}
            </li>
        )
   )}

</ul>
    );
        }  
  }


// export default App;
//    function List(props) {
//     console.log(props)
//     const {id,countries}=(props)
//     return (
//       <ul className="list-group">
//         <div>{props.nameDum}</div>
//         {countries.map((el,e)=> (                    
//           <li key={e.title} className="list-group-item">
//             {el}
//             </li>
//         )
//    )}

  
// </ul>
//     );
//     }

    // List.defaultProps={
    //   nameDum: ["Default value"],
    //   countries:['default'],
    // }
      
  
//




export default List;