import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header';

import Footer from './components/Footer';

import LuxeWhiteCoffe from './assets/products/LUXXEWHITECOFFEE.webp';
import LUXXEWHITEBRILLIANTSET from './assets/products/LUXXEWHITEBRILLIANTSET.webp';

import LW30 from './assets/products/LW30.png';

import SLIM from './assets/products/Luxxe SLIM.jpg';
import renew from './assets/products/Luxxe renew.jpg'; 
import protect from './assets/products/Luxxe protect.jpg'; 
import ImmunPlus from './assets/products/Luxxe-ImmunPlus.png';

import SWB from './assets/products/SWB.jpg';
import Oatmeal from './assets/products/Oatmeal.jpg'; 
import papaya from './assets/products/orange papaya.jpg';
import Instabright from './assets/products/Instabright.png';
import DDStick1 from './assets/products/DDStick-00.png'; 
import DDStick2 from './assets/products/DDStick-01.png'; 

const products = [
    {
        name: 'Luxxe White+ Health & Beauty Coffee',
        price: 'SUGGESTED RETAIL PRICE(SRP): PHP 488.00',
        img:LuxeWhiteCoffe,
    },
    {
        name: 'Luxxe White Brilliant Exfoliating Facial Set',
        price: 'SUGGESTED RETAIL PRICE(SRP): PHP 488.00',
        img:LUXXEWHITEBRILLIANTSET,
    },
    {
        name: 'Luxxe White - 30 Capsules',
        price: 'SUGGESTED RETAIL PRICE(SRP): PHP 1,490.00',
        img:LW30,
    },
    {
        name: 'Luxxe Immunplus',
        price: 'SUGGESTED RETAIL PRICE(SRP): PHP 1,490.00',
        img:ImmunPlus,
    },
    {
        name: 'Luxxe Slim',
        price: 'SUGGESTED RETAIL PRICE(SRP): PHP 2,980.00',
        img:SLIM,
    },
    {
        name: 'Luxxe Renew',
        price: 'SUGGESTED RETAIL PRICE(SRP): PHP 2,980.00',
        img:renew,
    },
    {
        name: 'Luxxe Protect',
        price: 'SUGGESTED RETAIL PRICE(SRP): PHP 1,000.00',
        img:protect,
    },
    {
        name: '01 Skin Whitening Bar',
        price: 'SUGGESTED RETAIL PRICE(SRP): PHP 240.00',
        img:SWB,
    },
    {
        name: '02 Oatmeal Exfoliant Bar',
        price: 'SUGGESTED RETAIL PRICE(SRP): PHP 240.00',
        img:Oatmeal,
    },
    {
        name: '03 Orange Papaya Bar',
        price: 'SUGGESTED RETAIL PRICE(SRP): PHP 240.00',
        img:papaya,
    },
    {
        name: 'Luxxe White Reveal Instabright Body Creme - Spf 25',
        price: 'SUGGESTED RETAIL PRICE(SRP): PHP 1,888.00',
        img:Instabright,
    },
    {
        name: 'Luxxe White Reveal Dynamic Duo Bb + Cc Hybrid Stick - SPF 50 PA+++ SHADE 00',
        price: 'SUGGESTED RETAIL PRICE(SRP): PHP 1,988.00',
        img:DDStick1,
    },
    {
        name: 'Luxxe White Reveal Dynamic Duo Bb + Cc Hybrid Stick - SPF 50 PA+++ SHADE 01',
        price: 'SUGGESTED RETAIL PRICE(SRP): PHP 1,988.00',
        img:DDStick1,
    },
    {
        name: 'Luxxe White Reveal Dynamic Duo Bb + Cc Hybrid Stick - SPF 50 PA+++ SHADE 02',
        price: 'SUGGESTED RETAIL PRICE(SRP): PHP 1,988.00',
        img:DDStick2,
    },
    {
        name: 'Luxxe White Reveal Dynamic Duo Bb + Cc Hybrid Stick - SPF 50 PA+++ SHADE 03',
        price: 'SUGGESTED RETAIL PRICE(SRP): PHP 1,988.00',
        img:DDStick2,
    },
];
// import Frontrow from '../src/assets/Video/Frontrow All In - Cut Revision.mp4';
function App() {

    const [cart,setCart]=useState(0);
    
    const cartHand=()=>{
        setCart(cart+1);
    }
    return (
        <>
            <Header cart={cart}></Header>
            <div   className='shop' >
                
            {products.map((prod, index) => (
                <div className='product'>
                    <div className='img'>
                    <img src={"./"+prod.img} style={{maxWidth:'150px'}}></img></div>
                    <h3>{prod.name}</h3>
                    <p>{prod.price}</p>
                    <a className='Details'>Product Details</a>
                    <br></br>
                    <a className='Cart' onClick={cartHand}>Add to Cart</a>
                </div>
            ))}
            </div>
            <Footer></Footer>
        </>
    )
}

export default App
