import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
    render() {
        return (
        <div className="header">
            <div className="container mx-auto py-5">
                <div className="flex">
                    <div className="w-1/3">
                        <Link className="logo" to={`/`}>{this.props.title}</Link>
                    </div>
                    <div className="w-2/3">
                        <ul className="links">
                            <li className="item"><Link to={`/blog`}>Blog</Link></li>
                            <li className="item"><Link to={`/courses`}>Courses</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Header