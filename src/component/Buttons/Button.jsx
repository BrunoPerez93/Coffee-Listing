const ButtonSelectCoffees = ({setShowAvaliableOnly}) => {
  return (
    <>
      <button className='button' onClick={() => setShowAvaliableOnly(false)}>All Products</button>
      <button className='button' onClick={() => setShowAvaliableOnly(true)}>Available Now</button>
    </>
  )
}

export default ButtonSelectCoffees;