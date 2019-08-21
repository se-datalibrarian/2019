import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import TulaneLogo from '../images/TulaneShield.png'
import XavierLogo from '../images/xavier-seal.png'
import IassistLogo from '../images/iassist.jpg'

export default () => (
  <Layout>
  <SEO title="About" />
    <h1>About</h1>
    <p>The Southeast Data Librarian Symposium is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data. This is the second year of the symposium.</p>
    <p>In addition to learning about new work in the field, attendees will have the opportunity to network and build partnerships with regional colleagues. It is open to all who wish to attend, including students, data managers and scientists, and those situated outside the Southeast.</p>
    <h2>Planning Committee</h2>
    <ul>
      <li>Melissa Chomintra, Tulane University</li>
      <li>Courtney Kearney, Tulane University</li>
      <li>Chris Eaker, University of Tennessee Knoxville</li>
      <li>Nina Exner, Virginia Commonwealth University</li>
      <li>Betty Garrison, Elon University</li>
      <li>Walt Gurley, North Carolina State University</li>
      <li>Susan Parham, Georgia Institute of Technology</li>
      <li>Lucy Rosenbloom, Loyola University New Orleans</li>
      <li>Kayla Siddell, Xavier University of Louisiana</li>
    </ul>
    <h2>Sponsors</h2>
    <div style={{ "display": "flex", "alignItems": "center", "justifyContent": "space-around", "flexWrap": "wrap" }}>
      <img src={TulaneLogo} style={{ "maxWidth": "250px", "margin": "2em" }} alt="Tulane University logo in green and white"></img>
      <img src={XavierLogo} style={{ "maxWidth": "175px", "margin": "2em" }} alt="Xavier University of Louisiana seal"></img>
      <img src={IassistLogo} style={{ "maxWidth": "175px", "margin": "2em" }} alt="iassist logo"></img>
    </div>
  </Layout>
)