import { Component, Input, OnInit } from '@angular/core';
import { UserInfo } from '../share/user.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input()
  user: UserInfo;

  showUserInfo = false;

  constructor() { }

  ngOnInit() {
  }

  openGithub() {
    window.open('https://github.com/kawakinoko/jjalbang-fe');
  }

  openLogin() {
    window.open('/login/oauth2/code/google');
  }

  toggleUserInfo() {
    this.showUserInfo = !this.showUserInfo;
  }
}
