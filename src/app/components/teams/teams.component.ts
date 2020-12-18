import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from 'src/app/interfaces/team';
import { FdjService } from 'src/app/services/fdj.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public leagueId;
  public teams: Team[] = [];

  constructor(private route: ActivatedRoute,private fdjService: FdjService, private router: Router) { 
    this.route.params.subscribe(params => {
      console.log(params);
      this.leagueId = params['id'];
      this.getTeams();
    });
  }

  ngOnInit(): void {
  }

  getTeams() {
    this.fdjService.getTeams(this.leagueId).subscribe(teams=> {
      this.teams = teams;
      console.log(this.teams);
    })
  }

  onSelect(event) {
    if (event && event._id) {
      const teamId = event._id;
      this.router.navigate([`/leagues/${teamId}`]);
    }
  }

}
