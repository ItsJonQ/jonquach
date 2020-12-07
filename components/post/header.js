import React from 'react';
import Date from '../meta/date';
import PostTitle from './title';

function PostHeader({ children, title, date }, ref) {
	return (
		<div ref={ref}>
			<PostTitle>{children || title}</PostTitle>
			<Date date={date} />
		</div>
	);
}

export default React.forwardRef(PostHeader);
