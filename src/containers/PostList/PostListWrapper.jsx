import React from 'react';
import { graphql, StaticQuery } from "gatsby"
import Post from "./components/Post/Post";

const getAllPostsQuery = graphql`
	{
		allContentfulPost {
			edges {
				node {
					backgroundImage {
						title
						file {
							url
						}
					}
					content {
						content
					}
					title
				}
			}
		}
	}`;

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