import React from 'react'
import { Link, Route } from 'react-router-dom'

import Home from './Home'
import User from './User'
import Post from './Post'
import ShowUser from './ShowUser'
import UsersPost from './UsersPost'

const App = (props) => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/user'>User</Link>
        <Link to='/post'>Post</Link>
      
      <Route path='/' component={ Home } exact={ true }/>
      <Route path='/user' component={ User } exact={ true}/>
      <Route path='/post' component={ Post } exact={ true }/>
      <Route path='/user/:id' component={ ShowUser } exact={true}/>
      <Route path='/post/:id' component={ UsersPost } />
      <Route path='/user/post/:id' component={ UsersPost } exact={ true }/>
    </div>
  )
}

export default App
