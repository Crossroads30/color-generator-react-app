import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
	const [alert, setAlert] = useState(false)

	const stringRgb = rgb.join(',')
	const hex = rgbToHex(...rgb) // we can add hex numbers with 'rgbToHex' function

	// console.log(hexColor)// we can add hex numbers without a 'rgbToHex' function just passing hexColor prop to '<p className='color-value'>'
	// console.log(stringRgb)
	// console.log(rgb)

	return (
		<article
			className={`color ${index > 10 && 'color-light'}`}
			style={{ backgroundColor: `rgb(${stringRgb})` }}
		>
			<p className='percent-value'>{weight}%</p>
			<p className='color-value'>{hex}</p>
		</article>
	)
}

export default SingleColor
