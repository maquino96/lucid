import React from 'react';
import createClass from 'create-react-class';
import { Button, Checkbox, ScrollTable, SuccessIcon } from './../../index';

export default {
	title: 'Table/ScrollTable',
	component: ScrollTable,
	parameters: {
		docs: {
			description: {
				component: (ScrollTable as any).peek.description,
			},
		},
	},
};

/* Standard */
export const Standard = () => {
	const { Thead, Tbody, Tr, Th, Td } = ScrollTable;

	const Component = createClass({
		render() {
			return (
				<ScrollTable>
					<Thead>
						<Tr>
							<Th rowSpan={2}>RS</Th>
							<Th rowSpan={2}>
								<Checkbox />
							</Th>
							<Th rowSpan={2} isSortable isResizable>
								Sortable and resizable.
							</Th>
							<Th rowSpan={2}>
								<SuccessIcon />
							</Th>
							<Th rowSpan={2}>Button</Th>
							<Th rowSpan={2} isSorted sortDirection='up' isResizable>
								Sorted Column
							</Th>
							<Th colSpan={3} align='center'>
								Alignments
							</Th>
						</Tr>
						<Tr>
							<Th align='left'>align left</Th>
							<Th align='center' isResizable>
								align center
							</Th>
							<Th align='right' isSortable isSorted>
								align right
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td rowSpan={14} hasBorderRight>
								RS
							</Td>
							<Td>
								<Checkbox />
							</Td>
							<Td>Text</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>isDisabled</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable>
							<Td>
								<Checkbox />
							</Td>
							<Td>Text && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isDisabled isActionable>
							<Td>
								<Checkbox />
							</Td>
							<Td>isDisabled && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>Link</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>isDisabled Link</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>Link && isActionable</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>isDisabled Link && isActionable</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected isDisabled>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected && isDisabled</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected isActionable>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected isDisabled isActionable>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected && isDisabled && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable isActive>
							<Td>
								<Checkbox />
							</Td>
							<Td>isActive</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable isActive isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>isActive && isDisabled</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
					</Tbody>
				</ScrollTable>
			);
		},
	});

	return <Component />;
};
Standard.storyName = 'Standard';

/* With Border */
export const WithBorder = () => {
	const { Thead, Tbody, Tr, Th, Td } = ScrollTable;

	const Component = createClass({
		render() {
			return (
				<ScrollTable hasBorder>
					<Thead>
						<Tr>
							<Th rowSpan={2}>RS</Th>
							<Th rowSpan={2}>
								<Checkbox />
							</Th>
							<Th rowSpan={2} isSortable isResizable>
								Sortable and resizable.
							</Th>
							<Th rowSpan={2}>
								<SuccessIcon />
							</Th>
							<Th rowSpan={2}>Button</Th>
							<Th rowSpan={2} isSorted sortDirection='up' isResizable>
								Sorted Column
							</Th>
							<Th colSpan={3} align='center'>
								Alignments
							</Th>
						</Tr>
						<Tr>
							<Th align='left'>align left</Th>
							<Th align='center' isResizable>
								align center
							</Th>
							<Th align='right' isSortable isSorted>
								align right
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td rowSpan={14} hasBorderRight>
								RS
							</Td>
							<Td>
								<Checkbox />
							</Td>
							<Td>Text</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>isDisabled</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable>
							<Td>
								<Checkbox />
							</Td>
							<Td>Text && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isDisabled isActionable>
							<Td>
								<Checkbox />
							</Td>
							<Td>isDisabled && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>Link</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>isDisabled Link</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>Link && isActionable</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>isDisabled Link && isActionable</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected isDisabled>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected && isDisabled</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected isActionable>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected isDisabled isActionable>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected && isDisabled && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable isActive>
							<Td>
								<Checkbox />
							</Td>
							<Td>isActive</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable isActive isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>isActive && isDisabled</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
					</Tbody>
				</ScrollTable>
			);
		},
	});

	return <Component />;
};
WithBorder.storyName = 'WithBorder';

/* Set Width And Height */
export const SetWidthAndHeight = () => {
	const { Thead, Tbody, Tr, Th, Td } = ScrollTable;

	const Component = createClass({
		render() {
			return (
				<ScrollTable
					hasWordWrap={false}
					style={{
						width: 300,
						height: 300,
					}}
				>
					<Thead>
						<Tr>
							<Th rowSpan={2}>RS</Th>
							<Th rowSpan={2}>
								<Checkbox />
							</Th>
							<Th rowSpan={2} isSortable isResizable>
								Sortable and resizable.
							</Th>
							<Th rowSpan={2}>
								<SuccessIcon />
							</Th>
							<Th rowSpan={2}>Button</Th>
							<Th rowSpan={2} isSorted sortDirection='up' isResizable>
								Sorted Column
							</Th>
							<Th colSpan={3} align='center'>
								Alignments
							</Th>
						</Tr>
						<Tr>
							<Th align='left'>align left</Th>
							<Th align='center' isResizable>
								align center
							</Th>
							<Th align='right' isSortable isSorted>
								align right
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td rowSpan={14} hasBorderRight>
								RS
							</Td>
							<Td>
								<Checkbox />
							</Td>
							<Td>Text</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>isDisabled</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable>
							<Td>
								<Checkbox />
							</Td>
							<Td>Text && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isDisabled isActionable>
							<Td>
								<Checkbox />
							</Td>
							<Td>isDisabled && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>Link</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>isDisabled Link</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>Link && isActionable</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>isDisabled Link && isActionable</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected isDisabled>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected && isDisabled</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected isActionable>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected isDisabled isActionable>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected && isDisabled && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable isActive>
							<Td>
								<Checkbox />
							</Td>
							<Td>isActive</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable isActive isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>isActive && isDisabled</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
					</Tbody>
				</ScrollTable>
			);
		},
	});

	return <Component />;
};
SetWidthAndHeight.storyName = 'SetWidthAndHeight';

