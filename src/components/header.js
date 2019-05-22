import React from 'react'
import { Link } from "gatsby"
import { IoMdMenu } from 'react-icons/io';
import { IoIosClose } from 'react-icons/io';
import styles from './header-css-modules.module.css'
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link className={styles.headerLink} activeClassName={styles.active} to={props.to}>{props.children}</Link>
  </li>
)

const Header = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  toggleNavMenu = () => {
    this.setState(
      { menuOpen: !this.state.menuOpen }
    )
  }

  render() {
    return (
      <header className={styles.header}>
      <span className={styles.mobileMenu}>
        <IoMdMenu onClick={() => this.toggleNavMenu()}/>
      </span>
      <h1 className={styles.headerTitle}>
        <Link className={styles.headerLink} to="/">Southeast Data Librarian Symposium 2019</Link>
      </h1>
      <nav className={this.state.menuOpen ? styles.slideOut : ""}>
        <span className={styles.closeMobileMenu}>
          <IoIosClose onClick={() => this.toggleNavMenu()}/>
        </span>
        <ul className={styles.pageLinks}>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/registration/">Registration</ListLink>
          <ListLink to="/program/">Program</ListLink>
          <ListLink to="/lodging/">Lodging</ListLink>
          <ListLink to="/code-of-conduct/">Code of Conduct</ListLink>
        </ul>
      </nav>
    </header>
    )
  }
}

export default Header