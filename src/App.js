import React from 'react';
import Home from './Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Fall from './components/fall/Fall';
import Summer from './components/summer/Summer';
import Winter from './components/winter/Winter';
function App(){
    return(
      <>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/fall' element={<Fall />} />
               <Route path='/summer' element={<Summer />} />
               <Route path='/winter' element={<Winter />} />
               <Route path='/*' element={<Home />} />
            </Routes>
         </BrowserRouter>
       </>
    );}
    export default App;