import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CharactersApiService } from './character/shared/characters-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  filterpost= '';
  constructor(private charactarsvc: CharactersApiService) { 
   
  }
  allcharacters!: Observable<any>;
  // p!: Observable<any>;

  ngOnInit(): void {
    this.getCharacters();
   // this.getCharcterbyname('as');
  }
  getCharacters(){
    this.allcharacters = this.charactarsvc.getTodos();
  }
 
}

