import React from 'react'
import styled from 'styled-components'

const Dropdown = styled.div`

`


class DropdownMenu extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            showDropdown: false,
            lang: ['FR', 'EN'],
        }

        this.showDrop = this.showDrop.bind(this);
        this.closeDropdownMenu = this.closeDropdownMenu.bind(this);
    }


    showDrop(e){
        e.preventDefault();
        this.setState({showDropdown : this.state.showDropdown === false ? true : false}, ()=> {
            document.addEventListener('click', this.closeDropdownMenu)
        })
    }

    closeDropdownMenu(){
        // e.preventDefault();
        this.setState({showDrop: this.state.showDropdown = false }, () =>{
            document.removeEventListener('click', this.closeDropdownMenu)
        })
    }




    render(){

        return(
            <Dropdown>
                <button onClick={this.showDrop}>{this.state.showDropdown === false ? this.state.lang[0] : this.state.lang[2]}</button>

                {
                this.state.showDropdown === true ?

                <div className="menu-dropdown">
                    <ul>
                        <li>FR</li>
                        <li>EN</li>
                    </ul>
                </div>

                : 
                null

                }
            </Dropdown>
        )
    }
}

export default DropdownMenu