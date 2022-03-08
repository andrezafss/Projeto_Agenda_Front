import { AgendaDeleteComponent } from './components/agenda/agenda-delete/agenda-delete.component';
import { AgendaUpdateComponent } from './components/agenda/agenda-update/agenda-update.component';
import { AgendaCreateComponent } from './components/agenda/agenda-create/agenda-create.component';
import { AgendaCrudComponent } from './views/agenda-crud/agenda-crud.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "agendas",
    component: AgendaCrudComponent
  },
  {
    path:"agendas-create",
    component: AgendaCreateComponent
  },
  {
    path:"agendas/update/:id",
    component: AgendaUpdateComponent
  },
  {
    path:"agendas/delete/:id",
    component: AgendaDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
