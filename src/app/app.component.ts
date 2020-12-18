import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { League } from './interfaces/league';
import { FdjService } from './services/fdj.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fdj-sports';
  baseUrl= '"/"';

  typeahead: FormControl = new FormControl();
  leagues: League[] = [];
  leagues$: Observable<League[]>;
  leagueSelected: League;

  constructor(private fdjService: FdjService, private router: Router) {
    // this.leagues$ = this.fdjService.getLeagues();    
  }

  ngOnInit() {
    this.getLeagues();
  }

  getLeagues() {
    this.fdjService.getLeagues().subscribe(leagues=> {
      this.leagues = leagues;
    })
  }


  onSelect(event) {
    if (event && event.item) {
      const leagueId = event.item._id;
      this.router.navigate([`/leagues/${leagueId}`]);
    }
  }

}
