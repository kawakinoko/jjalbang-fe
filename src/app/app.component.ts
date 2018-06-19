import { Component } from '@angular/core';
import { UserinfoService } from './auth/userinfo.service';
import { UserInfo } from './share/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  userInfo: UserInfo = null;
  constructor(private userinfoService: UserinfoService) {
    this.userinfoService.getUserInfo().subscribe((userInfo: UserInfo) => {
      this.userInfo = userInfo;
    });
  }
}
