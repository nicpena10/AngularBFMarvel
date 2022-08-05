import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Observable,map } from 'rxjs';
import { CharactersApiService } from 'src/app/characters/character/shared/characters-api.service';
//import { ConsumepersonajeApiService } from 'src/app/characters/character/consumepersonaje-api.service';
@Component({
  selector: 'filtroForm',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  createFormGroup(){
    return new FormGroup({
      Nombre: new FormControl(''),
      Iniciales: new FormControl(''),
      Series: new FormControl(''),
      Comic: new FormControl('')

    })
  }

  filtroform!: FormGroup;
  constructor(private charactarsvc: CharactersApiService) { 
    this.filtroform = this.createFormGroup();

    
  }
  allcharacters!: Observable<any>;
  ngOnInit(): void {
   
  }
  
  getCharcterbyname(){
    let filtroenviado='';
    console.log(this.filtroform.value);
    if(this.filtroform.value.Nombre !=''){
      if(filtroenviado ==''){
        filtroenviado=`name=${this.filtroform.value.Nombre}`;
      }else{
        filtroenviado=filtroenviado + `name=${this.filtroform.value.Nombre}`;
      }
      
    
    }
    if(this.filtroform.value.Iniciales !=''){
      if(filtroenviado ==''){
        filtroenviado=`&nameStartsWith=${this.filtroform.value.Iniciales}`;
      }else{
        filtroenviado=filtroenviado + `&nameStartsWith=${this.filtroform.value.Iniciales}`;
      }
      
    
    }
    if(this.filtroform.value.Comic !=''){
      if(filtroenviado ==''){
        filtroenviado=`&comics=${this.filtroform.value.Comic}`;
      }else{
        filtroenviado=filtroenviado + `&comics=${this.filtroform.value.Comic}`;
      }
      
    
    }
    if(this.filtroform.value.Series !=''){
      if(filtroenviado ==''){
        filtroenviado=`&series=${this.filtroform.value.Series}`;
      }else{
        filtroenviado=filtroenviado + `&series=${this.filtroform.value.Series}`;
      }
     
    
    }
   // filtroenviado=`name=Abyss`;
   this.allcharacters=this.charactarsvc.getbyname(filtroenviado);
    
    //  this.charactarsvc.getbyname(filtroenviado).subscribe(data => {
    //   console.log(data);
    //   //console.log(data[0].comics);
    // });
    // this.charactarsvc.getHistoriabyUserId(1009149).subscribe(data => {
    //   console.log(data);
    //   //console.log(data[0].comics);
    // });
    //this.charactarsvc.getbyname().pipe(map((data :any) => console.log(data.data.results)))
    // console.log('this.allcharacters');
    // console.log(this.allcharacters);
  }
}
