import { useState } from 'react'
import './App.css'
import Header from './components/layout/Header';

import Footer from './components/Footer';
import aboutImg from './assets/Sam+Versoza+x+RS+Francisco.jpg';
function App() {

    return (
        <>
            <Header></Header>
            <img src={"./"+aboutImg} style={{ width: '100%', marginTop: '6.5%' }}></img>
            <div className='founders' style={{ backgroundColor: 'white' }}>
                <h1 style={{ padding: '5% 0% 0 5%', color: 'red', textDecoration: 'underline' }}>Our Founders</h1>
                <span style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'justify' }}>
                    <p style={{ padding: '5%' }}>FRONTROW has come to shape today's most innovative, dynamic and compassionate business leaders through the tutelage and guiding principles of exemplary founders/owners:

                        CEO – Sam Verzosa (Businessman/Engineer)

                        President – RS Francisco (Entrepreneur/Actor/Former Advertising Director)</p>
                    <p style={{ padding: '5%' }}>FRONTROW takes pride on its effective, high-quality, and award-winning health and beauty products. Now armed with over 1.5 million active distributors around the globe, FRONTROW is also known as the fastest growing Filipino owned multi-level marketing company.

                        Armed with the Philosophy of Beauty, Health and Wealth, FRONTROW makes beauty and health not just your wealth, but ALSO your “source” of wealth.</p>
                </span>
                <h1 style={{ padding: '5% 0% 0 5%', color: 'red', textDecoration: 'underline' }}>Our History</h1>
                <span style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'justify' }}>
                    <p style={{ padding: '5%' }}>Brilliant business masterminds Sam Verzosa and Raymond Francisco initially crossed paths at the University of the Philippines, Diliman. Here Francisco was known for his epic theater performances while Verzosa was an engineering topnotch. After life in the campus, these two solid friends took separate career paths. Sam first operated several of his own businesses while Raymond or “RS” earned a name in acting and directing.

                        Although their former professions were rather far from the industry they ventured into, both Sam and RS had a powerful penchant for health and beauty products. As a stage and TV actor, RS was always very particular about his skincare regimen and about looking good in front of the camera. Sam, who operated several bar businesses, would also see to staying fit and healthy despite his usual late nights. Their constant pursuit for exceptional health and beauty innovations led Sam and RS to discover the magical line of LUXXE health supplements. Rather than keeping this wonderful secret to themselves, the dynamic tandem opted to share the amazing beauty of LUXXE to the rest of the world, or the universe rather.</p>
                </span>
                <span style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'justify' }}>

                    <p style={{ padding: '5%' }}>
                        <h1 style={{ padding: '5% 0% 0 5%', color: 'red', textDecoration: 'underline' }}>Our Mission</h1>
                        “To create a positive change in people’s lives.”
                    </p>

                    <p style={{ padding: '5%' }}>
                        <h1 style={{ padding: '5% 0% 0 5%', color: 'red', textDecoration: 'underline' }}>Our Vision</h1>
                        “We envision to make a life changing impact through our top-quality health and beauty products, as we dominate the direct sales industry all over the world.”
                    </p>
                </span>
                <h1 style={{ padding: '5% 0% 0 5%', color: 'red', textDecoration: 'underline' }}>
                    Behind Our Products
                </h1>
                <span style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'justify' }}>
                    <p style={{ padding: '5%' }}>
                        Welcome to a world brimming with radiance, beauty and vitality. All these are now within your reach through FRONTROW’s line of LUXXE health and beauty products. Manufactured and bottled in the United States by AIE Pharmaceuticals, our variety of FDA approved and HALAL tested oral supplements were made in strict compliance with the United States Pharmacopoeia (USP), Current Good Manufacturing Process (cGMP) and Standard Operating Procedures (SOP) regulations. AIE Pharmaceuticals (our manufacturer) is FDA registered, licensed by the U.S. Department of Health and Human Services, and is staffed with advanced medical professionals… ensuring products that you can 100% trust!
                    </p>
                </span>
                
            <a className='btprod' href='./shop'>TAKE ME TO THE PRODUCTS</a>
            <br></br>
            </div>
            <Footer></Footer>
        </>
    )
}

export default App
