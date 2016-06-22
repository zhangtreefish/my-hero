import { Component, Input } from '@angular/core';
import { Project } from './project';

@Component({
	selector: 'details',
	templateUrl: 'app/project.component.html',
	styleUrls: ['app/project.component.css']
})
export class ProjectComponent {
	@Input()
	project: Project;
};
	// constructor(appComponent: AppComponent) {
	// 	this.project = appComponent.selectedProject;
	// }