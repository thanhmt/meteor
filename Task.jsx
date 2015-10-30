//Task component
Task = React.createClass({
	proTypes:{
	task: React.PropTypes.object.isRequired
	},
	
	toggleChecked(){
		Tasks.update(this.props.task.id, {
			$set: {checked: ! this.props.task.checked}		
		});
	},
	
	deleteTask(){
		Tasks.remove(this.props.task.id);
	},
	render(){	
	const taskClassName = this.props.task.checked ? "checked" :"";
		return (
		<li className={taskClassName}>
			<button className="delete" onClick={this.deleteTask}>
				&times;
			</button>
			<input 
			type="checkbox" 
			readOnly={true} 
			checked={this.props.task.checked}
			onClick={this.toggleChecked}/>
			
			<span className="text">{this.props.task.text}</span>
		</li>
		);
	}
});