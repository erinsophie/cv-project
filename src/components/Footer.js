import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>
        Built by:{' '}
        <a
          href="https://github.com/erinsophie"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          erinsophie
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/erinsophie/cv-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          Source{' '}
        </a>
      </p>
    </footer>
  );
}

export default Footer;
