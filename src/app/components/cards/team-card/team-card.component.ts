import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.scss']
})
export class TeamCardComponent implements OnInit {

  @Input() name: String;
  @Input() thumbnail: String;
  
  constructor() { }

  ngOnInit(): void {
  }

}
