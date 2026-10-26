import "./insurance.css";
import motorImage from "../assets/motor_insurance.jpg";
const PickupInsurance = () => {
  return (
    <main className="insurance">
      <section className="header">
        <h1>Pickup Insurance</h1>
       <p>Keep your business moving — with complete protection for your pickup vehicle.</p>
      </section>
      <section className="hero-insurance">
        <div className="insurance-image">
          <img src={motorImage} alt="motor_insurance.jpg" />
        </div>
        <div className="insurance-title">
          <p>
           Our <strong>Pickup Insurance</strong> plans are designed for commercial
          and goods-carrying vehicles. Whether you use your pickup for deliveries,
          logistics, or daily operations, our insurance ensures you stay protected
          from unexpected accidents, damages, and financial losses.
          </p>
        </div>
      </section>
      <section className="intro">
        <div className="features">
           <h2>Why Choose Our Pickup Insurance?</h2>
        <ul>
          <li>
            <b>Comprehensive Coverage:</b> Protects your vehicle against accident, theft, and natural calamities.
          </li>
          <li>
            <b>Third-Party Liability:</b> Covers damages or injuries caused to others by your pickup.
          </li>
          <li>
            <b>Personal Accident Cover:</b> Financial protection for the owner-driver.
          </li>
          <li>
            <b>Easy Claim Settlement:</b> Smooth, transparent, and quick claim process.
          </li>
          <li>
            <b>Cashless Repairs:</b> Access to a large network of authorized garages.
          </li>
        </ul>
        </div>
        <div className="coverage">
           <h2>What’s Covered</h2>
        <ul>
          <li>🚚 <b>Accidental Damage:</b> Covers repair or replacement costs after an accident.</li>
          <li>🔑 <b>Theft Cover:</b> Full compensation if your pickup vehicle is stolen.</li>
          <li>🔥 <b>Fire & Explosion:</b> Financial protection in case of fire-related damage.</li>
          <li>🌪️ <b>Natural Disasters:</b> Protection against floods, cyclones, and earthquakes.</li>
          <li>⚖️ <b>Third-Party Liability:</b> Covers property damage, injury, or death of a third party.</li>
          <li>🧍 <b>Personal Accident Cover:</b> Protection for the driver or owner in case of injury or death.</li>
        </ul>
        </div>
      </section>

      <section className="addons">
         <h2>Optional Add-Ons</h2>
        <div className="addon-list">
          <span>Zero Depreciation Cover</span>
          <span>Roadside Assistance</span>
          <span>Engine Protection</span>
          <span>Consumables Cover</span>
          <span>Return-to-Invoice Benefit</span>
        </div>
      </section>

       <footer className="motor-footer">
        <h3>Drive with Confidence, Deliver with Trust</h3>
        <p>
          Our Pickup Insurance ensures your vehicle and business stay protected —
          no matter what comes your way. Because when your wheels keep turning,
          your business keeps earning.
        </p>
      </footer>
    </main>
  );
};

export default PickupInsurance;
