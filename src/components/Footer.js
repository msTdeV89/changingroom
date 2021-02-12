import React from "react";
import PhoneEnabledIcon from "@material-ui/icons/PhoneEnabled";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import RoomIcon from "@material-ui/icons/Room";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__contact'>
        <ul>
          <li>
            <PhoneEnabledIcon />
            <p>+44 07123 123321</p>
          </li>
          <li>
            <MailOutlineIcon />
            <p>fake.mail@gmail.com</p>
          </li>
          <li>
            <RoomIcon />
            <p>ST16 9FA Address 213</p>
          </li>
        </ul>
      </div>
      <div className='footer__copyrights'>
        <p className='footer__logo'>ChangingRoom</p>
        <p>msT 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
