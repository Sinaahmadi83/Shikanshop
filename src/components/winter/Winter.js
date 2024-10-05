import List from "../../List";
import Foter from "../foter/Foter";
import ProductList from "../product/Product";

function Winter(){

    return (
      <>
      <div className='contain'>
        <List />
        <div className='productcss'>
          <h1>کالکشن زمستانه</h1>
         <ProductList name='‌کت‌قهوه‌ای' pic='../../../public/images/winter/win1.jpg'  price=' 100 تومان' />
         <ProductList  name='کت‌سفید' pic='../../../public/images/winter/win2.jpg'  price='200 تومان'/>
         <ProductList  name='کاپشن‌چرمی' pic='../../../public/images/winter/win3.jpg'  price='300 تومان'/>
         <ProductList  name='شالگردن' pic='../../../public/images/winter/win4.jpg'  price='400 تومان'/>
         <ProductList  name='ژاکت' pic='../../../public/images/winter/win5.jpg'  price='500 تومان'/>
         <ProductList  name='پالتو' pic='../../../public/images/winter/win6.jpg'  price='600 تومان'/>
         </div>
        </div>
      <Foter />
      </>
    );
  };
  export default Winter;