import { useState } from "react";
import '../styles/Contact.css';
import { data } from '../data/portfolioData';

function Contact() {
  const { email } = data.personalInfo;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionMessage, setSubmissionMessage] = useState("");

  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Contact from ${formData.name}`,
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmissionMessage("Success! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" }); // Clear the form
      } else {
        console.error("Submission failed:", result);
        setSubmissionMessage("Sorry, something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setSubmissionMessage("An error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section">
      <div className="section-container">
        <div className="contact-content-wrapper">
          <div className="contact-header">
            <h1 className="page-title">Get in Touch</h1>
            <p className="contact-subtitle">I'm currently open to new opportunities. Feel free to use the form below or email me directly.</p>
            <a href={`mailto:${email}`} className="contact-email-link">{email}</a>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="Your Name"/>
            </div>
            <div className="form-group">
              <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="Your Email"/>
            </div>
            <div className="form-group">
              <textarea name="message" rows="5" required value={formData.message} onChange={handleChange} placeholder="Your Message"/>
            </div>
            <button type="submit" className="contact-submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message ➤'}
            </button>
          </form>

          {submissionMessage && (
            <div className={`submission-message ${submissionMessage.includes('Success') ? 'success' : 'error'}`}>
              {submissionMessage}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;