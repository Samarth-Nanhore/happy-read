import "../styles/Footer.css";

export const Footer = () => {
  return (
    <>
      <div>
        <footer className="footer">
          <div className="footer-links">
            <a href="//" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="//" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="//" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </div>
          <p className="footer-creator">Created by Your Name</p>
        </footer>
      </div>
    </>
  );
};
