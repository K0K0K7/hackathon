import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from './board.service';
import { DialogService } from '../dialogs/dialog/dialog.service';
import { ListService } from '../list/list.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  id: string;
  board;

  constructor(private _activatedRoute: ActivatedRoute, private _board: BoardService,
    private _dialog: DialogService, private _list: ListService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.loadBoardDetails();
    });
  }

  loadBoardDetails() {
    this._board.getBoardDetails(this.id).subscribe((data) => this.board = data && console.log(data));
  }

  createList() {
    this._dialog.openPrompt('Create new Board', 'Please enter the title for your new Board:')
    .subscribe((name) => {
      if (name) {
        this._list.createList(this.id, name).subscribe(() => this.loadBoardDetails());
      }
    });
  }
}
