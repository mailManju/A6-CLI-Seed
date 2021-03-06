import { Component, OnInit } from '@angular/core';
import { SideMenu } from '../../models/side.menu';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  menus: SideMenu[];

  ngOnInit() {
    this.menus = [{
      title: 'sideNav.user',
      link: '/userlist'
    },
    {
      title: 'sideNav.cc',
      link: '/cclist'
    }];
   }

}

