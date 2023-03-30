import React from "react";
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";
import cn from "classnames";

const Button = ({
  appearance,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.header]: appearance == "header-btn",
        [styles.hero]: appearance == "hero-black",
        [styles.ghost]: appearance == "hero-ghost",
        [styles.card]: appearance == "card-btn",
        [styles.footer]: appearance == "footer-btn",
        [styles.orange]: appearance == "orange-btn"
      })}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
