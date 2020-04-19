import React, { Fragment } from 'react';
import spinner from './spinner.gif';

export default () => {
	return (
		<Fragment>
			<img src={spinner} style={{ width: '200px', height: 'auto', display: 'block' }} alt='loading...' />
		</Fragment>
	);
};
