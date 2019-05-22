import React from 'react'
import { graphql, Link, useStaticQuery } from "gatsby"
import styles from './header-css-modules.module.css'
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <header className={styles.header}>
      <h1><Link to="/">{data.site.siteMetadata.title}</Link></h1>
      <nav>
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