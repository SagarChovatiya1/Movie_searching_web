import React, {Component, Fragment} from 'react'
import logo from './tmdb.png'

class Header extends Component {
  render(){
    return(
      <Fragment>
        <div className="header">
          {/* <p className="header_slo">-Enjoy your weekends with Movie Zorro-</p> */}
          <h1>Movie Searching</h1>
          <div className="header_logo">
            <img src={logo} />
            <p>This app is powered by The Movie Db</p>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default Header


