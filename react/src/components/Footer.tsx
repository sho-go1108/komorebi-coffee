import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <Link to="/" className="logo logo--light" viewTransition>
          <span className="logo__text">Komorebi Coffee</span>
        </Link>
        <ul className="footer__nav">
          <li><Link to="/" viewTransition>Home</Link></li>
          <li><Link to="/coffee" viewTransition>Coffee</Link></li>
          <li><Link to="/sweets" viewTransition>Sweets</Link></li>
        </ul>
        <p className="footer__text">8:00 – 18:00 ／ 水曜定休</p>
        <p className="footer__copy">
          &copy; {new Date().getFullYear()} Komorebi Coffee. This is a portfolio demo site (React version).
        </p>
      </div>
    </footer>
  );
}
