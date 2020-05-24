import React from 'react'
import styled from 'styled-components'

const Dropdown = styled.div`
    .dropdown-menu{
        margin-top: 30px;
        border: none;
        background: #ffff;
    }

`


class DropdownMenu extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: 'fr'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


handleChange(e){
    this.setState({value: e.target.value});
}

handleSubmit(e){
    // console.log(this.state.value)
    e.preventDefault();
}


    render(){

        return(
            <Dropdown>
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.value} onChange={this.handleChange}  className="dropdown-menu">
                        <option value="fr">🇫🇷 FR</option>
                        <option value="en">🇬🇧 EN</option>
                    </select>
                </form>
            </Dropdown>
        )
    }
}

export default DropdownMenu