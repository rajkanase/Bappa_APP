import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isTrue:String="nav navbar-nav nav-collapse slide-down collapse";
  isSearch:string="nav navbar-nav nav-collapse slide-down collapse";

  constructor() { }

  ngOnInit() {
  }

  onButton(){
    this.isTrue="nav navbar-nav nav-collapse slide-down collapse in";
  }

  onSearch(){
    this.isSearch="nav navbar-nav nav-collapse slide-down collapse in";
  }

}
