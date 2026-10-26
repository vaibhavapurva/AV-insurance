


import "./insurance.css";
import motorImage from "../assets/motor_insurance.jpg";
const SchoolBusInsurance = () => {
  return (
    <main className="insurance">
      <section className="header">
         <h1>School Bus Insurance</h1>
        <p>Because every child's journey deserves complete safety and protection.</p>
      </section>
      <section className="hero-insurance">
        <div className="insurance-image">
          <img src={motorImage} alt="motor_insurance.jpg" />
        </div>
        <div className="insurance-title">
          <p>
          Our <strong>School Bus Insurance</strong> plans are specially designed
          to safeguard students, drivers, and school property against accidents,
          damages, and unexpected events. Whether it’s a minor incident or a
          major mishap, we ensure financial and emotional peace of mind for
          schools and parents alike.
        </p>
        </div>
      </section>
      <section className="intro">
        <div className="features">
          <h2>Why Choose Our School Bus Insurance?</h2>
        <ul>
          <li>
            <b>Complete Coverage:</b> Protects both the bus and its passengers
            against unforeseen accidents.
          </li>
          <li>
            <b>Personal Accident Cover:</b> Offers financial protection for
            students, drivers, and attendants.
          </li>
          <li>
            <b>Third-Party Liability:</b> Covers damages or injuries caused to
            others by the insured vehicle.
          </li>
          <li>
            <b>Natural Disaster Protection:</b> Coverage against floods, fires,
            and other natural calamities.
          </li>
          <li>
            <b>Easy Claim Process:</b> Quick and transparent settlements with
            dedicated support.
          </li>
        </ul>
        </div>
        <div className="coverage">
          <h2>What’s Covered</h2>
        <ul>
          <li>🚍 <b>Accidental Damage:</b> Covers repair or replacement costs due to accidents.</li>
          <li>🔥 <b>Fire & Explosion:</b> Financial aid if the vehicle is damaged due to fire or explosion.</li>
          <li>🌧️ <b>Natural Calamities:</b> Protection against floods, storms, and landslides.</li>
          <li>🛑 <b>Third-Party Liability:</b> Covers third-party injuries, death, or property loss.</li>
          <li>👨‍🏫 <b>Passenger Protection:</b> Insurance for every student, teacher, or helper onboard.</li>
        </ul>
        </div>
      </section>

      <section className="addons">
       <h2>Optional Add-Ons</h2>
        <div className="addon-list">
          <span>Zero Depreciation Cover</span>
          <span>Roadside Assistance</span>
          <span>Engine Protection</span>
          <span>Key Loss Cover</span>
          <span>Consumables Protection</span>
        </div>
      </section>

       <footer className="motor-footer">
        <h3>Safety on Every Ride</h3>
        <p>
          With our School Bus Insurance, schools can focus on nurturing students
          while we ensure their safety on the road. Trust us to protect your
          vehicles, your staff, and most importantly — your children.
        </p>
      </footer>
    </main>
  );
};

export default SchoolBusInsurance;
