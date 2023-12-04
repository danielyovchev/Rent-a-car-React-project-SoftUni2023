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
import Logout from './components/Logout/Logout'
import BookingPage from './components/BookingPage/BookingPage'
import MyBookings from './components/MyBookings/MyBookings'
import Register from './components/Register/Register'
import { ToastContainer } from 'react-toastify'
import AuthGuard from './components/Guards/AuthGuard'
import CarAdmin from './components/CarAdmin/CarAdmin'
import AdminGuard from './components/Guards/AdminGuard'
import NotFound from './components/NotFound/NotFound'


function App() {
	return (
		<Router>
			<AuthProvider>
				<Header />
				<ToastContainer />
				<>
					<Routes>
						<Route path={PATHS.HOME} element={<Home />} />
						<Route path={PATHS.ABOUT} element={<About />} />
						<Route path={PATHS.CARS} element={<Cars />} />
						<Route path={PATHS.CONTACTS} element={<Contacts />} />
						<Route path={PATHS.LOGIN} element={<Login />} />
						<Route path={PATHS.BOOK} element={<BookingPage />} />
						<Route path={PATHS.REGISTER} element={<Register />} />

						<Route element={<AuthGuard />}>
							<Route path={PATHS.MYBOOKINGS} element={<MyBookings />} />
							<Route path={PATHS.LOGOUT} element={<Logout />} />
						</Route>
						<Route element={<AdminGuard />}>
							<Route path={PATHS.ADMINCAR} element={<CarAdmin />} />
						</Route>
						<Route path="*" element={<NotFound />} />
					</Routes>
				</>
				<Footer />
			</AuthProvider>

		</Router>
	)
}

export default App
