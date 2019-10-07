/* eslint-disable default-case */
import React, { Component } from 'react'
import {connect} from 'react-redux'

class Anotherway extends Component {

    // state = {
    //     number : 0
    // }

    // counterChangerHandler = (action, value) =>{
    //     switch (action) {

    //         case 'inc':
    //             this.setState((prevState) => { return {number : prevState.number + 1 }})
    //             break;

    //         case 'dec':
    //             this.setState((prevState) => { return { number: prevState.number - 1 } })
    //             break;

    //         case 'add':
    //             this.setState((prevState) => { return { number: prevState.number + value } })
    //             break;

    //         case 'sub':
    //             this.setState((prevState) => { return { number: prevState.number - value } })
    //             break;
    //     }

    // }
    render() {
        return (
            
            <div>

                <p>{this.props.num}</p>
                <div>
                    <button onClick={this.props.onIncCounter}>Increase by 1</button>
                    <button onClick={this.props.onDecCounter}>Decrease by 1</button>
                    <button onClick={this.props.onAddfive}>Increase by 5</button>
                    <button onClick={this.props.onSubfive}>Decrease by 5</button>
                </div>


            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        num: state.number
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onIncCounter :() => dispatch({type: 'INCREMENT'}),
        onDecCounter: () => dispatch({ type: 'DECREMENT' }),
        onAddfive: () => dispatch({ type: 'ADD' }),
        onSubfive: () => dispatch({ type: 'SUB' }),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Anotherway)