import { useEffect, useState } from "react";
import "./contact.css";
import { FaCarCrash } from "react-icons/fa";
import { FaBeer } from 'react-icons/fa';
import { FcBriefcase } from "react-icons/fc";
const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [subject, setSubject] = useState("")
  const [service , setService] = useState("")
  const [insuranceType, setInsuranceType] = useState("");


  const sendMail =(e) =>{
    e.preventDefault();
     const templateParams = {
      user_name: userName,
      user_email: userEmail,
      user_phone: userPhone,
      insurance_type: insuranceType,
      message: message,
    };
    console.log(templateParams)
  }
  return (
    <main className="contact-main">
      <section className="contact-hero">
        <h1>Let's Plan for a Secure Future Together</h1>
        <FcBriefcase />
        <p>
          We are passionate about finding better solutions for your financial
          security. Reach out and let’s discuss how we can support you.
        </p>
      </section>
      <section className="get_in_touch">
        <div className="Getin_touch-card">
          <h2>Get in Touch </h2>
          <input type="text" placeholder="Your full Name" value={name} onChange={(e) =>setName(e.target.value)} />
          <input type="email"placeholder="Email Address "  value={email} onChange={(e) =>setEmail(e.target.value)}/>
          <input type="number" placeholder="Phone Number"  value={number} onChange={(e) =>setNumber(e.target.value)}/>
          <input type="text" placeholder="Subject"  value={subject} onChange={(e) =>setSubject(e.target.value)}/>
          <label htmlFor="insuranceType">Select Insurance Type</label>
          <select id="insuranceType" required className="Select-input"  value={insuranceType}
          onChange={(e) => setInsuranceType(e.target.value)}>
            <option value="">-- Select an Option --</option>
            <option value="health">Health Insurance</option>
            <option value="life">Life Insurance</option>
            <option value="vehicle">Car & Two-Wheeler Insurance</option>
            <option value="commercial">Commercial Vehicle Insurance</option>
            <option value="pickup">Pickup Insurance</option>
          </select>
          <textarea name="" id="" placeholder="Your Message" value={message} onChange={(e) =>setMessage(e.target.value)}></textarea>
          <button className="message-btn" onClick={(e) =>sendMail(e)}> Send Message</button>
        </div>
        <div className="contact-infomations">
          <h2>Contact Information</h2>
          <ul>
            <li>
              <FcBriefcase  size={40} />
              📍 123 Financial Avenue, Connaught Place, New Delhi - 110001
            </li>
            <li>
              📞 Helpline: <strong>1800-123-456</strong>
            </li>
            <li>📧 Email: support@safelife.com</li>
            <li>⏰ Working Hours: Mon - Sat, 9:00 AM - 7:00 PM</li>
          </ul>
          <div className="map">
            <iframe src="https://maps.google.com/maps?q=Connaught%20Place,%20New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
          </div>
        </div>
      </section>
      <section className="quick-help">
        <h1>Need Quick Help?</h1>
        <div className="quick-help-cards">
          <div className="quicl-help-card">
            💡
            <h2>FAQs</h2>
            <p>Find answers to common queries instantly.</p>
          </div>
          <div className="quicl-help-card">
            🤝
            <h2>Claim Support</h2>
            <p>Dedicated managers to guide your claim process.</p>
          </div>

          <div className="quicl-help-card">
            📱
            <h2>24x7 Helpline</h2>
            <p>Always available when you need us.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
