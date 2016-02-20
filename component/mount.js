import React from 'react';
import ReactDom from 'react-dom';

import './css/main.scss';

class Mount extends React.Component {
	render() {
		return (
			<div>Basic webpack config working</div>
		);
	}
}

ReactDom.render(<Mount />, document.getElementById('app'));