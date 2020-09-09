import React from 'react'

// Componente que cambiara el tema de la app
export default function Toogle() {
	const handleChange = () => {
		const root = document.querySelector('#root')
		root.classList.toggle('dark')
		console.log(root)
	}

	return (
		<div className='toggle'>
			<input className='toggle_input' type='checkbox' onChange={handleChange} />
		</div>
	)
}
