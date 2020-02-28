import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _rest: RestService, private _router: Router) { }

  ngOnInit() {
  }

  login(email: string, password: string) {
    this._rest.executeGet('/login',
      [{ key: 'Authorization', value: `Basic ${btoa(email + ':' + password)}`}]).subscribe(() => {
        this._router.navigate(['/boards']);
      });
  }

}
