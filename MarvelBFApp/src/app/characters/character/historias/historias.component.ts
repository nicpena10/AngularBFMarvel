import { Component, OnInit,Input  } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersApiService } from '../shared/characters-api.service';
@Component({
  selector: 'app-historias',
  templateUrl: './historias.component.html',
  styleUrls: ['./historias.component.css']
})
export class HistoriasComponent implements OnInit {
  @Input() characterid: any;
  constructor(private charactarsvc: CharactersApiService) { }
  allhistoria!:Observable<any>;
  ngOnInit(): void {
    this.gethistoria();
  }
  gethistoria(){
    this.allhistoria= this.charactarsvc.getHistoriabyUserId(this.characterid);
  }
}

  