import React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Icon } from 'react-materialize'

export const NavBarNoreg = () => {
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
            <li><NavLink to="/">Главная</NavLink></li>
            <li><NavLink to="/reg">Войти / Зарегистрироваться</NavLink></li>
        </Navbar>
    )
}
