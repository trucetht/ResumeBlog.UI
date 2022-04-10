import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'blog-navbar',
  templateUrl: './blog-navbar.component.html',
  styleUrls: ['./blog-navbar.component.css']
})
export class BlogNavbarComponent implements OnInit {

  constructor() { }

  items: MenuItem[] = [];

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home'
      },
      {
        label: 'Resume'
      },
      {
        label: 'Hire Me'
      }
    ]
  }

}
