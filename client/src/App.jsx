import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import { AuthProvider } from './contexts/AuthContext'
import { PATHS } from './utils/routeConstants'

import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Cars from './components/Cars/Cars'
import Contacts from './components/Contacts/Contacts'
import Login from './components/Login/Login'


function App() {
	return (
		<Router>
			<AuthProvider>
				<Header />
				<>
					<Routes>
						<Route path={PATHS.HOME} element={<Home />} />
						<Route path={PATHS.ABOUT} element={<About />} />
						<Route path={PATHS.CARS} element={<Cars />} />
						<Route path={PATHS.CONTACTS} element={<Contacts />} />
						<Route path={PATHS.LOGIN} element={<Login />} />
					</Routes>
				</>
				<Footer />
			</AuthProvider>

		</Router>
	)
}

export default App
