import List from "./list" ;
import "./App.css";

const COUNTRIES=['india','nepal','america','london'];
function  App() {
  return (
    
    <div className="containers p-5">
   <List countries={COUNTRIES}  id='5' />
    </div>
  );
}
export default App;