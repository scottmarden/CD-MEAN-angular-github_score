import { Component } from '@angular/core';
import { GithubApiService } from './github-api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'Github Score';

	constructor(){}

}
