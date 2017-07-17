import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable()
export class GithubApiService {

	constructor(private _http: Http) { }

	getUser(username) {
		let search = "https://api.github.com/users/" + username
		console.log(search)
		return this._http.get(search).map(data => data.json()).toPromise()
	}
}
