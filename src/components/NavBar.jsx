import React from 'react'
import styled from 'styled-components'
import kompara_logo from '../img/kompara_logo.png'

const Nav = styled.nav`
    display: flex;
    .menu-navbar{
        font-size: .8rem;
        display: flex;
        align-items: center;
        list-style: none;
        flex-wrap: wrap;
        li{
            margin: 0 10px;
            border: 2px solid #0572B2;
            border-radius: 8px;
            padding: 10px 3px;
            width: 80px;
            heigth: 40px;
            background: #6eb2da;
            text-align: center;
            a{
                text-decoration: none;
                color: #ffff;
            }
        }
    }

    .brand{
        margin: 16px 0;
        img{
            width: 10rem;
        }
    }

    .language{
        margin: 0;
        padding: 0;
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
                    <li><a href="#">Rejoins la communauté</a></li>
                    <li><a href="#">Connexion</a></li>
                </ul>
                <a>
                    <ul className="language">
                        <li>FR</li>
                        <li>EN</li>
                    </ul>
                </a>
            </Nav>
        )
    }
}


export default NavBar