import React, {Component} from 'react';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import QuickView from './QuickView';
import '../App.css';
import helpers from '../utils/helpers'

class Project extends Component {
  constructor(props){
    super(props);
    // Here we set a generic state associated with the number of clicks
    this.state = {projects:[]};
  }
  componentDidMount(){
  	// console.log ('PROJECTS', )
  	let userProjectsArr = helpers.getUserProjects()
  	this.setState({projects:userProjectsArr})

  	helpers.getProjectIncentives(1)
  }
	render() {
		return (
			<div id="ProjectDiv">
				<h3 className="pl">Project List</h3>				
				<ListGroup>
	        {this.state.projects.map(function(project) {
	           return (<ListGroupItem>{project.project_name} 
	           				    	<QuickView data={project}/>
	           				    </ListGroupItem>);
	        })}
				</ListGroup>
			</div>
		)
	}
}


export default Project;