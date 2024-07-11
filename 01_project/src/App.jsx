import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' //bad practice
import Navigation from './Components/Navigation'
import Hero from './Components/Hero'

function App() {

  return (
    // <>
    //   <div>
    //     <nav>
    //       <div className='Logo'>
    //         <img src="/Images/brand_logo.png" alt="Nike" />
    //       </div>
    //       <ul>
    //         <li href="#">MENU</li>
    //         <li href="#">LOCATION</li>
    //         <li href="#">ABOUT</li>
    //         <li href="#">CONTACT</li>
    //       </ul>
    //       <button>Login</button>
    //     </nav>
    //     <main>
    //       <div className='Left'>
    //         <p><span>YOUR FEET DESERVE THE BEST</span></p>
    //         <div>
    //           <p>
    //             YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br />HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />SHOES.
    //           </p>
    //         </div>
    //         <div>
    //           <button>Shop Now</button>
    //           <button>Category</button>
    //         </div>
    //         <div>
    //           <p>Also Available On</p>
    //           <div>
    //             <img src="/Images/flipkart.png" alt="" />
    //             <img src="/Images/amazon.png" alt="" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className='Right'>
    //         <img src="/Images/shoe_image.png" alt="" />
    //       </div>
    //     </main>
    //   </div>

    // </>

    //Professional Code is starting from here
    <div>
      <Navigation/>
      <Hero/>
    </div>
  )
}

export default App
