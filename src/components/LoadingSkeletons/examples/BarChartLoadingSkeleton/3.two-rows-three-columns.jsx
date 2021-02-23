import React from 'react';
import createClass from 'create-react-class';
import { BarChartLoadingSkeleton } from '../../../../index';

export default createClass({
	render() {
		return (
			<div>
				<BarChartLoadingSkeleton
					isLoading={true}
					width={200}
					height={200}
					numRows={2}
					numColumns={3}
					header={'Rows And Columns'}
					marginRight={100}
					marginLeft={0}
					marginTop={0}
					marginBottom={50}
				/>
			</div>
		);
	},
});
