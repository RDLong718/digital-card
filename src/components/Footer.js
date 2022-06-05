import twitter from "../images/Twitter Icon.png";
import facebook from "../images/Facebook Icon.png";
import github from "../images/GitHub Icon.png";
import instagram from "../images/Instagram Icon.png";

function Footer() {
  return (
    <footer className="footer">
      <a href="https://twitter.com/RashadLong7">
        <img src={twitter} alt="twitter"></img>
      </a>
      <a href="https://www.facebook.com/rashad.long.9">
        <img src={facebook} alt="facebook"></img>
      </a>
      <a href="https://www.instagram.com/bigrahbk23/">
        <img src={instagram} alt="instagram"></img>
      </a>
      <a href="https://github.com/RDLong718">
        <img src={github} alt="github"></img>
      </a>
    </footer>
  );
}
export default Footer;
