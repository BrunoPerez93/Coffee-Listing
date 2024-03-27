import CardItem from './CardItem'
import cappuccino from '../../assets/cappuccino.jpg'
import espresso from '../../assets/espresso.jpg'
import houseCoffee from '../../assets/house-coffee.jpg'
import latte from '../../assets/latte.jpg'
import chocolate from '../../assets/chocolate.jpg'
import sanValentin from '../../assets/san-valentin.jpg'

const CardGroup = ({ showAvailableOnly }) => {
  return (
    <>
      {!showAvailableOnly && (
        <>
          <CardItem
            img={cappuccino}
            title="Cappuccino"
            alt='Foto de cafe'
            price="$5.20"
            votes='&#9733; 4.7 (65 votes)'
          />
          <CardItem
            img={houseCoffee}
            title="House Coffee"
            alt='Foto de cafe'
            price="$3.50"
            votes='&#9733; 4.85 (14 votes)'
          />
          <CardItem
            img={espresso}
            title="Espresso"
            alt='Foto de cafe'
            price="$2.50"
            votes='&#9733; 4.9 (55 votes)'
          />
          <CardItem
            img={latte}
            title="Coffee Latte"
            alt='Foto de cafe'
            price="$4.50"
            votes='&#9733; 5.0 (23 votes)'
          />
          <CardItem
            img={sanValentin}
            title="Valentin Special"
            alt='Foto de cafe'
            price="$5.50"
            votes='&#9733; No ratings'
          />
        </>
      )}
      <CardItem
        img={chocolate}
        title="Chocolate Coffe"
        alt='Foto de cafe'
        price="$4.00"
        votes='&#9733; 4.65 (122 votes)'
        isSoldOut={true}
        isAvailable={!showAvailableOnly}
      />

    </>
  )
}
export default CardGroup;