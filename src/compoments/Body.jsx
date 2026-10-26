import { Link } from 'react-router-dom';
import './body.css';
import Ambitious from './Ambitious.jsx';

const Body = () =>{
   return(<>
        <main>
            <section className='hero-main'>
                  <h1>Protecting What Matters Most</h1>
                  <p>Comprehensive Health, Life, Motor, and Business Insurance with fast claims and 24/7 support.</p>
                  <div className='hero-btn'>
                    <button className='quote-btn'>Contact Us</button>
                    <button className='claim-btn'>About Us</button>
                  </div>
            </section>
            <section className='solution-main'>
               <h1 className='Sol-heading'> Our Insurance Solutions</h1> 
               <div className='sol-cards'>
                    <div className="sol-card">
                        <h2>Health Insurance</h2>
                        <p>Cashless hospitalisation, preventive health checkups, and 10,000+ network hospitals.</p>
                        <Link to={"/healthInsurance"}
                        className='moreInfo'>More Info</Link>
                    </div>
                    <div className="sol-card">
                        <h2>Life Insurance</h2>
                        <p>Secure your family’s future with term plans, retirement policies, and investment-linked benefits.</p>
                        <Link to={"/lifeInsurance"} className='moreInfo'>More Info</Link>
                    </div>
                    <div className="sol-card">
                        <h2>Motor Insurance</h2>
                        <p>Zero depreciation cover, roadside assistance, and instant claims settlement.</p>
                        <Link className='moreInfo' to={"/motorInsurance"}>More Info</Link>
                    </div>
                    <div className="sol-card">
                        <h2>Business Insurance</h2>
                        <p>Protect your business with liability, property, and cyber insurance solutions.</p>
                        <Link className='moreInfo'>More Info</Link>
                    </div>
                    <div className="sol-card">
                        <h2>School Bus Insurance</h2>
                        <p>Ensure the safety of school transportation with reliable insurance coverage that protects against accidents, third-party liabilities, and unforeseen events.</p>
                        <Link to={"/schoolBusInsurance"}
                        className='moreInfo'>More Info</Link>
                    </div>
                    <div className="sol-card">
                        <h2>Car & Two-Wheeler Insurance</h2>
                        <p>Get hassle-free insurance for your personal vehicles with attractive discounts, instant policy issuance, and smooth claim settlements.</p>
                        <Link to={"/wheelerInsurance"}
                        className='moreInfo'>More Info</Link>
                    </div>
                    <div className="sol-card">
                        <h2>Pickup Insurance</h2>
                        <p>Protect your pickup truck with comprehensive insurance coverage that safeguards against accidents, theft, and damages, keeping your business and vehicle secure.</p>
                        <Link to={"/pickupInsurance"}
                        className='moreInfo'>More Info</Link>
                    </div>
                    <div className="sol-card">
                        <h2>Commercial Vehicle Insurance</h2>
                        <p>Cover your trucks, tempos, and other business vehicles with comprehensive policies designed to ensure smooth operations and minimize downtime.</p>
                        <Link to={"/commercialVehicleInsurance"}
                        className='moreInfo'>More Info</Link>
                    </div>
               </div>
            </section>
            <section className='chosse-main'>
                    <h2>Why Choose SafeGuard Insurance?</h2>
                    <div className="chosse-cards">
                        <div className="chosse-card">
                            <h3>⚡ Fast Claim Settlements</h3>
                            <p>95% claim settlement ratio with quick and transparent process.</p>
                        </div>
                        <div className="chosse-card">
                            <h3>📞 24/7 Customer Support</h3>
                            <p>Our support team is always available to help you anytime.</p>
                        </div>

                        <div className="chosse-card">
                            <h3>🤝 Trusted by 10,000+ Families</h3>
                            <p>Strong presence across India with satisfied policyholders.</p>
                        </div>
                        <div className="chosse-card">
                            <h3>🏥 Wide Network</h3>
                            <p>10,000+ hospitals and 5,000+ garages for cashless service.</p>
                        </div>
                    </div>
            </section>
            <section className='figer-main'>
                <div className="figer-cards">
                    <h1>95%</h1>
                    <p>Claim Settlement Ratio</p>
                </div>
                 <div className="figer-cards">
                    <h1>10,000+</h1>
                    <p>Network Hospitals</p>
                </div>
                 <div className="figer-cards">
                    <h1>5,000+</h1>
                    <p>Cashless Garages</p>
                </div>
                 <div className="figer-cards">
                    <h1>15+ Years</h1>
                    <p>Industry Experience</p>
                </div>
            </section>
            <section className='Feedback-main'>
                <h1 className='feedback-heading'>What Our Customers Say</h1>
                <div className="feedback-cards">
                    <div className='feedback-card'>
                    <p>"SafeGuard made my health insurance claim process super easy. Got approval in just 24 hours!"</p>
                    <h4>- Ramesh Patel</h4>
                </div>
                 <div className='feedback-card'>
                    <p>"SafeGuard made my health insurance claim process super easy. Got approval in just 24 hours!"</p>
                    <h4>- Ramesh Patel</h4>
                </div>

                 <div className='feedback-card'>
                    <p>"SafeGuard made my health insurance claim process super easy. Got approval in just 24 hours!"</p>
                    <h4>- Ramesh Patel</h4>
                </div>
                </div>
            </section>
            <section className='ambitious'>
             {/* <Ambitious/> */}
            </section>
            <section className='banner-main'>
                    <h1>Ready to Secure Your Future?</h1>
                    <p>Let us help you find the best insurance plan tailored to your needs.</p>
                    <Link to={"./contact"}className='banner-btn'>📩 Contact Us Today</Link  >
            </section>
        </main>
    </>
)}

export default Body;