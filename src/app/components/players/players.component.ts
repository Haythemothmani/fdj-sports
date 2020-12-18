import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Player } from 'src/app/interfaces/player';
import { FdjService } from 'src/app/services/fdj.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  private teamId;
  public players: Player[] = [];

  constructor(private route: ActivatedRoute,private fdjService: FdjService, private _location: Location) { 
    this.route.params.subscribe(params => {
      this.teamId = params['id'];
      this.getPlayers();
    });
  }

  ngOnInit(): void {
  }

  getPlayers() {
    this.fdjService.getPlayers(this.teamId).subscribe(players=> {
      this.players = players;
      console.log(this.players);
    })
  }

  backClicked() {
    this._location.back();
  }

}
