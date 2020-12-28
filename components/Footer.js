import React from "react";
import style from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={style.footer}>
      <div>
        <div className={style.footerContent}>
          Find me here:
          <div style={{marginTop: 15}} className={style.footerLinks}>
            <a href="https://github.com/CoolProjectsDev">Github</a>
            <a href="https://instagram.com/Cyklan">Instagram</a>
          </div>
          <span style={{marginTop: 15}}>Or send me an email: <a href="mailto:hey@coolprojects.dev">hey@coolprojects.dev</a></span>
        </div>
      </div>
    </div>
  );
}
