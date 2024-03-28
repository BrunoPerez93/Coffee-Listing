import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";



const CardItem = ({ img, title, price, alt, votes, popular, isAvailable }) => {

  return (
    <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          style={styles.img}
          src={img}
          alt={alt}
        />
      </CardHeader>
      <CardBody style={styles.content}>
        <Typography variant="h5" color="blue-gray" className="mb-2" style={styles.title}>
          {title}
        </Typography>
        <Typography style={styles.price}>
          {price}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Typography style={styles.votes}>
          {votes}
          {popular && <Typography style={styles.sold}>Sold Out</Typography>}
          {isAvailable}
        </Typography>
      </CardFooter>
    </Card>
  );
}

const styles = {
  img: {
    borderRadius: 20,
    marginBottom: 5,
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    color: '#FEF7EE',
  },
  price: {
    color: '#111315',
    padding: 5,
    backgroundColor: '#BEE3CC',
    borderRadius: 10,
  },
  votes: {
    display: 'flex',
    color: '#FEF7EE',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  sold: {
    color: '#ED735D',
  },
}

export default CardItem;