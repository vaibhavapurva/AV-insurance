import "./insurance.css";
import motorImage from "../assets/motor_Insurance2.jpg";
const MotorInsurance = () => {
  return (
    <main className="insurance">
      <section className="header">
        <h1>Motor Insurance</h1>
        <p>Protect your drive, protect your peace of mind.</p>
      </section>
      <section className="hero-insurance">
        <div className="insurance-image">
          <img src={motorImage} alt="motor_insurance.jpg" />
        </div>
        <div className="insurance-title">
          <p>
            With our <strong>Motor Insurance plans</strong>, you get complete
            financial protection against accidents, theft, and unexpected road
            damages. Whether you own a car, bike, or commercial vehicle, our
            coverage ensures you stay worry-free every time you hit the road.
          </p>
        </div>
      </section>
      <section className="intro">
        <div className="features">
          <h2>Why Choose Our Motor Insurance?</h2>
          <ul>
            <li>
              <b>Instant Coverage:</b> Get your policy issued within minutes —
              fully online, no paperwork.
            </li>
            <li>
              <b>Cashless Garage Network:</b> Access hundreds of trusted service
              centers for easy repairs.
            </li>
            <li>
              <b>Zero Depreciation Plans:</b> Receive the full claim amount on
              replaced vehicle parts.
            </li>
            <li>
              <b>24/7 Assistance:</b> Stuck on the road? Our team is always a
              call away.
            </li>
            <li>
              <b>Smooth Claim Process:</b> Simple documentation and fast claim
              settlements.
            </li>
          </ul>
        </div>
        <div className="coverage">
          <h2>What’s Included</h2>
          <ul>
            <li>
              🚗 <b>Accidental Damage:</b> Covers vehicle repair or replacement
              costs after an accident.
            </li>
            <li>
              🔒 <b>Theft Cover:</b> Complete compensation if your vehicle is
              stolen.
            </li>
            <li>
              🔥 <b>Natural & Man-made Disasters:</b> Protection against floods,
              fires, riots, and more.
            </li>
            <li>
              ⚖️ <b>Third-Party Liability:</b> Covers injuries or property
              damage to others.
            </li>
            <li>
              ❤️ <b>Personal Accident Cover:</b> Financial protection for the
              owner or driver.
            </li>
          </ul>
        </div>
      </section>

      <section className="addons">
        <h1>Optional Add-Ons</h1>
         <div className="addon-list">
          <span>Engine & Gearbox Protection</span>
          <span>Zero Depreciation Benefit</span>
          <span>Key Replacement Cover</span>
          <span>Consumables Cover</span>
          <span>Return-to-Invoice Advantage</span>
        </div>
      </section>

       <footer className="motor-footer">
        <h3>Drive Without Worry</h3>
        <p>
          Our mission is simple — to keep you protected wherever you go.
          Choose a plan that fits your needs, enjoy quick support, and drive
          with confidence knowing we’ve got your back.
        </p>
      </footer>
    </main>
  );
};

export default MotorInsurance;
