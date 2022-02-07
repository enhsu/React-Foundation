import axios from 'axios'
import { useEffect, useState } from 'react';

const FetchFunctionalComponent = () => {
    // lists
    const [users, setUsers] = useState([])
    const [getUsersError, setGetUsersError] = useState('')
    // single-user
    const [userId, setUserId] = useState('1')
    const [idFromBtnClick, setIdFromBtnClick] = useState('1')
    const [user, setUser] = useState({})
    const [getUserError, setGetUserError] = useState('')

    // lists
    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                setUsers(res.data)
                setGetUsersError('')
            })
            .catch(err => {
                setUsers([])
                setGetUsersError(err.message)
            })
    }

    // single-user
    const handleGetUserBtnClick = () => {
        setIdFromBtnClick(userId)
    }
    const getUser = (id) => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => {
                setUser(res.data)
                setGetUserError('')
            })
            .catch(err => {
                setUser({})
                setGetUserError(err.message)
            })
    }

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        getUser(idFromBtnClick)
    }, [idFromBtnClick])

    return (
        <div>
            <h2>Fetch data functional component</h2>
            <div className='lists'>
                <h3>Users List</h3>
                {
                    users.length !== 0 &&
                    <ul>
                    {
                        users.map(user => (
                            <li key={user.id}>userid: {user.id}, username: {user.name}</li>
                        ))
                    }
                    </ul>
                }
                {
                    getUsersError.length !== 0 &&
                    <p>{getUsersError}</p>
                }
            </div>
            <div className='single-user'>
                <h3>Single User</h3>
                <input type="text" placeholder='valid: 1 ~ 10' value={userId} onChange={(e) => setUserId(e.target.value)}/>
                <button onClick={() => handleGetUserBtnClick()}>Get Single User</button>
                {
                    Object.keys(user).length !== 0 &&
                    <p>user id: {user.id}, username: {user.name}</p>
                }
                {
                    getUserError.length !== 0 &&
                    <p>{getUserError}</p>
                }
            </div>
        </div>
    );
}
 
export default FetchFunctionalComponent;