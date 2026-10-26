import "./insurance.css";
import life_insurance from "../assets/life_insurance.jpg";
const LifeInsurance = () => {
  return (
    <main className="insurance">
      <section className="header">
        <h1>Life Insurance</h1>
        <p>Secure your family’s future — because love never stops caring.</p>
      </section>
      <section className="hero-insurance">
        <div className="insurance-image">
          <img src={life_insurance} alt="life_insurance.jpg" />
        </div>
        <div className="insurance-title">
          <p>
            Our <strong>Life Insurance plans</strong> provide financial protection
          to your loved ones in case of any unfortunate event. It ensures that
          your family’s dreams, lifestyle, and future stay protected even when
          you are not around to take care of them.
          </p>
        </div>
      </section>
      <section className="intro">
        <div className="features">
           <h2>Why Choose Our Life Insurance?</h2>
        <ul>
          <li>
            <b>Guaranteed Protection:</b> Provides financial security for your
            family during uncertain times.
          </li>
          <li>
            <b>Flexible Plans:</b> Choose from term, whole life, or savings-based
            plans as per your goals.
          </li>
          <li>
            <b>Tax Benefits:</b> Get tax deductions under Section 80C and 10(10D).
          </li>
          <li>
            <b>Affordable Premiums:</b> High coverage at pocket-friendly prices.
          </li>
          <li>
            <b>Quick Claim Settlement:</b> Hassle-free claim process with
            dedicated assistance.
          </li>
        </ul>
        </div>
        <div className="coverage">
         <h2>Types of Life Insurance Plans</h2>
        <ul>
          <li>🛡️ <b>Term Life Insurance:</b> Pure protection plan with high coverage at low premium.</li>
          <li>💰 <b>Endowment Plan:</b> Life cover plus savings for your long-term goals.</li>
          <li>👨‍👩‍👧‍👦 <b>Whole Life Policy:</b> Lifelong coverage with guaranteed benefits.</li>
          <li>📈 <b>ULIP (Unit Linked Insurance Plan):</b> Combines investment and insurance in one plan.</li>
          <li>🎓 <b>Child Plan:</b> Secures your child’s education and future dreams.</li>
        </ul>
        </div>
      </section>

      <section className="addons">
       <h2>Optional Add-Ons</h2>
        <div className="addon-list">
          <span>Accidental Death Benefit</span>
          <span>Critical Illness Rider</span>
          <span>Waiver of Premium</span>
          <span>Income Benefit Rider</span>
          <span>Disability Protection</span>
        </div>

      </section>

      <footer className="motor-footer">
        <h3>Protect What Matters Most</h3>
        <p>
          Life is unpredictable — but your family’s financial future doesn’t
          have to be. Choose a Life Insurance plan that offers peace of mind,
          protection, and lasting security.
        </p>
      </footer>
    </main>
  );
};

export default LifeInsurance;
