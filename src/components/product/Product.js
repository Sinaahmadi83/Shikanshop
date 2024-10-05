import './Product.css'

function ProductList(props){
  return(
    <div className='contain1'>
      <div className='fat'>
            <div className='img2'><img src={props.pic} /></div>
            <h5 className='h5'>{props.name}</h5>
            <p className='p5'>{props.price}</p>
            <button className='btn2'>افزودن‌به‌سبد‌خرید</button>
      </div>
      </div>
  ) 
}
  export default ProductList;