import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Movies {

  constructor(public http: Http) {
    console.log('Hello Movies Provider');
  }

  searchMovies(movieName): Promise<any> {
    var url = 'http://api.themoviedb.org/3/search/movie?query=' + encodeURI(movieName) + '&api_key=5fbddf6b517048e25bc3ac1bbeafb919';
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  list(): Promise<any> {
    let url = 'https://api.themoviedb.org/4/list/1?page=1&api_key=5fbddf6b517048e25bc3ac1bbeafb919';

    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
