import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
  	<div className="Hero">
      <div className="HeroGroup">
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
        <Link to="/video">Watch the video</Link>
      </div>
    </div>
  </div>
)

export default IndexPage
