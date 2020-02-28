import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/Rx';

const serverURL = 'http://localhost:3000';

@Injectable()
export class RestService {
  constructor(private _http: Http) { }

  executeGet(url: string, headers?: { key: string, value: string }[]) {
    const header = new Headers();
    if (headers) {
      headers.forEach((h) => header.append(h.key, h.value));
    }

    return this._http.get(serverURL + url, { headers: header })
      .map(this.extractData)
      .catch(this.handleError);
  }

  executePost(url: string, data: object) {
    return this._http.post(serverURL + url, data)
      .map(this.extractData)
      .catch(this.handleError);
  }

  extractData(res: Response) {
    return res.json();
  }

  handleError(error: any) {
    return Observable.throw(error);
  }

}
