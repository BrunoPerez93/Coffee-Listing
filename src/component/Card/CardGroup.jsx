import CardItem from './CardItem'
import {getCoffees} from '../../helpers/getCoffees';
import { useEffect, useState } from 'react'


const CardGroup = ({ showAvailableOnly }) => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    const fetchCoffees = async () => {
      const coffeeData = await getCoffees();
      setCoffees(coffeeData);
    };

    fetchCoffees();
  }, []);

  const filteredCoffees = showAvailableOnly ? coffees.filter(coffee => coffee.available) : coffees;

  return (
    <>
      {filteredCoffees.map(coffee => (
        <CardItem
          key={coffee.id}
          img={coffee.image}
          title={coffee.name}
          alt={coffee.name}
          price={coffee.price}
          votes={`⭐${coffee.rating} (${coffee.votes} votes)`}
          popular={!coffee.available}
          isAvailable={coffee.available}
        />
      ))}
    </>
  );
};

export default CardGroup;