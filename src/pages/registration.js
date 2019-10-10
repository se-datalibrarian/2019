import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import containers from "../components/containers.module.scss"

export default () => (
  <Layout>
    <SEO title="Registration" />
    <h1>Registration</h1>
    <div className={`${containers.container} ${containers.containerAnnouncement}`}>
      <h3>Registration has closed</h3>
      <p>See you in New Orleans!</p>
    </div>
    <h2>Registration cost</h2>
    <p><strong>$50.00</strong> (plus $4.67 Eventbrite service fees)</p>
    <p>Registration includes breakfast, lunch, and coffee breaks on Thursday and Friday as well as an evening reception on Thursday.</p>
    <h2>Registration deadline</h2>
    <p>Registration is open through September 27 and is limited to 50 people.</p>
    <h2>Refund policy</h2>
    <p>Refunds are available up to 7 days before event (October 3). Eventbrite's fee is nonrefundable.</p>
  </Layout>
)