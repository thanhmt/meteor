App = React.createClass({
//To get meteor data ("tasks")
mixins: [ReactMeteorData],
getInitialState() {
        return {
          hideCompleted: false
        }
},
getMeteorData(){
  let query = {};     
  if (this.state.hideCompleted) {
    // If hide completed is checked, filter tasks
    query = {checked: {$ne: true}};
  }
  return {
    tasks: Tasks.find(query, {sort: {createdAt: -1}}).fetch(),
    incompleteCount: Tasks.find({checked: {$ne: true}}).count()
  }
},
//Get data
renderTasks(){
    return this.data.tasks.map((task) => {
    return <Task key={task.id} task={task} />;
  });
},

//Create task using declaration
getTasks(){
  return [
	 {id:1, text: "Task 1"},
	 {id:2, text: "Task 2"},
	 {id:3, text: "Task 3"}
    ]
  },
  //Handle submit
handleSubmit(event){
  event.preventDefault();
  var text = React.findDOMNode(this.refs.textInput).value.trim();
  console.log(text);
  if(text != "") {
      Tasks.insert({
        text: text,
        createdAt: new Date(),
        checked: false
      });  
      React.findDOMNode(this.refs.textInput).value = "";
    } 
},
toggleHideCompleted() {
        this.setState({
          hideCompleted: ! this.state.hideCompleted
        });
},
validate(){
  var text = React.findDOMNode(this.refs.textInput).value.trim();
   if(text == "") {
     React.findDOMNode(this.refs.textInput).className = "invalid";
   }else{
     React.findDOMNode(this.refs.textInput).className = "";
   }  
},
//Set output format for getTask()
 // renderTasks(){
   // return this.getTasks().map((task) => {
    //return <Task key={task.id} task={task} />;
  //});
//},
//Render page and display task calling renderTasks()
  render(){
    return (
      <div className="container">
        <header>
          <h1>Todo list</h1>
          <h3>({this.data.incompleteCount})</h3>
          <label className="hide-completed">
                <input
                  type="checkbox"
                  readOnly={true}
                  checked={this.state.hideCompleted}
                  onClick={this.toggleHideCompleted} />
                Hide Completed Tasks
          </label>
          <form className="new-task" onSubmit={this.handleSubmit}>
          <input type="text" ref="textInput" placeholder="Input new task" onChange={this.validate}/>
        </form>
        </header>       
        <ul>
           {this.renderTasks()}
        </ul>
      </div>
    );
  }
});

