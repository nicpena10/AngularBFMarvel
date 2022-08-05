import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() character: any;
  panelOpenState = false;
  panelOpenState2 = false;
  panelOpenState3 = false
  constructor() { }

  ngOnInit(): void {
  }

}
