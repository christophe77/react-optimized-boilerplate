import { FC } from 'react';
import { MenuMenu, MenuItem, Menu, Image } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LangSwitch from '../LangSwitch/LangSwitch';
import { routes } from '../../routes/routes';
import 'semantic-ui-css/components/menu.min.css';
import 'semantic-ui-css/components/image.min.css';
import './Nav.css';

const Nav: FC = () => {
	const { t } = useTranslation(['routes']);
	const { pathname } = useLocation();

	return (
		<Menu pointing>
			<MenuMenu position="left">
				<MenuItem>
					<a href="/">
						<Image src="/images/react-icon.svg" alt="logo" avatar />
						<span>React boilerplate</span>
					</a>
				</MenuItem>
			</MenuMenu>
			{routes.map((route) => (
				<MenuItem
					key={route.path}
					name={route.path}
					active={pathname === route.path}
					href={route.path}
				>
					{t(route.path)}
				</MenuItem>
			))}

			<MenuMenu position="right">
				<MenuItem>
					<LangSwitch />
				</MenuItem>
			</MenuMenu>
		</Menu>
	);
};
export default Nav;
