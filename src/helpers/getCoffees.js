export const getCoffees = async () => {

  const url = `https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json`
  const resp = await fetch(url);
  const coffeeData = await resp.json();

  const coffees = coffeeData.map(item => ({
    id: item.id,
    name: item.name,
    image: item.image,
    price: item.price,
    rating: item.rating || 'No Rating',
    votes: item.votes,
    popular: item.popular,
    available: item.available,
  }));

  return coffees;

}