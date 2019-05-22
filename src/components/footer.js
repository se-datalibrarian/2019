import React from 'react'
import { IoMdMail } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import styles from './footer-css-modules.module.css'

export default () => (
  <footer>
    <h4>Contact us: </h4>
    <h1 className={styles.icons}><a title="Contact us via email" aria-label="Contact us via email" href="mailto:se.datalibrarian@gmail.com"><IoMdMail /></a></h1>
    <h1 className={styles.icons}><a title="Contact us via twitter" aria-label="Contact us via twitter" href="https://twitter.com/SEDataLibrarian"><IoLogoTwitter /></a></h1>
    <h1 className={styles.icons}><a title="Contact us via GitHub" aria-label="Contact us via GitHub" href="https://github.com/se-datalibrarian"><IoLogoGithub /></a></h1>
  </footer>
)