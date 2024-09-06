import { useTranslation } from 'react-i18next';
import { ButtonGroup, Button, Flag } from 'semantic-ui-react';
import "semantic-ui-css/components/button.min.css"
import "semantic-ui-css/components/flag.min.css"

export default function LangSwitch() {
	const { i18n } = useTranslation();

	return (
		<ButtonGroup>
			<Button
				id="buttonSwitchToFrench"
				title="Switch to french"
				disabled={i18n.language === 'fr'}
				onClick={() => i18n.changeLanguage('fr')}
			>
				<Flag name="fr" />
			</Button>
			<Button
				id="buttonSwitchToEnglish"
				title="Switch to english"
				disabled={i18n.language === 'en'}
				onClick={() => i18n.changeLanguage('en')}
			>
				<Flag name="us" />
			</Button>
		</ButtonGroup>
	);
}
