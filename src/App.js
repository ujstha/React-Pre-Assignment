import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomeContainer } from './containers/HomeContainer';
import { UserDetailContainer } from './containers/UserDetailContainer';
import './assets/styles/variables.css';
import './App.css';
import { Navbar } from './components/Navbar';

function App() {
	return (
		<>
			<Navbar />
			<div className='container py-3'>
				<Router>
					<Routes>
						<Route path='/' element={<HomeContainer />} />
						<Route path='/user/:id' element={<UserDetailContainer />} />
					</Routes>
				</Router>
			</div>
		</>
	);
}

export default App;
