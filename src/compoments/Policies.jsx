import "./policies.css";

const Policies = () => {
  return (
    <mian className="policies-main">
      <section className="policies-hero">
        <h1>Our Insurance Policies</h1>
        <p>Protecting What Matters Most – Your Life, Health, and Future</p>
      </section>

      <section className="our-plan">
        <h1>Explore Our Insurance Plans</h1>
        <div className="plan-cards">
          <div className="plan-card">
            <img
              src="https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg"
              alt="policies-card"
            />
            <h3>Life Insurance</h3>
            <p>
              Secure your family’s future with our flexible and affordable life
              insurance plans.
            </p>
            <a href="/">Learn More</a>
          </div>
          <div className="plan-card">
            <img
              src="https://images.pexels.com/photos/4021802/pexels-photo-4021802.jpeg"
              alt="policies-card"
            />
            <h3>Life Insurance</h3>
            <p>
              Secure your family’s future with our flexible and affordable life
              insurance plans.
            </p>
            <a href="/">Learn More</a>
          </div>
          <div className="plan-card">
            <img
              src="https://images.pexels.com/photos/7578802/pexels-photo-7578802.jpeg"
              alt="policies-card"
            />
            <h3>Life Insurance</h3>
            <p>
              Secure your family’s future with our flexible and affordable life
              insurance plans.
            </p>
            <a href="/">Learn More</a>
          </div>
          <div className="plan-card">
            <img
              src="https://images.pexels.com/photos/6893996/pexels-photo-6893996.jpeg"
              alt="policies-card"
            />
            <h3>Life Insurance</h3>
            <p>
              Secure your family’s future with our flexible and affordable life
              insurance plans.
            </p>
            <a href="/">Learn More</a>
          </div>
        </div>
      </section>
      <section className="wcoip">
        <h1>Why Choose Our Insurance Policies?</h1>
        <ul>
          <li>✔️ Affordable Premiums with Maximum Benefits</li>
          <li>✔️ Hassle-Free Claim Settlement</li>
          <li>✔️ 24/7 Customer Support</li>
          <li>✔️ Trusted by Thousands of Families</li>
        </ul>
      </section>
      <section className="banner">
        <h1>Ready to Secure Your Future?</h1>
        <p>Get in touch with us today and find the best policy tailored for you.
        </p>
        <a href="" className="btn-primary">Get a Free Quote</a>
      </section>
    </mian>
  );
};

export default Policies;
