const Order = ({num, title}) => {
    
    return(
      <span className="block mb-7">
        <button className='bg-blue-700 rounded-full px-3 py-1 text-white font-bold'>{num}</button>
        <button className="ml-4 font-semibold text-lg">{title}</button>
      </span>
    )
  }

  export default Order;