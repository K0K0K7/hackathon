import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardListComponent } from '../board-list/board-list.component';
import { BoardComponent } from '../board/board.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  { path: 'boards/:id', component: BoardComponent },
  { path: 'boards', component: BoardListComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class BaseRouterModule { }
