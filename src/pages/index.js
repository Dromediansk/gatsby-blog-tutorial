import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout>
      <SEO title="Home" />
      <div>
        <h1>Miroslav's Thoughts</h1>
        {posts.map(({ node }) => (
          <Link key={node.id} to={node.fields.slug}>
            <span>
              {node.frontmatter.title} - {node.frontmatter.date}{" "}
            </span>
            <p>{node.excerpt}</p>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: frontmatter___date }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
