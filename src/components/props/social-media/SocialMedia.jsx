import React from 'react'
import { Link } from 'react-router-dom'

const SocialMedia = ({source}) => {
  return (
    <div>
       <Link ><img src={source} alt="social media icon" /></Link>
    </div>
  )
}

export default SocialMedia
