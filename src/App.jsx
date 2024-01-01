import React, { useEffect, useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

const percentList = []

for (let i = 1; i <= 20; i++) {
	// console.log(i)
	percentList.push(i)
}
// console.log(percentList)

function App() {
	const [color, setColor] = useState('')
	const [percent, setPercent] = useState(10)
	const [list, setList] = useState(new Values('#f15025').all(percent))
	const [error, setError] = useState(false)

	console.log(percent)

useEffect(()=> {
	setPercent(percent)
}, [percent])


	const handleSubmit = e => {
		e.preventDefault()
		try {
			setPercent(percent)
			let colors = new Values(color).all(percent)
			setList(colors)
			setError(false)
			// console.log(colors)
		} catch (error) {
			setError(true)
			// console.log(error)
		}
	}


	return (
		<>
			<section className='container'>
				<h3>color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						name='color'
						id='color'
						value={color}
						onChange={e => setColor(e.target.value)}
						placeholder='#f15025'
						className={`${error ? 'error' : null}`}
					/>
					<div className='percent-block'>
						<label htmlFor='percentList'> %</label>
						<select
							name='percentList'
							id='percentList'
							value={percent}
							onChange={(e) => setPercent(Number(e.target.value))}
						>
							{percentList.map(percentValue => {
								return <option key={percentValue}>{percentValue}</option>
							})}
						</select>
					</div>
					<button className='btn' type='submit'>
						generate
					</button>
				</form>
			</section>
			<section className='colors'>
				{list.map((color, index) => {
					{
						/* console.log(color) */
					}
					return (
						<SingleColor
							key={index}
							{...color}
							hexColor={color.hex}
							index={index}
						/>
					)
				})}
			</section>
		</>
	)
}

export default App
