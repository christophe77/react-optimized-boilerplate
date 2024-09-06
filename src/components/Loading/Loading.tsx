import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import 'semantic-ui-css/components/segment.min.css';
import 'semantic-ui-css/components/dimmer.min.css';
import 'semantic-ui-css/components/loader.min.css';
import 'semantic-ui-css/components/image.min.css';
import './Loading.css';

export default function Loading() {
	return (
		<Segment className='loading-container'>
			<Dimmer active inverted>
				<Loader inverted>Loading...</Loader>
			</Dimmer>
		</Segment>
	);
}
