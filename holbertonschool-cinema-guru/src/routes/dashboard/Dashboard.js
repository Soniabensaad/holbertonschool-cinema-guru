import './dashboard.css';

import Header from '../../components/navigation/Header';


import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
	return (
		<div className="dashboard-container">
			<Router>
				<Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
					<div>
						<SideBar />
						<main>
							<Routes>
								
							</Routes>
						</main>
					</div>
			</Router>
		</div>
	);
}
