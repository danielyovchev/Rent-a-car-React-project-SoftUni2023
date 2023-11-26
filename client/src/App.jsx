import { useState } from 'react'
import {Router, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<div>
			<Header />
			<Footer />
		</div>
		// <Router>
		// 	<Header />
		// 	<Routes>

		// 	</Routes>
		// </Router>
	  )
}

export default App
