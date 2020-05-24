import React from 'react'
import styled from 'styled-components'


const Header = styled.div`
    display: flex;

`

class Intro extends React.Component{
    render(){
        return(
            <Header>
                <div className="formulaire">
                    <h2>Dites nous ce que vous voulez</h2>
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="montant">Je dispose de</label>
                        <input type="number" placeholder="Montant"/>
                       
                        <select>
                            <option value="france">🇫🇷 EUR</option>
                            <option value="belgique">🇧🇪 EUR</option>
                            <option value="usa">🇺🇲 USD</option>
                            <option value="ci">🇨🇮 FR</option>
                            <option value="south_africa">🇿🇦 RAND</option>
                        </select>
                        <span>ENTER</span>
                        <select>
                            <option value="france">🇫🇷 EUR</option>
                            <option value="belgique">🇧🇪 EUR</option>
                            <option value="usa">🇺🇲 USD</option>
                            <option value="ci">🇨🇮 FR</option>
                            <option value="south_africa">🇿🇦 RAND</option>
                        </select>
                    </form>
                </div>
                <div>
                    <img src="" alt=""/>
                    <h2>Nos Conseil vous donne la banane</h2>
                </div>
            </Header>
        )
    }
}

export default Intro