import React from 'react'
import buttons from '../components/buttons.module.scss'
import Layout from '../components/layout'
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Registration" />
    <h1>Registration</h1>
    <p>Registration is open for SEDLS 2019, October 10-11, at Tulane University in New Orleans, Louisiana! Registration is managed through Eventbrite.</p>
    <a className={`${buttons.buttonLink} ${buttons.centerButton}`} href="https://www.eventbrite.com/e/2019-southeast-data-librarian-symposium-registration-64366042566">Register for SEDLS 2019</a>
    <h2>Registration cost</h2>
    <p><strong>$50.00</strong> (plus $4.67 Eventbrite service fees)</p>
    <p>Registration includes breakfast, lunch, and coffee breaks on Thursday and Friday as well as an evening reception on Thursday.</p>
    <h2>Registration deadline</h2>
    <p>Registration is open through September 27 and is limited to 50 people.</p>
    <h2>Refund policy</h2>
    <p>Refunds are available up to 7 days before event (October 3). Eventbrite's fee is nonrefundable.</p>
  </Layout>
)