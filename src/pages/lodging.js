import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"
import buttons from '../components/buttons.module.scss'
import lists from "../components/lists.module.scss"
import containers from "../components/containers.module.scss"

export default () => (
  <Layout>
    <SEO title="Lodging" />
    <h1>Lodging</h1>
    <p>A block of rooms has been reserved at two hotels conveniently located near public transit routes.</p>
    <h2>Hampton Inn New Orleans-St. Charles Ave./Garden District</h2>
    <div className={`${containers.container} ${containers.containerAccent}`}>
      <ul className={lists.noBullets}>
        <li><strong>Rate:</strong> $159/night (using group code <strong>DLS</strong>)</li>
        <li><strong>Website:</strong> <a href="https://hamptoninn3.hilton.com/en/hotels/louisiana/hampton-inn-new-orleans-st-charles-ave-garden-district-MSYGDHX/index.html">Hampton Inn New Orleans-St. Charles Ave./Garden District</a></li>
        <li><strong>Contact:</strong> <a href="tel:+1 (504) 899-9990">(504) 899-9990</a> (<em>Guests needing ADA compliant rooms should contact the hotel directly.</em>)</li>
      </ul>
      <a className={`${buttons.buttonLink} ${buttons.centerButton}`} href="https://hamptoninn.hilton.com/en/hp/groups/personalized/M/MSYGDHX-DLS-20191008/index.jhtml?WT.mc_id=POG">Make a Reservation</a>
    </div>
    
    <p>A block of 30 rooms has been reserved for the nights of October 9 &amp; 10 at the <a href="https://hamptoninn3.hilton.com/en/hotels/louisiana/hampton-inn-new-orleans-st-charles-ave-garden-district-MSYGDHX/index.html">Hampton Inn New Orleans-St. Charles Ave./Garden District</a> at a rate of $159.00 per night. This includes free parking, breakfast, and afternoon snacks. The special room rate will be available until September 9 or until the group block is sold-out, whichever comes first.</p>
    
    <p>The Hampton Inn is approximately two miles from the symposium site and is within a one minute walk of the St. Charles Streetcar stop at St. Charles at Foucher. See the map below for more information.</p>

    <h2>Pontchartrain Hotel</h2>
    <div className={`${containers.container} ${containers.containerAccent}`}>
      <ul className={lists.noBullets}>
        <li><strong>Rate: </strong>$169/night (using group code <strong>2473002</strong>)</li>
        <li><strong>Website: </strong><a href="http://thepontchartrainhotel.com/">Pontchartrain Hotel</a></li>
        <li><strong>Contact: </strong><a href="tel:+1 (504) 323-1425">(504) 323-1425</a></li>
      </ul>
      <a className={`${buttons.buttonLink} ${buttons.centerButton}`} href="https://gc.synxis.com/rez.aspx?Chain=19060&arrive=10/9/2019&depart=10/11/2019&adult=2&child=0&group=2473002">Make a Reservation</a>
    </div>
    <p>A block of 10 rooms has been reserved for the nights of October 9 &amp; 10 at the <a href="http://thepontchartrainhotel.com/">Pontchartrain Hotel</a> at a rate of $169 per night.</p>
    
    <p>The Pontchartrain Hotel is approximately three miles from the symposium site and is within a one minute walk of the St. Charles Streetcar stop at St. Charles at Josephine. See the map below for more information.</p>

    <h2>Map of lodging, symposium site, and places of interest</h2>
    <p>This map was created to aid in making your travel arrangements. It includes public transportation routes close to Tulane, conference hotel options, and additional places of interest</p>
    <iframe src="https://www.google.com/maps/d/embed?mid=1zVTU3ljDeJI1r0CbnOn2zu7rPuomANFu" title="Symposium Public Transportation Map
" width="700" height="480" frameBorder="0"></iframe>
  </Layout>
)