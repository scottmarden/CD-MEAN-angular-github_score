import { Component, OnInit } from '@angular/core';
import { GithubApiService } from '.././github-api.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
	data: any = {
		username: "",
	}
	userScore: number = null;
	user: any = null;
	error: any = null;
	constructor(private _githubApiService: GithubApiService) {}

	runSearch(username){
		event.preventDefault();
		this._githubApiService.getUser(username)
		.then( (user) => {
			this.user = user;
			this.error = null;
			this.userScore = user.public_repos + user.followers

		 })
		.catch( (err) => {
			this.error = err;
			this.user = null;
		})
	}

	ngOnInit() {
	}

}
