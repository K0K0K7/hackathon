import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoardService } from '../board/board.service';
import { DialogService } from '../dialogs/dialog/dialog.service';

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrls: ['./board-list.component.scss']
})
export class BoardListComponent implements OnInit {

  boards;

  constructor(private _router: Router, private _board: BoardService, private _dialog: DialogService) { }

  ngOnInit() {
    this.loadBoards();
  }

  loadBoards() {
    this._board.getBoards().subscribe((data) => this.boards = data);
  }

  boardClicked(board) {
    this._router.navigate(['boards', board._id]);
  }

  createBoard() {
    this._dialog.openPrompt('Create new Board', 'Please enter the title for your new Board:')
      .subscribe((name) => {
        if (name) {
          this._board.createBoard(name).subscribe(() => this.loadBoards());
        }
      });
  }

}
