App = React.createClass({
//To get meteor data ("tasks")
mixins: [ReactMeteorData],

getMeteorData(){
  return {
    tasks: Tasks.find({}, {sort: {createdAt: -1}}).fetch()
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
  
  Tasks.insert({
    text: text,
    createdAt: new Date(),
    checked: false
  });
  
    React.findDOMNode(this.refs.textInput).value = "";
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
           <form className="new-task" onSubmit={this.handleSubmit}>
          <input type="text" ref="textInput" placeholder="Input new task"/>
        </form>
        </header>       
        <ul>
           {this.renderTasks()}
        </ul>
      </div>
    );
  }
});

