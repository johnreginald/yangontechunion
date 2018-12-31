import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

          <div className="container mx-auto mt-10" style={
            {'box-sizing': 'border-box'}
          }>
          <div className="posts">
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug

              return <div className="column">
              <div className="post" key={node.fields.slug}>
                <div className="content">
                  <h2 className="title">
                    <Link to={node.fields.slug}>
                      {title}
                    </Link>
                  </h2>
                  <div className="date">
                    {node.frontmatter.date}
                  </div>
                  <div className="tags">
                    <a href="#" className="tag">#Laravel</a>
                    <a href="#" className="tag">#Tailwind</a>
                  </div>
                  <p className="body" dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                </div>
              </div>
              </div>
            })}
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
         query {
           site {
             siteMetadata {
               title
             }
           }
           allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
             edges {
               node {
                 excerpt
                 fields {
                   slug
                 }
                 frontmatter {
                   date(formatString: "MMMM DD, YYYY")
                   title
                  }
               }
             }
           }
         }
       `
