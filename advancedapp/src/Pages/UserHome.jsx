import React from 'react';
import '../Pages/UserHome.css'
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';

function UserHome() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row1">
        <h2 class="pa1">Most Popular Certificates</h2>

          <div className="pa1card card">
            <img className="pa1im product-image" src="https://m.media-amazon.com/images/I/91nzwwEaLWL.AC_UF1000,1000_QL80.jpg" alt="Denim Jeans" />
            <div className="pa1contain">
              <h1>KET</h1>
              <p> ₹10,000-₹15,000</p>
              <p>A basic-level exam testing fundamental English language skills. </p>
             <Link to ="/content1" ><button class="viewbut">View</button></Link>
            </div>
          </div>
          <div className="pa2card card">
            <img className="pa2im product-image" src="https://cdn.awsli.com.br/800x800/2507/2507517/produto/206500882af54ea8038.jpg" alt="Denim Jeans" />
            <div className="pa2contain">
              <h1>IELTS</h1>
              <p>₹12,000-₹15,000</p>
              <p>A widely accepted exam for study and work,assessing proficiency in English.</p>
              <Link to ="/content1" ><button class="viewbut">View</button></Link>
            </div>
          </div>
          <div className="pa3card card">
            <img className="pa3im product-image" src="https://d20ohkaloyme4g.cloudfront.net/img/document_thumbnails/96e5b1a81b3fb785020eea010479e74a/thumb_1200_1200.png" alt="Denim Jeans" />
            <div className="pa3contain">
              <h1>SELTs  </h1>
              <p>₹10,000-₹15,000</p>
              <p> Trinity qualifications Exams that are widely accepted for UK Visas,study,work Immigration purposes.</p>
              <Link to ="/content1" ><button class="viewbut">View</button></Link>
            </div>
          </div>
          <div className="pa4card card">
            <img className="pa4im product-image" src="https://m.media-amazon.com/images/I/71OZYxYm0PL.AC_UF1000,1000_QL80.jpg" alt="Denim Jeans" />
            <div className="pa4contain">
              <h1>TOEFL</h1>
              <p>₹13,000-₹20,000</p>
              <p>Assess academic English proficiency for non-native English speakers.</p>
              <Link to ="/content1" ><button class="viewbut">View</button></Link>
            </div>
          </div>
        </div>

        <div className="row2">
        <h2 class="pa2">What to learn next</h2>
            <div className="pa5card card">
            <img className="pa5im product-image" src="https://m.media-amazon.com/images/I/91dIXIWsJJL._AC_UF894,1000_QL80_.jpg" alt="Denim Jeans" />
            <div className="pa5contain">
              <h1>TKT (Teaching Knowledge Test)</h1>
              <p>₹13,000-₹20,000</p>
              <p> A test for teachers to enhance their teaching skills in English language teaching.</p>
              <button class="viewbut">View</button>
            </div>
          </div>

          <div className="pa6card card">
            <img className="pa6im product-image" src="https://image.isu.pub/140715143606-3f005dcbda7e1b426b36e9e3297bb5b3/jpg/page_1.jpg" alt="Denim Jeans" />
            <div className="pa6contain">
              <h1>IGCSE English as a Second Language (ESL)</h1>
              <p>₹15,000-₹20,000</p>
              <p> International qualification assessing English language proficiency for students.</p>
              <button class="viewbut">View</button>
            </div>
          </div>
          <div className="pa7card card">
            <img className="pa7im product-image" src="https://pictures.abebooks.com/isbn/9780194568609-us.jpg" alt="Denim Jeans" />
            <div className="pa7contain">
              <h1>Oxford Test of English</h1>
              <p>₹10,000-₹15,000</p>
              <p>A computer-adaptive test assessing English proficiency at all levels of the CEFR for students. </p>
              <button class="viewbut">View</button>
            </div>
          </div>
          <div className="pa8card card">
            <img className="pa8im product-image" src="https://imgv2-2-f.scribdassets.com/img/document/143997195/original/db4041e8b9/1709995273?v=1" alt="Denim Jeans" />
            <div className="pa8contain">
              <h1>City & Guilds International ESOL exams</h1>
              <p>₹7,000-₹15,000</p>
              <p>Recognized English language qualifications for learners worldwide.</p>
              <button class="viewbut">View</button>
            </div>
          </div>  
      </div>

        

        


</div>

</div>



  );
}

export default UserHome;