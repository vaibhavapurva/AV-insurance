import "./insurance.css";
import healthinsurance from "../assets/health_insurance.jpg";
const HealthInsurance = () => {
  return (
    <main className="insurance">
      <section className="header">
        <h1>Health Insurance</h1>
        <p>Your health, your safety — we’ve got you covered.</p>
      </section>
      <section className="hero-insurance">
        <div className="insurance-image">
          <img src={healthinsurance} alt="healthinsurance.jpg" />
        </div>
        <div className="insurance-title">
          <p>
            Our <strong>Health Insurance plans</strong> are designed to give you
            financial support during medical emergencies. From hospitalization
            to treatment and recovery, we take care of the expenses so you can
            focus on getting better, not on the bills.
          </p>
        </div>
      </section>
      <section className="intro">
        <div className="features">
          <h2>Why Choose Our Health Insurance?</h2>
          <ul>
            <li>
              <b>Comprehensive Coverage:</b> Covers hospitalization, pre & post
              treatment, and day-care procedures.
            </li>
            <li>
              <b>Cashless Network Hospitals:</b> Get easy cashless treatments at
              our partner hospitals across India.
            </li>
            <li>
              <b>Family Floater Plans:</b> One policy to protect your entire
              family.
            </li>
            <li>
              <b>No Claim Bonus:</b> Earn extra coverage every year you stay
              healthy.
            </li>
            <li>
              <b>24×7 Claim Assistance:</b> Quick, caring, and simple claim
              support round the clock.
            </li>
          </ul>
        </div>
        <div className="coverage">
          <h2>What’s Included</h2>
          <ul>
            <li>
              🏥 <b>Hospitalization Expenses:</b> Covers room rent, ICU charges,
              and medical bills.
            </li>
            <li>
              💊 <b>Pre & Post Hospitalization:</b> Expenses before and after
              hospitalization covered.
            </li>
            <li>
              👨‍⚕️ <b>Day Care Treatments:</b> Coverage for treatments that don’t
              require long stays.
            </li>
            <li>
              🩺 <b>Ambulance Cover:</b> Financial support for emergency
              transportation.
            </li>
            <li>
              ❤️ <b>Critical Illness Benefit:</b> Lump sum payout on diagnosis
              of major diseases.
            </li>
          </ul>
        </div>
      </section>

      <section className="addons">
       <h2>Optional Add-Ons</h2>
        <div className="addon-list">
          <span>Top-up Health Cover</span>
          <span>Personal Accident Add-on</span>
          <span>Critical Illness Rider</span>
          <span>Maternity & Newborn Cover</span>
          <span>OPD & Dental Cover</span>
        </div>
      </section>

      <footer className="motor-footer">
        <h3>Stay Healthy, Stay Protected</h3>
        <p>
          With flexible plans, affordable premiums, and strong claim support,
          our Health Insurance ensures that you and your loved ones stay covered
          when it matters the most.
        </p>
      </footer>
    </main>
  );
};

export default HealthInsurance;
