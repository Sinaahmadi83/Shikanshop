import List from "../../List";
import Foter from "../foter/Foter";
import ProductList from "../product/Product";

function Fall(){

    return (
      <>
      <div className='contain'>
        <List />
        <div className='productcss'>
          <h1>کالکشن پاییزه</h1>
         <ProductList name='پالتو‌قهوه‌ای' pic='../../../public/images/fall/fal1.jpg'  price=' 100 تومان' />
         <ProductList  name='پالتو‌مشکی' pic='../../../public/images/fall/fal2.jpg'  price='200 تومان'/>
         <ProductList  name='کاپشن‌بارونی' pic='../../../public/images/fall/fal3.jpg'  price='300 تومان'/>
         <ProductList  name='ژاکت' pic='../../../public/images/fall/fal4.jpg'  price='400 تومان'/>
         <ProductList  name='ژاکت‌پشمی' pic='../../../public/images/fall/fal5.jpg'  price='500 تومان'/>
         <ProductList  name='کت' pic='../../../public/images/fall/fal6.jpg'  price='600 تومان'/>
         </div>
        </div>
      <Foter />
      </>
    );
  };

  export default Fall;