import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({}) => {
  return (
		<>
			{list.map((color, index) => {
				return <div key={index} className='color'></div>
			})}
		</>
	)
}

export default SingleColor
