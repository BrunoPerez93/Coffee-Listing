
import { useState } from 'react';
import './App.css';
import ButtonSelectCoffees from './component/Buttons/Button';
import CardGroup from './component/Card/CardGroup';


function App() {
  const [showAvailableOnly, setShowAvaliableOnly] = useState(false);

  return (
    <div className="App">
      <div className="back-img">
      </div>
      <div className="back-cards">
        <div className='containerTitle'>
          <h1 className='title'>Our Collection</h1>
          <p className='text'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
          <div>
            <ButtonSelectCoffees setShowAvaliableOnly={setShowAvaliableOnly}/>
          </div>
        </div>
        <div className='card-container'>
          <CardGroup showAvailableOnly={showAvailableOnly}/>
        </div>
      </div>

    </div>
  );
}

export default App;
