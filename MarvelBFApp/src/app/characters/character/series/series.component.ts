import { Component, OnInit,Input  } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersApiService } from '../shared/characters-api.service';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  @Input() characterid: any;
  constructor(private charactarsvc: CharactersApiService) { }
  allseries!:Observable<any>;
  ngOnInit(): void {
    this.getseries();
  }
  
  getseries(){
    this.allseries= this.charactarsvc.getSeriesbyUserId(this.characterid);
  }

}
