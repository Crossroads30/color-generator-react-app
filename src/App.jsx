import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
	const [color, setColor] = useState('')
	const [list, setList] = useState([])
	const [error, setError] = useState(false)

	const handleSubmit = e => {
		e.preventDefault()
		try {
			let colors = new Values(color).all(10)
			setList(colors)
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
					<button className='btn' type='submit'>
						generate
					</button>
				</form>
			</section>
			<section className='colors'>			
					{list.map((color, index) => {
						{/* console.log(color) */}
						return <SingleColor key={index} {...color} hexColor={color.hex} index={index} />
					})}
			</section>
		</>
	)
}

export default App
