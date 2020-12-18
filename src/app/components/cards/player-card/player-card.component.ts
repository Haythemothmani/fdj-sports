import { Component, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/interfaces/player';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit {

  @Input() player: Player;
  url: string;
  constructor() { 
  }

  ngOnInit(): void {
    this.url = `url(${this.player.thumbnail})`
  }

}
