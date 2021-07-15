import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UsersPost = (props) => {
    const { id } = props.match.params
    const [ userDetails, setUserDetails ] = useState({})
    const [ postDetails, setPostDetails ] = useState({})
    const [ comments, setComments ] = useState([])

    const [ userId, setUserId ] = useState('')

    useEffect(() => {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then((response) => {
                    const data = response.data
                    setPostDetails(data)
                    setUserId(data.userId)
                })
                .catch((err) => {
                    alert(err.message)
                })

            axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => {
                const data = response.data
                setComments(data)
            })
            .catch((err) => {
                alert(err.message)
            })
    },[])

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then((response) => {
                const data = response.data
                setUserDetails(data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }, [userId])
    
    return (
        <div>
                    <div>
                        <h2> NAME : { userDetails.name } </h2>
                        <h2> TITLE : { postDetails.title }</h2>
                        <h3><label>BODY:</label></h3>
                        <h3>{ postDetails.body }</h3>
                    </div>
            <hr />
            <h2>COMMENTS</h2>
            <ul>
                {
                    comments.map((comment) => {
                        return <li key={ comment.id }>{ comment.body }</li>
                    })
                }
            </ul>
            <hr />
            <Link to={`/user/${userId}`}>More posts of author : { userDetails.name} </Link>
        </div>
    )
}

export default UsersPost
