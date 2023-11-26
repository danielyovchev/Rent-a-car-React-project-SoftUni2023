import { useState } from 'react'
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {PATHS} from './utils/routeConstants'
import Home from './components/Home/Home'
import About from './components/About/About'
import Cars from './components/Cars/Cars'
import Contacts from './components/Contacts/Contacts'

function App() {
	return (
		// <div>
		// 	<Header />
		// 	<Footer />
		// </div>
		<Router>
			<Header />
			<>
			<Routes>
				<Route path={PATHS.HOME} element={<Home/>} />
				<Route path={PATHS.ABOUT} element={<About/>} />
				<Route path={PATHS.CARS} element={<Cars/>} />
				<Route path={PATHS.CONTACTS} element={<Contacts/>} />
			</Routes>
			</>
			
			<Footer />
		</Router>
	  )
}

export default App
