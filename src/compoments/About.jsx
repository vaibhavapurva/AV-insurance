import { Link } from 'react-router-dom';
import './about.css';

const About = () =>{
      return(<>
      <main className='about'>
        <section className='about-hero'>
                <h1>Your Partner in Progress Through Protection</h1>
                <p>At SafeLife Insurance, we believe in safeguarding dreams, building trust, and ensuring a secure tomorrow for you and your family.</p>
        </section>
        <section className='whoweare'>
            <h1>Who We Are</h1>
            <p>SafeLife Insurance is one of India’s trusted insurance providers, committed to delivering financial protection and peace of mind for millions of families. With decades of expertise, a customer-first approach, and innovative solutions, we are redefining the insurance industry.</p>
        </section>
        <section className='vision_mission'>
            <div className="vision_card">
                <h2>Our Vision</h2>
                <p>To be the most reliable insurance partner, ensuring security and growth for every household.</p>    
            </div> 
            <div className="vision_card">
                <h2>Our Mission</h2>
                <p>To empower lives through innovative policies, transparent communication, and seamless claim settlements.</p>    
            </div>
        </section>
        <section className='Choose'>
            <h1> Why Choose SafeLife?</h1>
            <div className='choose-cards'>
                <div className='chosse-carda'>
                    ⚡
                    <h3>Agile & Scalable</h3>
                    <p>Our processes are designed to adapt to your needs.</p>
                </div>
                <div className='chosse-carda'>
                    🏆
                    <h3>Proven Success</h3>
                    <p>Thousands of satisfied customers and 95% claim ratio.</p>
                </div>
                <div className='chosse-carda'>
                🤝
                    <h3>Transparency</h3>
                    <p>Clear policies, no hidden conditions.</p>
                </div>
                <div className='chosse-carda'>
                    💡
                    <h3>Innovation</h3>
                    <p>Smart digital solutions for faster support.</p>
                </div>
            </div>
        </section>
        <section className='achievements'>
            <div className="achi-card">
                <h2>20+</h2>
                <p>Years of Trust</p>   
            </div>
             <div className="achi-card">
                <h2>1M+</h2>
                <p>Happy Policyholders</p>   
            </div>
             <div className="achi-card">
                <h2>95%</h2>
                <p>Claim Settlement Ratio</p>   
            </div>
             <div className="achi-card">
                <h2>500+</h2>
                <p>Corporate Partners</p>   
            </div>
            
        </section>
        <section className='banner'> 
            <h1>Let’s Build a Secure Future Together</h1>
            <p>Whether you're an individual, family, or business – SafeLife is ready to protect your tomorrow.</p>
            <Link to={"/contact"}className="btn-primary">Contact Us</Link>
        </section>
      </main>
    </>)
}

export default About;