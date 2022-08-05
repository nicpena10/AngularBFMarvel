import { Component, OnInit,Input  } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersApiService } from '../shared/characters-api.service';
@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  @Input() characterid: any;
  panelOpenState = false;
  constructor(private charactarsvc: CharactersApiService) { }
  allcomics!:Observable<any>;
  ngOnInit(): void {
    this.getcomics();
  }
  
  getcomics(){
    this.allcomics= this.charactarsvc.getcomicsbyUserId(this.characterid);
  }
  
}
