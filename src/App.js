
import './App.css';
import{Button} from "./components/Body/Button"
import{Cart} from "./components/Navbar/Navbar"
import{Home} from "./components/Homepage"
import{Heaven} from "./components/Heaven"
import{Routes,Route} from "react-router-dom"
import {Navbars} from "./components/Navbars"
import {Productdetailes} from "./components/Productdetailes"
function App() {
  return (
    <div className="App">
      <Navbars/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/heaven' element={<Heaven/>}/>
  <Route path='/productdetailes/:id' element={<Productdetailes/>}/>
</Routes>
{/* <Cart/>
      <Button/> */}
    </div>
  );
}

export default App;
