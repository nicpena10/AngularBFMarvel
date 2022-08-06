import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators  } from '@angular/forms';
import { Observable,map } from 'rxjs';
import { CharactersApiService } from 'src/app/characters/character/shared/characters-api.service';
import { ViewChild, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'filtroForm',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css']
})
export class FiltrosComponent implements OnInit {
  @ViewChild('errordialog') errordialog!: TemplateRef<any>;
  createFormGroup(){
    return new FormGroup({
      Nombre: new FormControl('',[Validators.required]),
      Iniciales: new FormControl('',[Validators.required])
      

    })
  }

  filtroform!: FormGroup;
  constructor(private charactarsvc: CharactersApiService,private dialog: MatDialog) { 
    this.filtroform = this.createFormGroup();

    
  }
  allcharacters!: Observable<any>;
  ngOnInit(): void {
   
  }
  public hasError = (controlName: string, errorName: string) =>{
    
     // return this.filtroform.controls[controlName].hasError(errorName);
    
  }
  public validabuscar = () => {
    if((this.filtroform.value.Nombre).trim() !='' || (this.filtroform.value.Iniciales).trim() !=''){
      this.getCharcterbyname();
    }else{
      console.log('errro');
      this.dialog.open(this.errordialog);
      
    }
    // if (this.filtroform.valid) {
      
    // }
  }
  getCharcterbyname(){
    let filtroenviado='';
    console.log(this.filtroform.value);
    if((this.filtroform.value.Nombre).trim() !=''){
      if(filtroenviado ==''){
        filtroenviado=`name=${(this.filtroform.value.Nombre).trim()}`;
      }else{
        filtroenviado=filtroenviado + `name=${(this.filtroform.value.Nombre).trim()}`;
      }
      
    
    }
    if((this.filtroform.value.Iniciales).trim() !=''){
      if(filtroenviado ==''){
        filtroenviado=`&nameStartsWith=${(this.filtroform.value.Iniciales).trim()}`;
      }else{
        filtroenviado=filtroenviado + `&nameStartsWith=${(this.filtroform.value.Iniciales).trim()}`;
      }
      
    
    }
    // if(this.filtroform.value.Comic !=''){
    //   if(filtroenviado ==''){
    //     filtroenviado=`&comics=${this.filtroform.value.Comic}`;
    //   }else{
    //     filtroenviado=filtroenviado + `&comics=${this.filtroform.value.Comic}`;
    //   }
      
    
    // }
    // if(this.filtroform.value.Series !=''){
    //   if(filtroenviado ==''){
    //     filtroenviado=`&series=${this.filtroform.value.Series}`;
    //   }else{
    //     filtroenviado=filtroenviado + `&series=${this.filtroform.value.Series}`;
    //   }
     
    
    // }
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
