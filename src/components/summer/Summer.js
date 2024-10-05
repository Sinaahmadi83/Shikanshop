import List from "../../List";
import Foter from "../foter/Foter";
import ProductList from "../product/Product";

function Summer(){

    return (
      <>
      <div className='contain'>
        <List />
        <div className='productcss'>
          <h1>کالکشن بهاره و تابستانه</h1>
         <ProductList name='پیراهن‌لی' pic='../../../public/images/summer/sum1.jpg'  price=' 100 تومان' />
         <ProductList  name='پیراهن‌سفید' pic='../../../public/images/summer/sum2.jpg'  price='200 تومان'/>
         <ProductList  name='شلوارک' pic='../../../public/images/summer/sum3.jpg'  price='300 تومان'/>
         <ProductList  name='تیشرت‌نخی' pic='../../../public/images/summer/sum4.jpg'  price='400 تومان'/>
         <ProductList  name='پیراهن‌قهوه‌ای' pic='../../../public/images/summer/sum5.jpg'  price='500 تومان'/>
         <ProductList  name='پیراهن‌نخی' pic='../../../public/images/summer/sum6.jpg'  price='600 تومان'/>
         </div>
        </div>
      <Foter />
      </>
    );
  };

  export default Summer;