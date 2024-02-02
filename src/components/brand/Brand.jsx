import React from 'react'
import './brand.css'
import google from '../../assets/google.png'
import slack from '../../assets/slack.png'
import atlassian from '../../assets/atlassian.png'
import shopify from '../../assets/shopify.png'
import dropbox from '../../assets/dropbox.png'

const Brand = () => {
  return (
<div className="gpt3__brand section__padding">
    <div>
      <img alt='' src={google} />
    </div>
    <div>
      <img alt='' src={slack} />
    </div>
    <div>
      <img alt='' src={atlassian} />
    </div>
    <div>
      <img alt='' src={dropbox} />
    </div>
    <div>
      <img alt='' src={shopify} />
    </div>
  </div>
  )
}

export default Brand