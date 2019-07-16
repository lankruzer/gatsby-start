import React from 'react';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

function Post(props) {
	console.log('props - ', props);
	const { content } = props;
	const { backgroundImage } = content;

	return (
		<div>
			<h2>{content.title}</h2>
			<img src={backgroundImage.file.url} alt={backgroundImage.title} />
			<div dangerouslySetInnerHTML={{ __html: documentToHtmlString(JSON.parse(content.content.content)) }} />
		</div>
	)
}

export default Post;