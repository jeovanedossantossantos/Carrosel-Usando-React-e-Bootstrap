
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Carousel from './componentes/Carousel'




function App() {
  return (
   
    <BrowserRouter>
      <div className="App">
        

        <Route path='/' exact component={Carousel} />

       

      </div>
    </BrowserRouter>
    
  );
}

export default App;
