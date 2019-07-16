import React from "react"
// import {Link} from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import PostListWrapper from "../containers/PostList/PostListWrapper";



const IndexPage = () => (
	<Layout>
		<SEO title="Posts"/>

		<PostListWrapper/>

		{/*<Link to="/page-2/">Go to page 2</Link>*/}
	</Layout>
);

export default IndexPage
