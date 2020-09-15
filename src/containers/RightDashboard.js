import React from 'react'

import Toogle from '../components/Toogle'
import CityNameRight from '../components/CityNameRight'
import TodayStatic from '../components/TodayStatic'
import CardsRight from '../components/CardsRight'

// Contenedor de la parte derecha de la app
export default function RightDashboard() {
	return (
		<section className='rightDashboard'>
			{/* Switch Theme */}
			<Toogle />
			{/* Ciudad, pais, fecha con Date */}
			<CityNameRight />
			{/* Today estatico deg  e icono del sol weather.weather[0].main */}
			<TodayStatic />
			{/* Cuadritos de viento, humedad, nubes = clouds.all */}
			<CardsRight />
		</section>
	)
}
