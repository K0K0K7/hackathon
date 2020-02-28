import { Injectable } from '@angular/core';
import { RestService } from '../rest/rest.service';

@Injectable()
export class BoardService {

  constructor(private _rest: RestService) { }

  getBoards() {
    return this._rest.executeGet('/api/v1/boards');
  }

  getBoardDetails(id: string) {
    return this._rest.executeGet(`/api/v1/boards/${id}`);
  }

  createBoard(name: string) {
    return this._rest.executePost(`/api/v1/boards/`, { name });
  }

}
