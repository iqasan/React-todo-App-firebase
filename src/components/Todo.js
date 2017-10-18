import React from 'react';
import AddTodo from "./AddTodo";
import Task from './Task';
import   * as firebase from 'firebase';

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            todos: [],
            res: false
        }
    }
    componentWillMount(){
        var dbRef = firebase.database().ref().child('react');
        const stateRef = dbRef.child('state');
        stateRef.on('value', state=>{
            this.setState({res: true})
            console.log(state.val())
            this.setState(state.val())
        },err=>{console.log(err)})
        }
        handleAdd(text){
            var newTodo = [...this.state.todos,{text:text,done:false}];
            this.setState({
                todos: newTodo
            })
           // this.saveToFirebase({...this.state,todos:newTodo})
            this.saveToFirebase(Object.assign({}, this.state ,{todos: newTodo}))
        }
    
        removeTodo(index){
            var newTodo = [...this.state.todos];
            newTodo.splice(index,1)
            this.setState({
                todos: newTodo
            })
            //this.saveToFirebase({...this.state,todos:newTodo})
            this.saveToFirebase(Object.assign({},this.state,{todos: newTodo}))
        }
        saveToFirebase(data) {
            var dbRef = firebase.database().ref().child('react');
            console.log(this.state)
            dbRef.child('state').set(data)
          }
          handleChaked(ind){
              var newTodo = [...this.state.todos];
              newTodo[ind].done = !newTodo[ind].done;
              this.setState({
                  todos: newTodo
              });
            //this.saveToFirebase({...this.state,todos:newTodo})
              this.saveToFirebase(Object.assign({},this.state,{todos: newTodo}))
          }
          handleEdit(ind,text){
              var newTodo = [...this.state.todos];
              newTodo[ind].text = text;
              this.setState({
                  todos: newTodo
              })
             //this.saveToFirebase({...this.state,todos:newTodo})
               this.saveToFirebase(Object.assign({},this.state,{todos: newTodo}))
          }

          render() {
              return (
                  <div>
                     <h1 className="head" > React Todo APP</h1>
                     <p className="head">(With FIREBASE) </p>
                     <AddTodo handleAdd={this.handleAdd.bind(this)}></AddTodo>
                     <Task handleEdit={this.handleEdit.bind(this)} response ={this.state.res} todos={this.state.todos} handleChaked={this.handleChaked.bind(this)} remove={this.removeTodo.bind(this)} ></Task>
                  </div>
              )
          }
}
export default Todo;
