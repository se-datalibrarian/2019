import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import SEO from "../components/seo"
import Logo from "../images/svg/logo-wide-tulane.svg"
import container from "../components/containers.module.scss"

export default () => (
  <Layout>
    <SEO title="Home" keywords={[`librarian`, `data librarian`, `research data`, `data management`, `data visualization`]} />
    <div className={`${container.container} ${container.containerAnnouncement}`}>
      <h3>The SEDLS 2019 program is online!</h3>
      <p>Visit the <Link to="/program">Program</Link> page to view the complete schedule.</p>
    </div>
    <Logo style={{ "maxHeight": "250px" }}/>
    <h3 style={{ "display": "block", "textAlign": "center" }}>The 2019 Southeast Data Librarian Symposium</h3>
    <h3 style={{ "display": "block", "textAlign": "center" }}>Tulane University in New Orleans, LA</h3>
    <h3 style={{ "display": "block", "textAlign": "center" }}>October 10-11</h3>
    <p>The Southeast Data Librarian Symposium (SEDLS) is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data.</p>
    <p>This is the second year of the symposium following <a href="https://se-datalibrarian.github.io/2018/">the inaugural symposium</a> held at the Georgia Tech Library in Atlanta, GA in 2018.</p>
  </Layout>
)