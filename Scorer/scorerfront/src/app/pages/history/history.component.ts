import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { MatchCardComponent } from '../../components/match-card/match-card.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatchCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{
  constructor(private api:ApiCallService) {}
  allMatches:any
  ngOnInit(): void {
    this.loadAllMatches();
  }

  private loadAllMatches() {
    this.api.getAllMatches().subscribe({
      next: data => {
        this.allMatches=data
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
