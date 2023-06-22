import React from 'react';
import { ReactComponent as EmailIcon } from '../Assets/gmail.svg';
import { ReactComponent as LinkedInIcon } from '../Assets/linkedin.svg';
import { ReactComponent as GithubIcon } from '../Assets/github.svg';
import '../CSS/Contact.css';

const contactInfo = [
  { type: 'Email', icon: EmailIcon, text: 'gabrieldetaxis@gmail.com' },
  { type: 'LinkedIn', icon: LinkedInIcon, link: 'https://www.linkedin.com/in/gabriel-de-taxis-du-po%C3%ABt-9a40951aa/', text: 'LinkedIn Profile' },
  { type: 'Github', icon: GithubIcon, link: 'https://github.com/YemanjaG', text: 'GitHub Profile' },
];

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <ul>
        {contactInfo.map((info) => (
          <li key={info.type}>
            <info.icon className="contact-icon" />
            {info.link ? (
              <a href={info.link} target="_blank" rel="noopener noreferrer">
                {info.text}
              </a>
            ) : (
              <span>{info.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
