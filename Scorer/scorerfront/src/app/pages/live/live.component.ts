import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatchCardComponent } from '../../components/match-card/match-card.component';
import { ApiCallService } from '../../services/api-call.service';

@Component({
  selector: 'app-live',
  standalone: true,
  imports: [CommonModule, MatchCardComponent],
  templateUrl: './live.component.html',
  styleUrl: './live.component.css'
})
export class LiveComponent implements OnInit, OnDestroy {
  constructor(private api: ApiCallService) { }

  liveMatches: any
  intervalId: any

  ngOnInit(): void {
    this.loadLiveMatches();
  }

  private loadLiveMatches() {
    this.api.getLiveMatches().subscribe({
      next: data => {
        this.liveMatches = data
      },
      error: error => {
        console.log(error);
      }
    });
  }

  isDisabled: boolean = false
  buttonColor='darkblue'
  inetervalId: any
  liveMatchesAutoRefresh() {
    this.isDisabled = true
    this.buttonColor='rgb(96 165 250)'
    this.inetervalId = setInterval(() => {
      this.loadLiveMatches();
    }, 5000);
  }

  liveMatchesRefreshOnce() {
    this.loadLiveMatches();
  }

  ngOnDestroy(): void {
    clearInterval(this.inetervalId)
    this.isDisabled=false
    this.buttonColor='darkblue'
  }

}
