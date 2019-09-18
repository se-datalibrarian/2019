import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Location/Transportation" />
    <h1>Location and Transportation</h1>
    <h2>Symposium Location</h2>
    <p>All sessions will be held in Room 203 (Stibbs) in the Lavin-Bernick Center (LBC). A map of the LBC can be found <a href="https://lbc.tulane.edu/building-maps">here</a>.</p>
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
    <h2>Parking</h2>
    <p>
      Visitor parking can be arranged prior to arriving or in person. Please visit <a href="https://campusservices.tulane.edu/departments/parking/uptown/visiting-tulane-and-parking">Tulane Parking</a> for more information regarding parking on campus.
    </p>
    <h2>Tulane Map</h2>
    <iframe src="https://www.google.com/maps/d/embed?mid=1EXgs0sTSoukaHur1ol8Fx6MP2J7Z5-i5" title="Map of Tulane University Locations for SEDLS" width="700" height="480" frameBorder="0"></iframe>
    <h2>Map of lodging, symposium site, and places of interest</h2>
    <p>This map was created to aid in making your travel arrangements. It includes public transportation routes close to Tulane, conference hotel options, and additional places of interest</p>
    <iframe src="https://www.google.com/maps/d/embed?mid=1zVTU3ljDeJI1r0CbnOn2zu7rPuomANFu" title="Public Transportation Map for SEDLS" width="700" height="480" frameBorder="0"></iframe>
  </Layout>
)