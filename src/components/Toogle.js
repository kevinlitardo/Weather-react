import React, { useState } from 'react'

// Componente que cambiara el tema de la app
export default function Toogle() {
	const root = document.querySelector('#root')
	const [theme, setTheme] = useState(false)

	const handleChange = () => {
		root.classList.toggle('dark')
		if (root.classList.contains('dark')) {
			setTheme(true)
		} else {
			setTheme(false)
		}
		console.log(root)
	}

	return (
		<div className='toggle'>
			{theme ? (
				<span className='toggle_span_theme'>Ligth</span>
			) : (
				<span className='toggle_span_theme'>Dark</span>
			)}
			<span className='toggle_span'>Mode:</span>
			<input className='toggle_input' type='checkbox' onChange={handleChange} />
		</div>
	)
}
