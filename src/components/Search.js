import React, { useState, useContext } from 'react'

import { WeatherContext } from '../context/WeatherContext'

// Buscador principal
export default function Search() {
	const { changeCity } = useContext(WeatherContext)
	// Valor del input para buscar la ciudad
	const [keyword, setKeyword] = useState('')

	const onChange = (e) => {
		setKeyword(e.target.value)
	}

	const onSubmit = (e) => {
		e.preventDefault()
		changeCity(keyword)
		setKeyword('')
	}

	return (
		<div className='search'>
			<form onSubmit={onSubmit} className='search_form'>
				<input
					className='search_form_input'
					type='text'
					onChange={onChange}
					value={keyword}
					required
					placeholder='Will it rain today?'
					autoFocus
				/>
				<i className='fas fa-search-location search_form_icon'></i>
			</form>
		</div>
	)
}
