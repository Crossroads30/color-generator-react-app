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
						/>
						<button className='btn' type='submit'>generate</button>
					</form>
			</section>
      <section className="section">
        <div className="colors">

        </div>
      </section>
		</>
	)
}

export default App
