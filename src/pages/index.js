import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Instructor from '../components/Instructor'

class HomePage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Home" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

        <div className="flex container mx-auto mt-10" style={{ boxSizing: 'border-box' }}>
          <div className="w-1/2 text-center">
            
            <Instructor />

            <div className="social-icon" data-sr="enter bottom ease scale wait 0.3s">
              <a target="_blank" href="https://facebook.com/johnthelinux">
                <i className="fa fa-facebook fa-3x" />
              </a>
              <a target="_blank" href="https://linkedin.com/in/johnthelinux">
                <i className="fa fa-linkedin fa-3x" />
              </a>
              <a target="_blank" href="https://github.com/johnreginald">
                <i className="fa fa-github fa-3x" />
              </a>
              <a target="_blank" href="https://twitter.com/johnthelinux">
                <i className="fa fa-twitter fa-3x" />
              </a>
              <a href="tel: +959794303891">
                <i className="fa fa-phone fa-3x" />
              </a>
            </div>
          </div>

          <div className="w-1/2">
            <div className="shadow-md bg-white px-10 py-8 text-justify">
              <h1 className="pt-1 mt-1">Hello World!</h1>
              <p data-sr=" bottom ease scale wait 0.1s">
                My Name is Htet Wai Yan Soe, a Professional Software Developer from a very beautiful country, <a target="_blank" href="https://en.wikipedia.org/wiki/Myanmar">
                  Myanmar
                </a>. I love to create <a target="_blank" href="http://johnthelinux.com/blog/portfolio/">
                  Awesome Stuff
                </a> related to World Wide Web. I spend most of free time writing my experience and tutorials on my <a target="_blank" href="http://johnthelinux.com/blog">
                  Blog
                </a> and hangout with <a target="_blank" href="https://web.facebook.com/groups/laravelmyanmar">
                  Local Developer Groups
                </a>. I'm also teaching <a target="_blank" href="http://johnthelinux.com/class">
                  Professional Web Development Course
                </a> at <a target="_blank" href="http://cyberwings.asia">
                  The Cyber Wings Team
                </a>. I can help you design and develop elegant and effective Web App / Websites for your business needs. If you like to hire or work with me, please feel free to <a target="_blank" href="http://johnthelinux.com/blog/contact-me">
                  get in touch
                </a> and i'm very excited to discuss with you further.
              </p>

              <h3>My Solid Skills</h3>
              <p>
                PHP, Javascript, HTML, CSS, Linux System Administration, Web
                Application Security
              </p>

              <h3>Specific Tools</h3>
              <p>
                Laravel, WordPress, JQuery, VueJS, Git, Docker, Fedora,
                CentOS, Ubuntu
              </p>
            </div>
          </div>
        </div>
      </Layout>
  }
}

export default HomePage

export const pageQuery = graphql`
         query {
           site {
             siteMetadata {
               title
             }
           }
           avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
             childImageSharp {
               fixed(width: 200, height: 200) {
                 ...GatsbyImageSharpFixed
               }
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
