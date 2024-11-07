import { useState } from 'react' 
import './App.css'
import Header from './components/layout/Header';
import Slideshow from './components/Slideshow';
import FrontRowBannerVideo from '../src/assets/Video/FrontRowBannerVideo.mp4';
import mayweatherthumbnail from '../src/assets/mayweatherthumbnail.webp';
import CHA_EUN_WOO_2 from '../src/assets/CHA_EUN_WOO_2.webp';
import Ellen from '../src/assets/Ellen-Adarna-e1522871261471.jpg';
import kathrynbernardo from '../src/assets/kathrynbernardo.webp';
import RABIYA from '../src/assets/RABIYA.webp';

import Footer from './components/Footer';
 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
       <Slideshow></Slideshow>
       <video autoPlay={true} muted>
        <source src={"./"+FrontRowBannerVideo}></source>
       </video>
       <h1 style={{color:'white',marginTop:'5%', borderTop:'red solid 5px',padding:'5px', borderBottom:'red solid 5px',textAlign:'center',width:'50%',marginLeft:'auto',marginRight:'auto'}}>
        BE UNDEFEATED. BE FRONTROW.</h1>
       <h3 style={{textAlign:'center',color:'white',padding:'5px',marginBottom:'5%'}}>
        Come aboard and join forces with the Universe's Undefeated Marketing Company, FRONTROW</h3>
       <img src={"./"+mayweatherthumbnail} style={{width:'100%'}}></img>
       <div className='img1' style={{backgroundImage:`url(./${CHA_EUN_WOO_2})`}}></div> 
       <div className='img1' style={{backgroundImage:`url(./${Ellen})`}}></div> 
       <div className='img1' style={{backgroundImage:`url(./${kathrynbernardo})`}}></div> 
       <div className='img1' style={{backgroundImage:`url(./${RABIYA})`}}></div> 
       <h1 style={{color:'white',marginTop:'5%', borderTop:'red solid 5px',padding:'5px', borderBottom:'red solid 5px',textAlign:'center',width:'50%',marginLeft:'auto',marginRight:'auto'}}>
       What’s New</h1>
       <h3 style={{textAlign:'center',color:'white',padding:'5px',marginBottom:'5%'}}>
       Be Part of the Frontrow Universe</h3>
       <video controls style={{marginLeft:'auto',marginRight:'auto',display:'block',width:'85%'}}>
        <source src='https://prodfrontrowblobstorage.blob.core.windows.net/fr-public-content/Inspire%20Videos/Frontrow%20All%20In%20-%20Cut%20Revision.mp4'></source>
       </video>
       <div style={{textAlign:'center',color:'black',backgroundColor:'lightgray',padding:'5%'}}>
        <h1 style={{width:'40%',marginLeft:'auto',marginRight:'auto'}}>We are in the business of changing people’s lives.</h1>
        <h4 style={{width:'80%',marginLeft:'auto',marginRight:'auto',fontWeight:'normal',padding:'5%'}}>Driven to dominate on a multi-level platform, FRONTROW elevates a new breed of entrepreneurs for the challenges of self-growth and financial freedom.</h4>
       </div>
       <Footer></Footer>
    </>
  )
}

export default App
