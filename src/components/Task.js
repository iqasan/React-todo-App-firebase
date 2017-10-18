import React from 'react'
import $ from "jquery"

class Task extends React.Component {
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this)
    }
    handleEdit(ind,ev){
        console.log(ind, ev)
    }
    render(){
        var todos = this.props.todos;
        return(
            <div>
                <ul className="todoTask">
                {todos.length>0?
                    todos.map((todo,ind)=>(
                        <li classNAme="clearfix row" key={ind.toString()}>
                            <div className="col-xs-4">
                             <span className="index">{ind+1}).</span>
                             <input type="checkbox" name="" checked={todo.done} onChange={()=>{this.props.handleChaked(ind)}} />
                             <span contentEditable onKeyPress={
                                 ev=>{
                                     if(ev.charCode === 13){
                                         ev.preventDefault()
                                         ev.target.blur()
                                     }
                                 }
                             } onBlur={(ev)=>{
                                 console.log($.trim(ev.target.innexText).replace(/ /g,''))
                                 if($.trim(ev.target.innerText).replace(/ /g,'')){
                                     console.log()
                                     this.props.handleEdit(ind, $.trim(ev.target.innerText))
                                 }else{
                                     alert("Plz Fill the Box Edit Empty is not Permitted")
                                     ev.target.innerText = todo.text;
                                }
                             }} style={{textDecoration:todo.done?"line-through":"none", opacity:todo.done?0.3:1}}
                             id={"item"+ind+"Lable"}
                             >{todo.text}</span>
                     </div>
                     <div className="col-xs-4">
                     <div style={{width:"100%"}}>
                        <div className="btn btn-danger pull-right" onClick={this.props.remove.bind(null,ind)}>Delete</div>
                        <div className="btn btn-info pull-right" onClick={()=>{$("#item"+ind+"Lable").focus()}}>Edit</div>
                    </div>
                </div>
            </li>
             ))
            :
    this.props.response?
            <h1 className="text-center">No Item In Todo</h1>
            :
            <h1 className="text-center">Loading....</h1>    
    }
    </ul>
</div>
        )
    }
}
export default Task;