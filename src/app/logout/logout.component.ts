import { Component, OnInit } from '@angular/core';
import { HardcodedAuthenticationServiceService } from '../service/hardcoded-authentication-service.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private service:HardcodedAuthenticationServiceService) { }

  ngOnInit(): void {
    this.service.logOut();
  }

}
