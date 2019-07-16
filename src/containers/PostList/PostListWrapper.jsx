import React from 'react';
import {StaticQuery} from "gatsby"
import Post from "./components/Post/Post";
import {getAllPostsQuery} from "./PostListWrapper.query";

function PostListWrapper() {
	return (
		<div>
			<StaticQuery
				query={getAllPostsQuery}
				render={({allContentfulPost: {edges}}) => (
					edges.map(({node}) => (
						<Post key={node.id} content={node}/>
					))
				)}
			/>
		</div>
	)
}

export default PostListWrapper;