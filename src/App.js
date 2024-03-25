
import './App.css';
import CardItem from './component/Card/CardItem';
import cappuccino from './assets/cappuccino.jpg'
import espresso from './assets/espresso.jpg'
import houseCoffee from './assets/house-coffee.jpg'
import latte from './assets/latte.jpg'
import chocolate from './assets/chocolate.jpg'
import sanValentin from './assets/san-valentin.jpg'


function App() {
  return (
    <div className="App">
      <div className="back-img">
        <div className="back-cards">
          <div className='containerTitle'>
            <h1 className='title'>Our Collection</h1>
            <p  className='text'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
            <div>
              <button className='button'>All Products</button>
              <button className='button'>Available Now</button>
            </div>
          </div>
          <div className='card-container'>
            <CardItem img={cappuccino} title="Cappuccino" price="$5.20" votes='&#9733; 4.7 (65 votes)' />
            <CardItem img={houseCoffee} title="House Coffee" price="$3.50" votes='&#9733; 4.85 (14 votes)' />
            <CardItem img={espresso} title="Espresso" price="$2.50" votes='&#9733; 4.9 (55 votes)' />
            <CardItem img={latte} title="Coffee Latte" price="$4.50" votes='&#9733; 5.0 (23 votes)' />
            <CardItem img={chocolate} title="Chocolate Coffe" price="$4.00" votes='&#9733; 4.65 (122 votes)' />
            <CardItem img={sanValentin} title="Valentin Special" price="$5.50" votes='&#9733; No ratings' />

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
