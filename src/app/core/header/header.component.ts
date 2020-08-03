import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../auth/model/user';
import { UserService } from '../../auth/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;
  /**
   * Em header.component.html temos o assync pipe (user$ | async)
   * ele seta o valor do observable user$ sem a necessidade de um subscribe
   */
   
  constructor(private userService: UserService,
    private router:Router) { 
    this.user$ = userService.getUser();
  }
  
  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }
  ngOnInit(): void {
  }

}
