import React from 'react';
import createClass from 'create-react-class';
import { SimpleTableLoadingSkeleton } from './../../index';

export default {
	title: 'Loading Indicator/SimpleTableLoadingSkeleton',
	component: SimpleTableLoadingSkeleton,
	parameters: {
		docs: {
			description: {
				component: (SimpleTableLoadingSkeleton as any).peek.description,
			},
		},
	},
};

/* Default */
export const Default = () => {
	const Component = createClass({
		render() {
			return <SimpleTableLoadingSkeleton isLoading={true} />;
		},
	});

	return <Component />;
};
Default.storyName = 'Default';

/* Add Header */
export const AddHeader = () => {
	const Component = createClass({
		render() {
			return (
				<SimpleTableLoadingSkeleton
					isLoading={true}
					height={50}
					header='Added Header'
				/>
			);
		},
	});

	return <Component />;
};
AddHeader.storyName = 'AddHeader';

/* Three Rows One Column */
export const ThreeRowsOneColumn = () => {
	const Component = createClass({
		render() {
			return (
				<div>
					<SimpleTableLoadingSkeleton
						isLoading={true}
						height={70}
						numRows={3}
					/>
				</div>
			);
		},
	});

	return <Component />;
};
ThreeRowsOneColumn.storyName = 'ThreeRowsOneColumn';
