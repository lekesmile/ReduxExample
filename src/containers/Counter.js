import React, { Component } from 'react'

class Counter extends Component {
    state = {
        number: 0
    }

    addOne = () => {
        this.setState({
            number: this.state.number + 1
        })
    }


    minusOne = () => {
        if(this.state.number > 0){
            this.setState({
            number: this.state.number - 1
        
        })
        }
        
    }

    addfive = () => {
        this.setState({
            number: this.state.number + 5
        })
    }
    
    minusfive = () => {
        if (this.state.number > 0){
            this.setState({
            number: this.state.number - 5
        }) 
        }
       
    }

    render() {
        return (
            <div>

                <p>{this.state.number}</p>
                <div>
                    <button onClick={this.addOne}>Increase by 1</button>
                    <button onClick={this.minusOne}>Decrease by 1</button>
                    <button onClick={this.addfive}>Increase by 5</button>
                    <button onClick={this.minusfive}>Decrease by 5</button>
                </div>


            </div>
        )
    }
}



export default Counter