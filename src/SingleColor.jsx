import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index}) => {
  const [alert, setAlert] = useState(false)

  const stringRgb = rgb.join(',')
  const hex = rgbToHex(...rgb)
  // console.log(stringRgb)
  // console.log(rgb)
  
  return (
		<article
			className={`color`}
			style={{ backgroundColor: `rgb(${stringRgb})` }}
		>
			<p className='percent-value'>{weight}%</p>
			<p className='color-value'>{hex}</p>
		</article>
	)
}

export default SingleColor
