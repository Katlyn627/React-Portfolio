import React from "react";
import github_icon from "../../assets/GitHub-Mark-64px.png";
import linkedIn_icon from "../../assets/linked in background.png";
import email_icon from "../../assets/email_icon.png";
import pdfIcon from "../../assets/833px-PDF_file_icon.png";
import Resume from "../../assets/Resume 2022.pdf";

function Contact(props) {
  return (
    <div className="moreLeft">
      <h1>Contact Me</h1>
    <p>Feel free to reach out! I look forward to connecting with you.</p>
   <p><img className="contactImg" src={ pdfIcon } alt="github icon" /><a className="contactLink" href={Resume}>Click here to download my resume</a></p>
    <img className="contactImg" src={ github_icon } alt="github icon" /><a className="contactLink" href="https://github.com/Katlyn627" target="_blank" rel="noreferrer"> Github</a><br/>
    <img className="contactImg" src={ linkedIn_icon } alt="linkedIn icon" /><a className="contactLink" href="https://www.linkedin.com/in/katlyn-boches-20110732/" target="_blank" rel="noreferrer"> LinkedIn</a><br/>
    <img className="contactImg" src={ email_icon } alt="email icon" /><a className="contactLink" href="mailto:katlynboches@gmail.com">Email me</a>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    <p>&nbsp;</p>
    </div>
  );
}

export default Contact;