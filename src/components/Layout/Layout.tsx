import { Outlet } from 'react-router-dom';
import { Container } from 'semantic-ui-react'
import "semantic-ui-css/components/container.min.css"
import TopMenu from '../Nav/Nav';
import './Layout.css';

export default function Layout() {
	return (
		<>
			<TopMenu />
			<Container className="layout-container">
				<Outlet />
			</Container>
		</>
	);
}
