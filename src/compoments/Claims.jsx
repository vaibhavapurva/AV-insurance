import "./claims.css";

const Claims = () => {
  return (
    <main className="claims">
      <section className="claims-hero">
        <h1>Easy & Hassle-Free Claim Settlement</h1>
        <p>We stand by you in times of need. Our claim process is fast, transparent, and customer-friendly.</p>
        <button className="claim-btn"> File a Claim</button>
      </section>
      <section className="why-claims-process">
        <h1>Why Choose Our Claims Process?</h1>
        <div className="why-claims-cards">
            <div className="why-claims-card">
                ⏱
                <h3>Faster Settlement</h3>
                <p>Average settlement time is just 7 days.</p>
            </div>
            <div className="why-claims-card">
                🤝
                <h3>Dedicated Manager</h3>
                <p>Personal support until your claim is closed.</p>
            </div>
            <div className="why-claims-card">
                💯
                <h3>95% Success Ratio</h3>
                <p>Trusted by thousands of customers.</p>
            </div>

            <div className="why-claims-card">
                📱
                <h3>100% Online</h3>
                <p>From submission to settlement, all digital.</p>
            </div>
        </div>
      </section>
      <section className="our-chaims-process">
        <h1>Our Simple Claim Process</h1>   
        <div className="claims-process-cards">
            <div className="claims-process-card">
                1️⃣
                <h3>Register claim</h3>
                <p>Submit claim online or via helpline.</p>
            </div>
             <div className="claims-process-card">
                2️⃣
                <h3>Register claim</h3>
                <p>Submit claim online or via helpline.</p>
            </div>
             <div className="claims-process-card">
                3️⃣
                <h3>Register claim</h3>
                <p>Submit claim online or via helpline.</p>
            </div>

             <div className="claims-process-card">
                4️⃣
                <h3>Register claim</h3>
                <p>Submit claim online or via helpline.</p>
            </div>
        </div>     
      </section>
      <section className="customer-says">
        <h1>What Our Customers Say</h1>
        <div className="customer-say-cards">
            <div className="customer-say-card">
                <p>"My claim was settled within 5 days, completely stress-free experience."</p>
                <p>- Ramesh K, Delhi</p>
            </div>  
            <div className="customer-say-card">
                <p>"The claim manager personally guided me throughout the process."</p>
                <p>- Sneha P, Mumbai</p>
            </div>    
        </div>
      </section>
      <section className="help">
        <h1>Need Help With a Claim?</h1>
        <p>We are here 24/7 to guide you through every step.</p>
        <div className="help-contact">
           <p>📞 Helpline: <strong>1800-123-456</strong></p>
      <p>📧 Email: <strong>claims@safelife.com</strong></p>
        </div>
      </section>
      <section className="chaims-banner">
        <h2>Ready to File a Claim?</h2>
        <a href="" className="claim-btn">start Now</a>
      </section>
    </main>
  );
};

export default Claims;
