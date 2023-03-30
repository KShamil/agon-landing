import React from "react";
import Button from "../../components/Button/Button";
import agonIcon from "./agon.svg";
import styles from "./Header.module.scss";
import { IHeaderProps } from "./Header.props";

const Header = ({}: IHeaderProps): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={agonIcon} alt="error" />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navlist}>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href="">Pages</a>
            </li>
            <li>
              <a href="">Blog</a>
            </li>
            <li>
              <a href="">Shop</a>
            </li>
          </ul>
        </nav>
        <div className={styles.button}>
          <Button appearance="header-btn">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
