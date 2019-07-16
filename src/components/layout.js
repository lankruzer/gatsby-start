/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import {useStaticQuery, graphql} from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({children}) => {
	const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
	`);

	return (
		<>
			<div
				style={{
					margin: `0 auto`,
					display: "flex",
					flexDirection: "column",
					minHeight: `100vh`,
				}}
			>
				<Header siteTitle={data.site.siteMetadata.title}/>
				<main style={{
					margin: `0 auto`,
					maxWidth: 960,
					width: `100%`,
					padding: `0px 1.0875rem 1.45rem`,
					paddingTop: 0,

				}}>
					{children}
				</main>
				<footer
					style={{
						margin: `auto auto 0`,
						width: `100%`,
						padding: `1.45rem 1.0875rem`,
						background: `rebeccapurple`,
					}}
				>
					<div style={{
						maxWidth: 960,
						width: `100%`,
						margin: `0 auto`,
						color: `#fff`,
					}}>
						© {new Date().getFullYear()}, Built with
						{` `}
						<a href="https://www.gatsbyjs.org"
						   style={{
							   color: `#fff`,
						   }}
						>
							Gatsby
						</a>
					</div>
				</footer>
			</div>
		</>
	)
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout
