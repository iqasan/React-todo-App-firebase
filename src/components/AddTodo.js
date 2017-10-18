import React from "react"
import $ from "jquery"

class AddTodo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            input: ''
        }
    }
    handleChange(ev){
        this.setState({
            input: ev.target.value
        })
    }
    handleAdd(){
        if($.trim(this.state.input).replace(/ /g,'')){
            this.props.handleAdd($.trim(this.state.input))
        }else{
            $('#NewTodo').focus()
        }
        this.setState({
            input: ' '
        })
    }
    handleKey(ev){
        if(ev.charCode === 13){
            (this.handleAdd.bind(this))()
        }
    }
    render(){
        return(
            <div className="row" style={{display:"flex",justifyContent:"center",padding:60}}>
                <input type="text" id ="NewTodo" onKeyPress={this.handleKey.bind(this)} value={this.state.input} onChange={this.handleChange.bind(this)} className=" col-xs-6" />
             <button className="btn btn-outline-primary"  onClick={this.handleAdd.bind(this)}>Add Todo </button>
            </div>
        )
    }
}
export default AddTodo;