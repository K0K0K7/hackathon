import { Injectable } from '@angular/core';
import { RestService } from '../rest/rest.service';

@Injectable()
export class ListService {

  constructor(private _rest: RestService) { }

  createList(board: string, name: string) {
    return this._rest.executePost(`/api/v1/lists`, { board, name });
  }

}
