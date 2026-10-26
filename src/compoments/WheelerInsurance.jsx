


import "./insurance.css";
import motorImage from "../assets/motor_insurance.jpg";

const WheelerInsurance = () => {
  return (
    <main className="insurance">
      <section className="header">
         <h1>Car & Two-Wheeler Insurance</h1>
        <p>One protection for every ride — drive or ride, stay insured and stress-free.</p>
      </section>
      <section className="hero-insurance">
        <div className="insurance-image">
          <img src={motorImage} alt="motor_insurance.jpg" />
        </div>
        <div className="insurance-title">
         <p>
          Our <strong>Car & Two-Wheeler Insurance</strong> plans are designed to provide
          maximum coverage with minimal hassle. From accidental damage to theft and third-party
          liabilities, we’ve got every rider and driver covered — ensuring safety, savings,
          and satisfaction on every journey.
        </p>
        </div>
      </section>
      <section className="intro">
        <div className="features">
          <h2>Why Choose Our Vehicle Insurance?</h2>
        <ul>
          <li>
            <b>Instant Policy Issuance:</b> Get insured in just minutes — no paperwork, no waiting.
          </li>
          <li>
            <b>Cashless Garage Network:</b> Access thousands of partner garages for quick repairs.
          </li>
          <li>
            <b>High Claim Settlement Ratio:</b> We believe in quick and fair claim processing.
          </li>
          <li>
            <b>Comprehensive Protection:</b> Covers accidents, theft, disasters, and third-party liabilities.
          </li>
          <li>
            <b>24x7 Roadside Assistance:</b> Help is always just a call away.
          </li>
        </ul>
        </div>
        <div className="coverage">
          <h2>What’s Covered</h2>
        <ul>
          <li>🚗 <b>Car Insurance:</b> Covers repair costs, third-party liability, and total loss due to theft or accident.</li>
          <li>🏍️ <b>Two-Wheeler Insurance:</b> Full coverage for your bike or scooter against damage, theft, and mishaps.</li>
          <li>🔥 <b>Fire & Explosion:</b> Financial protection from fire or accidental explosions.</li>
          <li>🌧️ <b>Natural & Man-Made Disasters:</b> Floods, riots, earthquakes, and more — stay protected.</li>
          <li>🛑 <b>Third-Party Liability:</b> Legal and financial cover for third-party damage or injury.</li>
          <li>👨‍✈️ <b>Personal Accident Cover:</b> Safety and compensation for the driver or rider.</li>
        </ul>
        </div>
      </section>

      <section className="addons">
      <h2>Optional Add-Ons</h2>
        <div className="addon-list">
          <span>Zero Depreciation Cover</span>
          <span>Engine Protection</span>
          <span>Return-to-Invoice Benefit</span>
          <span>Consumables Cover</span>
          <span>No Claim Bonus Protection</span>
          <span>Roadside Assistance</span>
        </div>
      </section>

       <footer className="motor-footer">
        <h3>Drive Safe. Ride Smart. Stay Protected.</h3>
        <p>
          Whether it’s your car or your bike, our insurance keeps you protected from
          unexpected events — so you can focus on the journey, not the worry.
        </p>
      </footer>
    </main>
  );
};

export default WheelerInsurance;
