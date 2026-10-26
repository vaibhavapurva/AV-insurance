import "./insurance.css";
import motorImage from "../assets/motor_insurance.jpg";
const CommercialVehicleInsurance = () => {
  return (
    <main className="insurance">
      <section className="header">
        <h1>Commercial Vehicle Insurance</h1>
        <p>
          Complete protection for trucks, taxis, and delivery vehicles — because your business never stops.
        </p>
      </section>
      <section className="hero-insurance">
        <div className="insurance-image">
          <img src={motorImage} alt="motor_insurance.jpg" />
        </div>
        <div className="insurance-title">
            <p>
          Our <strong>Commercial Vehicle Insurance</strong> is specially designed
          for businesses that rely on vehicles for daily operations. Whether it’s
          a truck, van, taxi, or delivery vehicle, this policy provides financial
          protection against accidents, theft, and third-party liabilities — so
          your business can keep running smoothly.
        </p>
        </div>
      </section>
      <section className="intro">
        <div className="features">
           <h2>Why Choose Our Commercial Vehicle Insurance?</h2>
        <ul>
          <li>
            <b>Comprehensive Coverage:</b> Safeguard your commercial vehicle from accident, fire, or theft.
          </li>
          <li>
            <b>Third-Party Liability:</b> Covers damage or injury caused to third parties.
          </li>
          <li>
            <b>Personal Accident Protection:</b> Financial coverage for the driver/owner.
          </li>
          <li>
            <b>Quick Claim Settlement:</b> Hassle-free claim process for your convenience.
          </li>
          <li>
            <b>Wide Garage Network:</b> Cashless repairs at authorized garages across India.
          </li>
        </ul>
        </div>
        <div className="coverage">
          <h2>Coverage Details</h2>
        <ul>
          <li>🚛 <b>Own Damage:</b> Covers repairs due to accidents or natural disasters.</li>
          <li>🔥 <b>Fire & Explosion:</b> Protection from fire-related damages.</li>
          <li>🔑 <b>Theft Cover:</b> Full compensation in case your vehicle is stolen.</li>
          <li>🌪️ <b>Natural Calamities:</b> Floods, earthquakes, and cyclones are covered.</li>
          <li>⚖️ <b>Third-Party Liability:</b> Covers injury, death, or property damage to others.</li>
          <li>🧍 <b>Personal Accident Cover:</b> Financial aid for driver/owner in case of accident.</li>
        </ul>
        </div>
      </section>

      <section className="addons">
        <h2>Optional Add-Ons</h2>
        <div className="addon-list">
          <span>Zero Depreciation Cover</span>
          <span>Roadside Assistance</span>
          <span>Engine Protection</span>
          <span>Loss of Income Cover</span>
          <span>Consumables Cover</span>
          <span>Return-to-Invoice Benefit</span>
        </div>
      </section>

       <footer className="motor-footer">
        <h3>Secure Your Business on Every Route</h3>
        <p>
          With our Commercial Vehicle Insurance, your business vehicles are
          protected from financial losses, ensuring uninterrupted operations and
          complete peace of mind — wherever the road takes you.
        </p>
      </footer>
    </main>
  );
};

export default CommercialVehicleInsurance;
