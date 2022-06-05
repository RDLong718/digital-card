import image from "../images/photo.JPG";
import email_image from "../images/Mail.png";
import linkedin_image from "../images/linkedin.png";
<script
  src="https://platform.linkedin.com/badges/js/profile.js"
  async
  defer
  type="text/javascript"></script>;

function Info() {
  return (
    <main>
      <img className="info--photo" src={image} alt="headshot" />
      <h1 className="info--name">Rashad Long</h1>
      <h2 className="info--title">Aspiring Software Developer</h2>
      <h3 className="info--website">
        <a href="https://github.com/RDLong718">Visit my GitHub</a>
      </h3>
      <a href="mailto:rdlong718@gmail.com">
        <button className="info--email_button">
          <img className="info--email_icon" src={email_image} alt="email" />
          Email
        </button>
      </a>
      <a href="https://www.linkedin.com/in/rlong718/">
        <button className="info--linkedin_button">
          <img
            className="info--linkedin_icon"
            src={linkedin_image}
            alt="linkedin"
          />
          LinkedIn
        </button>
      </a>
    </main>
  );
}
export default Info;
