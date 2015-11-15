//Task component
Task = React.createClass({
	//mixins: [React.addons.LinkedStateMixin],
	proTypes:{
	task: React.PropTypes.object.isRequired
	},	
	getInitialState: function() {
    	return {value: this.props.task.text};
  	},
	handleChange: function(event) {
    	this.setState({value: event.target.value});
		Tasks.update(this.props.task._id, {
			$set: {text: event.target.value}		
		});
  	},
	toggleChecked(){
		Tasks.update(this.props.task._id, {
			$set: {checked: ! this.props.task.checked}		
		});
	},	
	updateTaskContent(){
		//console.log(event.target.value);		
		/*Tasks.update(this.props.task._id, {
			$set: {text: this.props.task.text}		
		});*/
	},	
	deleteTask(){
		Tasks.remove(this.props.task._id);
	},

	render(){	
	const taskClassName = this.props.task.checked ? "checked" :"";
	var value = this.props.task.text;
	return (	
		<li className={taskClassName}>
			<button className="delete" onClick={this.deleteTask}>
				&times;
			</button>
			<input 
			type="checkbox" 
			readOnly={true} 
			checked={this.props.task.checked}
			onClick={this.toggleChecked} />			
			<input 
			type="text"
			className="text" 
			value={value} 
			onChange={this.handleChange} />
		</li>
	);
	}
});