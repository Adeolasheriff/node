import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Users from './components/users';
import Adduser from './components/adduser';
import Update from './components/update';
import Detail from './components/detail';
function App() {
  return (
        <BrowserRouter>
           <Routes>
             <Route>
               <Route index element = {<Users/>}/>
                <Route path='adduser' element={<Adduser/>}/>
                <Route path='update/:id' element={<Update/>}/>
                <Route path='user/:id' element={<Detail/>}/>
             
             </Route>
           </Routes>
        </BrowserRouter>
  );
}

export default App;
