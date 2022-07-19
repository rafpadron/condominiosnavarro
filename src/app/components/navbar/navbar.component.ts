import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(public breakpointObserver:BreakpointObserver) {}
  hideMenu = true;
  ngOnInit(){
    this.breakpointObserver
    .observe(['(max-width: 1080px)'])
    .subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.hideMenu = false;
      } else {
        this.hideMenu = true;
      }
    });
  }
}
