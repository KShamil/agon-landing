import React from "react";
import { IFooterProps } from "./Footer.props";
import styles from "./Footer.module.scss";
import LogoIcon from "./agon.svg";
import Button from "../../components/Button/Button";
import FbIcon from './fb.svg';
import InstagramIcon from './instagram.svg';
import TwitterIcon from './twitter.svg';
import LinkedinIcon from './linkedin.svg';

export default function Footer({}: IFooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.logo}>
            <img src={LogoIcon} alt="error" />
          </div>
          <div className={styles.info}>
            <span>Ready to get started?</span>
            <Button appearance="footer-btn">Create an Account</Button>
          </div>
        </div>
        <div className={styles.middle}>
          <div className={styles.contact}>
            <h3>Contact</h3>
            <span>4517 Washington Ave. <br /> Manchester, Kentucky 39495</span>
            <span>(239) 555-0108</span>
            <span>contact@agon.com</span>
            <div className={styles.icons}>
              <img src={FbIcon} alt="error" />
              <img src={InstagramIcon} alt="error" />
              <img src={TwitterIcon} alt="error" />
              <img src={LinkedinIcon} alt="error" />
            </div>
          </div>
          <div className={styles.about}>
            <h3>About Us</h3>
            <span>About V1</span>
            <span>About V2</span>
            <span>About V3</span>
            <span>Services V1</span>
            <span>Services V2</span>
          </div>
          <div className={styles.discover}>
            <h3>Discover</h3>
            <span>Our Blog</span>
            <span>Our Blog V1</span>
            <span>Our Blog V2</span>
            <span>Blog Single</span>
            <span>Page 404</span>
          </div>
          <div className={styles.support}>
            <h3>Support</h3>
            <span>FAQs</span>
            <span>FAQ V2</span>
            <span>Career</span>
            <span>Career Detail</span>
            <span>Contact Us</span>
          </div>
          <div className={styles.links}>
            <h3>Useful links</h3>
            <span>Shop</span>
            <span>Shop V2</span>
            <span>Pricing V1</span>
            <span>Pricing V2</span>
            <span>Terms & Conditions</span>
          </div>
        </div>
        <div className={styles.bottom}>
          <div>
            <span>©Agon Official 2022</span>
          </div>
          <div className={styles.privacy}>
            <span>Privacy policy</span>
            <span>Cookies</span>
            <span>Terms of service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
