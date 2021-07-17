import React from 'react'
import { Link, Route } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'

import Home from './Home'
import User from './User'
import Post from './Post'
import ShowUser from './ShowUser'
import UsersPost from './UsersPost'

const useStyle = makeStyles({
  ul:{
    listStyleType:'none',
    overflow:'hidden',
    backgroundColor:'grey',
    height:'40px',
    margin:'0',
    padding:'0'
  },
  li:{
    display : 'inline',
    padding:'30px',
    textAlign:'center'
  },
  link:{
    textDecoration:'none',
    color:'white',
    fontSize:'20px'
  }
})

const App = (props) => {
  const classes = useStyle()
  return (
    <div>
          <div>
            <ul className={ classes.ul }>
              <li className={ classes.li}><Link to='/' className={ classes.link }>Home</Link></li>
              <li className={ classes.li}><Link to='/user' className={ classes.link }>User</Link></li>
              <li className={ classes.li}><Link to='/post' className={ classes.link }>Post</Link></li>
            </ul>
          </div>
          
      <Route path='/' component={ Home } exact={ true }/>
      <Route path='/user' component={ User } exact={ true}/>
      <Route path='/post' component={ Post } exact={ true }/>
      <Route path='/user/:id' component={ ShowUser } exact={true}/>
      <Route path='/post/:id' component={ UsersPost } exact={true}/>
    </div>
  )
}

export default App
