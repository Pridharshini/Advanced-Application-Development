// import React, { useState } from 'react';
// import NavigationBar from '../Components/NavigationBar';
// import { Link } from 'react-router-dom';
// import Footer from '../Components/Footer';
// import '../assets/LandingPage.css'; // Import CSS for LandingPage

// function LandingPage() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === totalSlides - 1 ? 0 : currentSlide + 1);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? totalSlides - 1 : currentSlide - 1);
//   };

//   const totalSlides = 3; // Update this with the total number of slides

//   return (
//     <div>
//       <div>
//         <NavigationBar />
//       </div>

//       <div className='mainSection'>
//         <div className='contentBox'>
//           <h1>Unlock Your Potential in British English Excellence with BEC Today!</h1>
        
//           <div className='btnBox'>
//             <Link to='/about' className='readMore'>Read More</Link>
//           </div>
//         </div>
//         <div className='slider'>
//           <div className='slides' style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          
//             <div className='slide'>
//               <div className='card'>
//                 <img src="https://www.ccjk.com/content/uploads/2013/08/Compare-and-contrast-British-with-American-language.jpg" alt="Elearning platform" />
//                 <div className='cardContent'>
//                   <h2>Discover Our Learning Platform</h2>
//                   <p>Explore our cutting-edge e-learning platform designed to provide you with an immersive learning experience.</p>
//                   <Link to='/services' className='readMore'>Learn More</Link>
//                 </div>
//               </div>
//             </div>
         
//             <div className='slide'>
//               <div className='card'>
//                 <img src="https://d39eazhratf38c.cloudfront.net/Pictures/480xany/0/5/9/60059_155488_27676.jpg" alt="Card title" />
//                 <div className='cardContent'>
//                   <h2>Unlock Advanced English Skills</h2>
//                   <p>Dive into advanced English language skills including grammar, vocabulary, and pronunciation to boost your proficiency to the next level.</p>
//                   <Link to='/services' className='readMore'>Learn More</Link>
//                 </div>
//               </div>
//             </div>
          
//             <div className='slide'>
//               <div className='card'>
//                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUR2n8RyKC-PAXhJSIHru_s4uSQMB1hKDziQ&usqp=CAU" alt="Card title" />
//                 <div className='cardContent'>
//                   <h2>Personalized Learning Paths</h2>
//                   <p>Tailor your learning experience with personalized learning paths designed to address your unique language learning needs and goals."</p>
//                   <Link to='/services' className='readMore'>Learn More</Link>
//                 </div>
//               </div>
//             </div>
          
//           </div>
//           <button className='prev' onClick={prevSlide}>&#10094;</button>
//           <button className='next' onClick={nextSlide}>&#10095;</button>

//         </div>
//       </div>

//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default LandingPage;
import React from 'react'

function LandingPage() {
  return (
    <div>LandingPage</div>
  )
}

export default LandingPage
