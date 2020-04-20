import React from 'react'

import FgImage from '../images/fg.png'

const Foreground = () => {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        width: 306,
        height: 108,
        background: `url(${FgImage})`
      }}></div>
  )
}

export default Foreground
