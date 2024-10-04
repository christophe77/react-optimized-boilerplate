import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import i18n from './i18n';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout/Layout';
import Loading from './components/Loading/Loading';
import { routes } from './routes/routes';

export default function App() {
	return (
		<I18nextProvider i18n={i18n} defaultNS={'translation'}>
			<AppProvider>
				<HelmetProvider>
					<BrowserRouter>
						<Routes>
							<Route element={<Layout />}>
								{routes.map(({ path, component: Component }) => (
									<Route
										key={path}
										path={path}
										element={
											<Suspense fallback={<Loading />}>
												<Component />
											</Suspense>
										}
									/>
								))}
							</Route>
						</Routes>
					</BrowserRouter>
				</HelmetProvider>
			</AppProvider>
		</I18nextProvider>
	);
}
