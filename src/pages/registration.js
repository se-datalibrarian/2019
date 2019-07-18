import React from 'react'
import buttons from '../components/buttons.module.css'
import Layout from '../components/layout'
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Registration" />
    <h1>Registration</h1>
    <p>Registration is now open for SEDLS 2019, October 10-11, at Tulane University in New Orleans, Louisiana! The registration for the symposium is managed through Eventbrite.</p>
    <a className={`${buttons.buttonLink} ${buttons.centerButton}`} href="https://www.eventbrite.com/e/2019-southeast-data-librarian-symposium-registration-64366042566">Register for SEDLS 2019</a>
    <h2>Registration cost</h2>
    <p><strong>$50.00</strong> (plus $4.67 applicable credit card processing and Eventbrite service fees)</p>
    <h2>Refund policy</h2>
    <p>Refunds up to <strong>7 days</strong> before event. Eventbrite's fee is nonrefundable.</p>
  </Layout>
)