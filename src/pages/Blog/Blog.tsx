import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Header, Segment, Image } from 'semantic-ui-react';
import useAppContext from '../../context/useAppContext';
import 'semantic-ui-css/components/header.min.css';
import 'semantic-ui-css/components/segment.min.css';
import 'semantic-ui-css/components/image.min.css';

function Blog() {
	const { t } = useTranslation(['blog']);
	const { AppContext } = useAppContext();
	const { state } = useContext(AppContext);

	return (
		<>
			<Helmet>
				<title>{t('title')}</title>
				<meta name="description" content={t('meta.description')} />
			</Helmet>
			<Header as="h2">{t('title')}</Header>
			{state.articles.map((article) => (
				<Segment key={article.id}>
					<h3>{article.title}</h3>
					<Image
						src={article.image}
						size="small"
						floated="left"
						alt={article.title}
					/>
					{article.content.map((paragraph, paragraphIndex) => (
						<p key={`${paragraphIndex}-${paragraph.length}`}>{paragraph}</p>
					))}
				</Segment>
			))}
		</>
	);
}
export default Blog;