/* Full Width */
export const FullWidth = () => {
	const { Thead, Tbody, Tr, Th, Td } = ScrollTable;

	const Component = createClass({
		render() {
			return (
				<ScrollTable hasWordWrap={false}>
					<Thead>
						<Tr>
							<Th rowSpan={2}>RS</Th>
							<Th rowSpan={2}>
								<Checkbox />
							</Th>
							<Th rowSpan={2} isSortable isResizable>
								Sortable and resizable.
							</Th>
							<Th rowSpan={2}>
								<SuccessIcon />
							</Th>
							<Th rowSpan={2}>Button</Th>
							<Th rowSpan={2} isSorted sortDirection='up' isResizable>
								Sorted Column
							</Th>
							<Th colSpan={3} align='center'>
								Alignments
							</Th>
							<Th rowSpan={2}>Extra Column</Th>
							<Th rowSpan={2}>Extra Column</Th>
							<Th rowSpan={2}>Extra Column</Th>
							<Th rowSpan={2}>Extra Column</Th>
							<Th rowSpan={2}>Extra Column</Th>
							<Th rowSpan={2}>Extra Column</Th>
							<Th rowSpan={2}>Extra Column</Th>
							<Th rowSpan={2}>Extra Column</Th>
							<Th rowSpan={2}>Extra Column</Th>
							<Th rowSpan={2}>Extra Column</Th>
						</Tr>
						<Tr>
							<Th align='left'>align left</Th>
							<Th align='center' isResizable>
								align center
							</Th>
							<Th align='right' isSortable isSorted>
								align right
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td rowSpan={14} hasBorderRight>
								RS
							</Td>
							<Td>
								<Checkbox />
							</Td>
							<Td>Text</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
						</Tr>
						<Tr isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>isDisabled</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
						</Tr>
						<Tr isActionable>
							<Td>
								<Checkbox />
							</Td>
							<Td>Text && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
						</Tr>
						<Tr isDisabled isActionable>
							<Td>
								<Checkbox />
							</Td>
							<Td>isDisabled && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
						</Tr>
						<Tr>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>Link</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
						</Tr>
						<Tr isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>isDisabled Link</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
						</Tr>
						<Tr isActionable>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>Link && isActionable</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
						</Tr>
						<Tr isActionable isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>isDisabled Link && isActionable</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
						</Tr>
						<Tr isSelected>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
						</Tr>
						<Tr isSelected isDisabled>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected && isDisabled</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
						</Tr>
						<Tr isSelected isActionable>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
						</Tr>
						<Tr isSelected isDisabled isActionable>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected && isDisabled && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
						</Tr>
						<Tr isActionable isActive>
							<Td>
								<Checkbox />
							</Td>
							<Td>isActive</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
						</Tr>
						<Tr isActionable isActive isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>isActive && isDisabled</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
							<Td>Extra Column</Td>
						</Tr>
					</Tbody>
				</ScrollTable>
			);
		},
	});

	return <Component />;
};
FullWidth.storyName = 'FullWidth';

/* Set Table Width */
export const SetTableWidth = () => {
	const { Thead, Tbody, Tr, Th, Td } = ScrollTable;

	const Component = createClass({
		render() {
			return (
				<ScrollTable tableWidth={2000}>
					<Thead>
						<Tr>
							<Th rowSpan={2}>RS</Th>
							<Th rowSpan={2}>
								<Checkbox />
							</Th>
							<Th rowSpan={2} isSortable isResizable>
								Sortable and resizable.
							</Th>
							<Th rowSpan={2}>
								<SuccessIcon />
							</Th>
							<Th rowSpan={2}>Button</Th>
							<Th rowSpan={2} isSorted sortDirection='up' isResizable>
								Sorted Column
							</Th>
							<Th colSpan={3} align='center'>
								Alignments
							</Th>
						</Tr>
						<Tr>
							<Th align='left'>align left</Th>
							<Th align='center' isResizable>
								align center
							</Th>
							<Th align='right' isSortable isSorted>
								align right
							</Th>
						</Tr>
					</Thead>
					<Tbody>
						<Tr>
							<Td rowSpan={14} hasBorderRight>
								RS
							</Td>
							<Td>
								<Checkbox />
							</Td>
							<Td>Text</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>isDisabled</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable>
							<Td>
								<Checkbox />
							</Td>
							<Td>Text && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isDisabled isActionable>
							<Td>
								<Checkbox />
							</Td>
							<Td>isDisabled && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>Link</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>isDisabled Link</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>Link && isActionable</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>
								<a href='#'>isDisabled Link && isActionable</a>
							</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected isDisabled>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected && isDisabled</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected isActionable>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isSelected isDisabled isActionable>
							<Td>
								<Checkbox isSelected={true} />
							</Td>
							<Td>isSelected && isDisabled && isActionable</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable isActive>
							<Td>
								<Checkbox />
							</Td>
							<Td>isActive</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small'>button</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
						<Tr isActionable isActive isDisabled>
							<Td>
								<Checkbox />
							</Td>
							<Td>isActive && isDisabled</Td>
							<Td hasBorderLeft hasBorderRight>
								<SuccessIcon />
							</Td>
							<Td>
								<Button size='small' isDisabled={true}>
									button
								</Button>
							</Td>
							<Td>Sorted Column</Td>
							<Td align='left' hasBorderLeft>
								align left
							</Td>
							<Td align='center'>align center</Td>
							<Td align='right'>align right</Td>
						</Tr>
					</Tbody>
				</ScrollTable>
			);
		},
	});

	return <Component />;
};
SetTableWidth.storyName = 'SetTableWidth';
