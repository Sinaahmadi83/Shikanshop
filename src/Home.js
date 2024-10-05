import './Home.css'
import React, { useState } from 'react';
import ProductList from './components/product/Product';
import Navbar from './components/navbar/Navbar'
import Bgimg from './Bgimg';
import Information from './components/information/Information';
import Foter from './components/foter/Foter';
import List from './List';

function Home(){

    return(
      <>
       <div>
         <Navbar />
         <List />
        <Bgimg />
        <div className="products">
        <h1 className='title'>______________________________________________________  پر فروش‌ترین‌ها   ___________________________________________________</h1>
         <div className='productcss'>
         <ProductList name='پالتو‌قهوه‌ای' pic='../public/images/fall/fal1.jpg'  price=' 100 تومان' />
         <ProductList  name='پالتو‌مشکی' pic='../public/images/fall/fal2.jpg'  price='200 تومان'/>
         <ProductList  name='پیراهن‌لی' pic='../public/images/summer/sum1.jpg'  price='300 تومان'/>
         <ProductList  name='پیراهن‌سفید' pic='../public/images/summer/sum2.jpg'  price='400 تومان'/>
         <ProductList  name='‌کت‌قهوه‌ای' pic='../public/images/winter/win1.jpg'  price='500 تومان'/>
         <ProductList  name='کت‌سفید'  pic='../public/images/winter/win2.jpg'  price='600 تومان'/>
         </div>
      <Information />
      <Foter />
    </div>
       </div>
       </>
    );}
    export default Home;