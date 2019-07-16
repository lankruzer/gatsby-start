import {graphql} from "gatsby";

export const getAllPostsQuery = graphql`
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