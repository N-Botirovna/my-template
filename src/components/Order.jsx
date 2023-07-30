const Order = ({num, title}) => {
    
    return(
      <>
        <span className='bg-blue-700 rounded-full px-3 py-1 text-white font-bold'>{num}</span>
        <span className="ml-4 font-semibold text-lg">{title}</span>
      </>
    )
  }

  export default Order;