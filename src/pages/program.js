import React from 'react'
import Layout from '../components/layout'
import buttons from '../components/buttons.module.css'
import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO title="Program" />
    <h1>Program</h1>
    <p>The Southeast Data Librarian Symposium (SEDLS) is currently accepting proposals for workshops, short talks, and poster presentations for SEDLS 2019! We are also seeking prospective panelists on several topics.</p>
    <a className={`${buttons.buttonLink} ${buttons.centerButton}`} href="https://docs.google.com/forms/d/e/1FAIpQLSeQbqCugN7tCuu1NCc6Fs3V2aYW0YfQFRkO1CLJtgFx05-WFw/viewform?usp=sf_link">Submit a proposal</a>
  </Layout>
)