import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Location/Transportation" />
    <h1>Location and Transportation</h1>
    <h2>Symposium Location</h2>
    <p>All sessions will be held in Room 203 (Stibbs) in the Lavin-Bernick Center (LBC). A map of the LBC can be found <a href="https://lbc.tulane.edu/building-maps">here</a>. The Thursday, October 10th evening reception will be held in the 5th Floor Gallery of the Howard-Tilton Memorial Library. Please see the map below for their locations.</p>
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
