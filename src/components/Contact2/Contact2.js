import React from "react";
import "./Contact2.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "57fd7d06-9cb2-43be-97fc-82215a5b9e4e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3 className="contact-title">Reach me At</h3>
        <ul className="contact-links">
          <li className="contact-link">
            <img src="assests/emailIcon.png" alt="Email icon" />
            <a href="mailto:CoderVJain@outlook.com">CoderVJain@outlook.com</a>
          </li>
          <li className="contact-link">
            <img src="assests/linkedinIcon.png" alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/varun-jain-2456aa2b3/">
              linkedin.com/VarunJain
            </a>
          </li>
          <li className="contact-link">
            <img src="assests/githubIcon.png" alt="Github icon" />
            <a href="https://github.com/CoderVJain">github.com/CoderVJain</a>
          </li>
        </ul>
      </div>
      <div className="contact-col-2">
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input type="text" name="name" placeholder="Name" required />
          <label>Email ID</label>
          <input type="email" name="email" placeholder="Email-id" required />
          <label>Valuable Feedback</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Feedback😄"
            required
          ></textarea>
          <button type="submit" className="btn dark_btn">
            Submit now
            <img src="/assests/white-arrow.png" alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
