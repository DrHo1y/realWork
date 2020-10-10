import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { Navbar, Icon } from 'react-materialize'

export const NavBar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <Navbar
            alignLinks="right"
            brand={<a href="/">Logo</a>}
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
                draggable: true,
                edge: 'left',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 200,
                preventScrolling: true
            }}
        >
            <li><NavLink to="/create">Создать</NavLink></li>
            <li><NavLink to="/links">Ссылки</NavLink></li>
            <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
        </Navbar>
    )
}