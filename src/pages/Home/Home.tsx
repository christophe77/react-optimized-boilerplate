import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header, Segment, Image } from 'semantic-ui-react';
import 'semantic-ui-css/components/header.min.css';
import 'semantic-ui-css/components/segment.min.css';
import 'semantic-ui-css/components/image.min.css';

function Home() {
	const { t } = useTranslation(['home']);
	return (
		<>
			<Helmet>
				<title>{t('title')}</title>
				<meta name="description" content={t('meta.description')} />
			</Helmet>
			<Header as="h2">{t('title')}</Header>
			<Segment>
				<Image
					src="https://picsum.photos/seed/picsum/200/300"
					size="small"
					floated="left"
				/>
				<p>
					Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
					alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
					referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
					electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
					Mei ex natum rebum iisque.
				</p>
				<p>
					Audiam quaerendum eu sea, pro omittam definiebas ex. Te est latine
					definitiones. Quot wisi nulla ex duo. Vis sint solet expetenda ne, his
					te phaedrum referrentur consectetuer. Id vix fabulas oporteat, ei quo
					vide phaedrum, vim vivendum maiestatis in.
				</p>
				<p>
					Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id.
					Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute
					at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi
					te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi
					convenire mnesarchum eu per, quas minimum postulant per id.
				</p>
				<p>
					Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam
					alia facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
					referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
					electram, eos choro alterum definiebas in. Vim dolorum definiebas an.
					Mei ex natum rebum iisque.
				</p>
			</Segment>
		</>
	);
}
export default Home;
