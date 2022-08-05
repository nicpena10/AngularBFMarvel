import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CharactersComponent} from  './characters/characters.component';
import { FiltrosComponent } from './components/filtros/filtros.component';
import { NavbarComponent } from './navbar/navbar.component';
const routes: Routes = [
  { path:'',redirectTo:'/characters',pathMatch:'full' },
  { path:'home',redirectTo:'/characters',pathMatch:'full' },
 { path:'characters',component:CharactersComponent },
 { path:'busqueda',component:FiltrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
