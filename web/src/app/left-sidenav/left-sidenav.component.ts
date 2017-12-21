import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-sidenav',
  templateUrl: './left-sidenav.component.html',
  styleUrls: ['./left-sidenav.component.css']
})
export class LeftSidenavComponent implements OnInit {
  podcasts = [
    {
      name: 'The Daily',
      Author: 'The NYT',
      details: 'Podcast blah',
    },
    {
      name: 'The Monday Morning Podcast',
      Author: 'Bill Murr',
      details: 'Podcast blah',
    },
  ];
  selectedPodcast = this.podcasts[0];
  constructor() { }

  ngOnInit() {
  }

}
