import React from "react";
import "./footer.scss";
import {
  LogoSaya,
  ICFacebook,
  ICTwitter,
  ICTelegram,
  ICGithub,
  ICInstagram,
} from "../../../assets";

const Icon = ({ img }) => {
  return (
    <div className="icon-wrapper">
      <img className="icon-medsos" src={img} alt="icon" />
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={LogoSaya} alt="logo" />
        </div>
        <div className="sosial-wrapper">
          <Icon img={ICFacebook} />
          <Icon img={ICTwitter} />
          <Icon img={ICInstagram} />
          <Icon img={ICTelegram} />
          <Icon img={ICGithub} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
