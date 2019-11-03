import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  public openNav() {
    document.getElementById('mySidenav').style.width = '350px';
  }

  public closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }
}
