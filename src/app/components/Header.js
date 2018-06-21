import React from 'react';

const Header = props => (
	<div className="app-header">
		<h1>React.JS Minesweeper</h1>
		<i className="zmdi zmdi-help app-header-help-icon" onClick={props.onToggleHelp}></i>
	</div>
);


export default Header;