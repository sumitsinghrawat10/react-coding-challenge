import { createContext } from 'react';
import './App.css';
import B from './B';

const Data = createContext()
function App() {
  return (
 <div style={{ textAlign:"center"  } } >
  
  <Data.Provider value="react js use context  ">
    <B/>
    </Data.Provider> 
  </div>
  );
}

export default App;
export {Data};
