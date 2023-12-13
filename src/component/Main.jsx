import logo from '../Asset/logo.svg';
import iconHamburger from '../Asset/icon-hamburger.svg';
import iconArrow from '../Asset/icon-arrow.svg';
import iconClose from '../Asset/icon-close.svg';
import { useState } from 'react';
import image1 from '../Asset/desktop-image-hero-1.jpg';
import image2 from '../Asset/desktop-image-hero-2.jpg';
import image3 from '../Asset/desktop-image-hero-3.jpg';
import iconLeftArrow from '../Asset/icon-angle-left.svg';
import iconRightArrow from '../Asset/icon-angle-right.svg';

   const Main = () => {

    const [navDisplay,setNavDisplay]=useState(false);
    const [deviceWidth,setdeviceWidth]= useState(window.innerWidth);
    const [currentIndex, setCurrentIndex] = useState(0);

    const asideContent1 = <>
    <h1> Discover innovative ways to decorate</h1>
           <p>
           We provide unmatched quality, comfort, and style for property owners across the country. 
           Our experts combine form and function in bringing your vision to life. Create a room in your 
           own style with our collection and make your property a reflection of you and what you love.
           </p>
          <a href="/"> SHOP NOW  <img src={iconArrow} alt="arrow" /> </a>  
</>;

const asideContent2 = <>
<h1> Manufactured with the best materials</h1>
  <p>
  Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
   to ensure that every product is made as perfect and as consistent as possible. With three decades of 
   experience in this industry, we understand what customers want for their home and office.
  </p>
 <a href="/"> SHOP NOW  <img src={iconArrow} alt="arrow" /> </a>  
</>;

const asideContent3 = <>
<h1> About our furniture</h1>
  <p>
  Our multifunctional collection blends design and function to suit your individual taste.
Make each room unique, or pick a cohesive theme that best express your interests and what
inspires you. Find the furniture pieces you need, from traditional to contemporary styles
or anything in between. Product specialists are available to help you create your dream space.
  </p>
 <a href="/"> SHOP NOW  <img src={iconArrow} alt="arrow" /> </a>  
</>;

    const items = [
        {
          image: image1,
          aside: asideContent1,
        },
        {
          image: image2,
          aside: asideContent2,
        },
        {
          image: image3,
          aside: asideContent3,
        }
      ];


    
const handleSlide = (direction) => {
    let newIndex;
    if (direction === 'previous') {
      newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    } else if (direction === 'next') {
      newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    }

    setCurrentIndex(newIndex);
  };
    const openNav =()=>{
        setNavDisplay(true);
    }
    const closeNav = () =>{
        setNavDisplay(false);
    }
    window.onresize=()=>{
        setdeviceWidth(window.innerWidth)
    }

    return (
        <> 
        <main className='flex'>

            <div style={{backgroundImage:`url(${items[currentIndex].image})`}}>
               
            <a className=' imageLogo' href="/"> 
                <img src={logo} alt="" />
            </a>
           
                    <nav style={{display:(deviceWidth < 600) ? (navDisplay ? "block" : "none") : "block"}} >
                    <ul>
                        <a href='/'><img src={iconClose} alt="" id='icon-close' onClick={closeNav} /></a>
                        <li> <a href="http://"> home</a> </li>
                        <li> <a href="http://">shop </a> </li>
                        <li> <a href="http://"> about</a> </li>
                        <li> <a href="http://"> contact</a> </li>
                    </ul>     
                </nav>
               
        <section className='arrow'>
            <div> <img src={iconLeftArrow} alt="arrow" id='arrow-left' onClick={() => handleSlide('previous')} /></div>
            <div> <img src={iconRightArrow} alt="arrow" id='arrow-right' onClick={() => handleSlide('next')} /></div>
         </section>

            </div>

         <img src={iconHamburger} alt="hamburger" id='hamburger' onClick={openNav} />
         
        

          <aside >
          {items[currentIndex].aside}  
          </aside>

         
         
      </main>

       
      </>
    )
   }

export default Main;