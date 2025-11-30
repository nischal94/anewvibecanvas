import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-text">
          &copy; {currentYear} A New Vibe Canvas. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
