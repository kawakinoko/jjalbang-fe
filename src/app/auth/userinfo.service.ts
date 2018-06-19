import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../share/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserinfoService {
  constructor(private http: HttpClient) { }

  public getUserInfo(): Observable<UserInfo> {
    return this.http.get<UserInfo>('/userinfo');
  }
}
