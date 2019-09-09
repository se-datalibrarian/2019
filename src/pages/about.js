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
    <p>
      The Southeast Data Librarian Symposium is intended to provide a low-cost opportunity for librarians and other research data specialists to gather and explore developments in the field of data librarianship, including the management and sharing of research data. This is the second year of the symposium.
    </p>
    <p>
      In addition to learning about new work in the field, attendees will have the opportunity to network and build partnerships with regional colleagues. It is open to all who wish to attend, including students, data managers and scientists, and those situated outside the Southeast.
    </p>
    <h2>Location information</h2>
    <h3>Parking</h3>
    <p>
      Visitor parking can be arranged prior to arriving or in person. Please visit <a href="https://campusservices.tulane.edu/departments/parking/uptown/visiting-tulane-and-parking">Tulane Parking</a> for more information regarding parking on campus.
    </p>
    <h3>Lactation/Family Rooms</h3>
    <p>
      There are several lactation/family rooms on the Uptown Campus. The most convenient during the symposium is located on the 2nd floor of the Lavin-Bernick Center (LBC) in a private, women's single stall bathroom. The room is labeled "Lactation Station" and is equipped with a sink, chair and table with literature. Like the LBC, this room is available 24 hours a day and no key is needed to use the room but it will lock from the inside.
    </p>
    <h3>Gender-Neutral Restrooms</h3>
    <p>The LBC has 7 single-stall, gender neutral restrooms:</p>
    <ul>
      <li> 2 on the garden level located next to Suite G03</li>
      <li> 3 on the first level across from the Campus Services Customer Engagement Center</li>
      <li>2 on the second level across from the Qatar Ballroom</li>
    </ul>
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