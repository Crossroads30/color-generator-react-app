import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
	const [color, setColor] = useState('')
	const [list, setList] = useState([])
	const [error, setError] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		console.log('hello')
		try {
			let colors = new Values(color).all(10)
			setList(colors)
			console.log(colors)
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
					<button className='btn' type='submit'>
						generate
					</button>
				</form>
			</section>
			<section className='section'>
				<div className='colors'>
					{list.map((color, index) => {
						return <SingleColor key={index} {...color} index={index} />
					})}
				</div>
			</section>
		</>
	)
}

export default App
