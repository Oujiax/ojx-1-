import React, { Component } from 'react'
import {connect} from "react-redux"
import state from "../store"

const add=(num)=>{    
    return{
        type:"ADD",
        step:num
    }
}
class Test5 extends Component {
    constructor(props){
        super(props)
        this.state={
            num:0
        }
    }
    addClick(){              
        this.props.add(15)
    }
    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
                <button onClick={this.addClick.bind(this)}>add</button>
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        count:state.count
    }
        
}
const mapDispatchToProps = (dispatch) =>{
    return{
        add:(num) => dispatch(add(num))
    }     
}
export default connect(mapStateToProps,mapDispatchToProps)(Test5)