import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


//   return (
//     <div className="instructor">
//       <img className="h-48 rounded-full" />

//       <h1 className="mt-1 mb-1 text-4xl">Htet Wai Yan Soe</h1>

//       <h3 className="mt-0">Web Development Instructor</h3>
//     </div>
//   );
// }
const Content = ({ data }) => {
  return <div className="instructor">
      <Img className="h-48 rounded-full" fixed={data.avatar.childImageSharp.fixed} />

      <h1 className="mt-1 mb-1 text-4xl">Htet Wai Yan Soe</h1>

      <h3 className="mt-0">Web Development Instructor</h3>
    </div>
}

const Instructor = props => {
  return (
    <StaticQuery
      query={instructorQuery}
      render={data => <Content data={data} {...props} />}
    />
  )
}


const instructorQuery = graphql`
  query instructorQuery {
    avatar: file(absolutePath: { regex: "/profile.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default Instructor