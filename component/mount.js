import React from 'react';
import ReactDom from 'react-dom';

class Mount extends React.Component {
	render() {
		return (
			<div>Basic webpack config working</div>
		);
	}
}

ReactDom.render(<Mount />, document.getElementById('app'));