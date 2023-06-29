import List from "./list" ;
import "./App.css";
import EventHandler from "./toopics events/event index";

function  App() {
  const COUNTRIES=['india','nepal','america','london'];
  return (
    
        <div className="containers p-5">
       <List countries={COUNTRIES} name="Number Of Countries" id='5' />
        </div>
  );
}
export default App; 