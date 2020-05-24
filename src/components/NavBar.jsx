import React from 'react'
import styled from 'styled-components'
import kompara_logo from '../img/kompara_logo.png'
import DropdownMenu from './dropdown/DropdownMenu'

const Nav = styled.nav`
    display: flex;
    padding: 0 20px;
    .menu-navbar{
        margin: 0 auto;
        font-size: .8rem;
        font-weight: bold;
        display: flex;
        align-items: center;
        list-style: none;
        flex-wrap: wrap;
        li{
            margin: 0 10px;
            border: 2px solid #308acc;
            border-radius: 8px;
            padding: 10px 3px;
            width: 80px;
            background: #6aa7e7;
            text-align: center;
            a{
                text-decoration: none;
                color: #ffff;
            }
        }
        .rlc{
            background: #b4b4b4;
            border: 2px solid #b4b4b4;
        }
    }

    .brand{
        margin: 16px 0;
        img{
            width: 10rem;
        }
    }

`



class NavBar extends React.Component{
    render(){
        return (
            <Nav>
                <span className="brand">
                    <img src={kompara_logo} alt="Kompara Logo"/>
                </span>
                <ul className="menu-navbar">
                    <li><a href="#">Hello</a></li>
                    <li><a href="#">Kompara</a></li>
                    <li><a href="#">Te donne</a></li>
                    <li><a href="#">Des conseils</a></li>
                    <li className="rlc"><a href="#" >Rejoins la communauté</a></li>
                    <li><a href="#">Connexion</a></li>
                </ul>
                <DropdownMenu />
            </Nav>
        )
    }
}


export default NavBar