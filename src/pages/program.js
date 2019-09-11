import React from 'react'
import Layout from '../components/layout'
import { Link } from "gatsby"
import SEO from "../components/seo"
import containers from "../components/containers.module.scss"
import textFormat from "../components/text-format.module.scss"

export default () => (
  <Layout>
    <SEO title="Program" />
    <h1>Program</h1>
    <h2 className={textFormat.day}>Wednesday, Oct. 9</h2>
    <div className={`${containers.container} ${containers.containerAccentLight}`}>
      <h4 className={textFormat.time}>5:00 p.m. - 7:00 p.m.</h4>
      <h4>Preconference Social Hour</h4>
      <p><a href="http://hottinbar.com/">Hot Tin</a> at the Pontchartrain Hotel</p>
    </div>

    <h2 className={textFormat.day}>Thursday, Oct. 10</h2>
    <p><em>All sessions held in Room 203 (Stibbs), Lavin-Bernick Center (LBC) (<a href="https://lbc.tulane.edu/building-maps">building map</a>) Tulane University (<a href="https://www.google.com/maps/d/u/0/viewer?mid=1EXgs0sTSoukaHur1ol8Fx6MP2J7Z5-i5&ll=29.93752673008532%2C-90.12193189999999&z=16">area map</a>). Additional location information, such as parking and restrooms, can be found on the <Link to="/about">About</Link> page.</em></p>

    <div className={`${containers.container} ${containers.containerAccentDark}`}>
      <h4 className={textFormat.time}>8:30 a.m. - 9:00 a.m.</h4>
      <h4>Breakfast/Registration</h4>
    </div>

    <div className={`${containers.container} ${containers.containerAccent}`}>
      <h4 className={textFormat.time}>9:00 a.m. - 9:15 a.m.</h4>
      <h4>Meeting Overview and Welcome</h4>
    </div>

    <div className={`${containers.container} ${containers.containerAccent}`}>
      <h4 className={textFormat.time}>9:15 a.m. - 9:45 a.m.</h4>
      <h4>Icebreaker</h4>
    </div>

    <div className={`${containers.container} ${containers.containerAccent}`}>
      <h4 className={textFormat.time}>9:45 a.m. - 10:45 a.m.</h4>
      <h4>Short Talks</h4>
      <p className={textFormat.title}>Promoting free-to-use software in the Data Visualization Lab at Xavier to increase information literacy</p>
      <p className={textFormat.presenter}>Alex Saltzman (Xavier of La)</p>

      <p className={textFormat.title}>Educate Yourself, Educate Others: Setting a Foundation for Research Data Services</p>
      <p className={textFormat.presenter}>Lauren Robinson (UK) and Rebecca Morgan (UL)</p>

      <p className={textFormat.title}>Planning for Longer-Term Data Rescue</p>
      <p className={textFormat.presenter}>Mara Blake (JHU)</p>
    </div>

    <div className={`${containers.container} ${containers.containerAccentDark}`}>
      <h4 className={textFormat.time}>10:45 a.m. - 11:10 a.m.</h4>
      <h4>Break</h4>
    </div>

    <div className={`${containers.container} ${containers.containerAccent}`}>
      <h4 className={textFormat.time}>11:10 a.m. - 12:30 p.m.</h4>
      <h4>Workshop</h4>
      <p className={textFormat.title}>Web scraping with Python</p>
      <p className={textFormat.presenter}>le Hayslett and Philip McDaniel (UNC Chapel Hill)</p>
    </div>

    <div className={`${containers.container} ${containers.containerAccentDark}`}>
      <h4 className={textFormat.time}>12:30 p.m. - 1:45 p.m.</h4>
      <h4>Lunch</h4>
    </div>

    <div className={`${containers.container} ${containers.containerAccent}`}>
      <h4 className={textFormat.time}>1:45 p.m. - 2:15 p.m.</h4>
      <h4>Posters</h4>
      <p className={textFormat.title}>Data Skills: A Kickstarter for Success</p>
      <p className={textFormat.presenter}>Lauren E. Robinson (UK) and Rebecca J. Morgan (UL)</p>

      <p className={textFormat.title}>Best practices for sharing data associated with endangered species</p>
      <p className={textFormat.presenter}>Shavon Stewart</p>

      <p className={textFormat.title}>What do we mean when we say "Data?" A review of Libguides at the University of Arkansas</p>
      <p className={textFormat.presenter}>Lora Lennertz (U Ark)</p>

      <p className={textFormat.title}>Users of the Texas Data Repository - sharing 2 years of data on use and future directions</p>
      <p className={textFormat.presenter}>Reid Boehm (UH)</p>

      <p className={textFormat.title}>Constructing a Road to Data Services Librarianship</p>
      <p className={textFormat.presenter}>Michael Crumpton, Jo Klein, and Nora Bird (UNC Greensboro)</p>
    </div>

    <div className={`${containers.container} ${containers.containerAccent}`}>
      <h4 className={textFormat.time}>2:15 p.m. - 3:15 p.m.</h4>
      <h4>Short Talks</h4>
      <p className={textFormat.title}>Dynamic Duo! Functional specialists partnering with liaisons for research data services</p>
      <p className={textFormat.presenter}>Reid Boehm and Wenli Gao (UH)</p>

      <p className={textFormat.title}>Fostering Data Literacy at FSU Libraries through Campus Partnerships</p>
      <p className={textFormat.presenter}>Nick Ruhs (FSU)</p>

      <p className={textFormat.title}>Growing skills and services with a cross-departmental data team</p>
      <p className={textFormat.presenter}>Nina Exner, Erin Carrillo, and Stacey Wahl (VCU)</p>
    </div>

    <div className={`${containers.container} ${containers.containerAccentDark}`}>
      <h4 className={textFormat.time}>3:15 p.m. - 3:45 p.m.</h4>
      <h4>Break</h4>
    </div>

    <div className={`${containers.container} ${containers.containerAccent}`}>
      <h4 className={textFormat.time}>3:45 p.m. - 4:45 p.m.</h4>
      <h4>Panel</h4>
      <p className={textFormat.title}>Practical Implementation of Data Services</p>
      <p className={textFormat.presenter}>John P. Bourgeois (LSUHSC-NO), Melissa Chomintra (TU), Nina Exner (VCU), Lora Lennertz (U Ark), Mandy Swygart-Hobaugh (GSU)
      </p>
    </div>

    <div className={`${containers.container} ${containers.containerAccent}`}>
      <h4 className={textFormat.time}>4:45 p.m. - 5:00 p.m.</h4>
      <h4>Wrap up</h4>
    </div>

    <div className={`${containers.container} ${containers.containerAccentLight}`}>
      <h4 className={textFormat.time}>5:30 p.m. - 7:30 p.m.</h4>
      <h4>Evening Reception</h4>
      <p>Howard-Tilton Memorial Library 5th Floor Gallery (<a href="https://www.google.com/maps/d/u/0/viewer?mid=1EXgs0sTSoukaHur1ol8Fx6MP2J7Z5-i5&ll=29.93752673008532%2C-90.12193189999999&z=16">map</a>)</p>
    </div>

    <h2 className={textFormat.day}>Friday, Oct. 11</h2>
    <p><em>All sessions held in Room 203 (Stibbs), Lavin-Bernick Center (LBC) (<a href="https://lbc.tulane.edu/building-maps">building map</a>) Tulane University (<a href="https://www.google.com/maps/d/u/0/viewer?mid=1EXgs0sTSoukaHur1ol8Fx6MP2J7Z5-i5&ll=29.93752673008532%2C-90.12193189999999&z=16">area map</a>). Additional location information, such as parking and restrooms, can be found on the <Link to="/about">About</Link> page.</em></p>

    <div className={`${containers.container} ${containers.containerAccentDark}`}>
      <h4 className={textFormat.time}>8:30 a.m. - 9:00 a.m.</h4>
      <h4>Breakfast/Registration</h4>
    </div>

    <div className={`${containers.container} ${containers.containerAccent}`}>
      <h4 className={textFormat.time}>9:00 a.m. - 9:15 a.m.</h4>
      <h4>Welcome Back</h4>
    </div>

    <div className={`${containers.container} ${containers.containerAccent}`}>
      <h4 className={textFormat.time}>9:15 a.m. - 10:35 a.m.</h4>
      <h4>Short Talks</h4>
      <p className={textFormat.title}>Historical archives as a source for STEM data</p>
      <p className={textFormat.presenter}>Courtney Kearney (TU) and Andrew Mullins III (NOPL)</p>

      <p className={textFormat.title}>Mapping Climate Change, Environmental Justice, and Information Literacy</p>
      <p className={textFormat.presenter}>Sharron Radcliff (CSU East Bay)</p>

      <p className={textFormat.title}>Data Management: Perspectives from Industrial, Mechanical Science and Aerospace Faculty</p>
      <p className={textFormat.presenter}>Chris Wiley (UIUC)</p>
    </div>

    <div className={`${containers.container} ${containers.containerAccentDark}`}>
      <h4 className={textFormat.time}>10:35 a.m. - 11:00 a.m.</h4>
      <h4>Break</h4>
    </div>

    <div className={`${containers.container} ${containers.containerAccent}`}>
      <h4 className={textFormat.time}>11:00 a.m. - 12:20 p.m.</h4>
      <h4>Workshop</h4>
      <p className={textFormat.title}>OSF hands-on: Free beginner data sharing and preservation</p>
      <p className={textFormat.presenter}>Nina Exner and Erin Carrillo (VCU)</p>

      <p className={textFormat.title}>Mapping Climate Change, Environmental Justice, and Information Literacy</p>
      <p className={textFormat.presenter}>Sharron Radcliff (CSU East Bay)</p>

      <p className={textFormat.title}>Data Management: Perspectives from Industrial, Mechanical Science and Aerospace Faculty</p>
      <p className={textFormat.presenter}>Chris Wiley (UIUC)</p>
    </div>

    <div className={`${containers.container} ${containers.containerAccentDark}`}>
      <h4 className={textFormat.time}>12:20 p.m. - 1:45 p.m.</h4>
      <h4>Lunch</h4>
    </div>

    <div className={`${containers.container} ${containers.containerAccent}`}>
      <h4 className={textFormat.time}>1:45 p.m. - 2:45 p.m.</h4>
      <h4>Panel</h4>
      <p className={textFormat.title}>Execution of data workshops and trainings</p>
      <p className={textFormat.presenter}>Ali Krzton (Auburn), Natalia Lopez (NC State), Alex Saltzman (Xavier of La), Nick Ruhs (FSU), Megan Sheffield and Maggie Albro (Clemson), Mandy Swygart-Hobaugh and Raeda Anderson (GSU)
      </p>
    </div>

    <div className={`${containers.container} ${containers.containerAccent}`}>
      <h4 className={textFormat.time}>2:45 p.m. - 3:00 p.m.</h4>
      <h4>Closing Remarks</h4>
    </div>
  </Layout>
)