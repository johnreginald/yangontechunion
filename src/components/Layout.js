import React from 'react'
import "../scss/app.scss"
import Header from "./Header"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return <div>
        <Header title={title} />
        {children}
      </div>
  }
}

export default Layout
