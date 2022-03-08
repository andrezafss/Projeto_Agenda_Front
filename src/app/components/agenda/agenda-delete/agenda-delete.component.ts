import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../agenda.service';
import { Component, OnInit } from '@angular/core';
import { Agenda } from '../agenda.model';

@Component({
  selector: 'app-agenda-delete',
  templateUrl: './agenda-delete.component.html',
  styleUrls: ['./agenda-delete.component.css']
})
export class AgendaDeleteComponent implements OnInit {
 
  agenda!: any;
  

  constructor(private agendaService: AgendaService,
              private router: Router,
              private route: ActivatedRoute) { }

   ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.agendaService.readById(id).subscribe(agenda =>{
      this.agenda = agenda
    })
  }

  deleteAgenda(): void{
    this.agendaService.delete(this.agenda).subscribe(() => {
      this.agendaService.showMessage('Tarefa excluída com sucesso!')
      this.router.navigate(['/agendas'])

    })

  }

 
  cancel(): void{
    this.router.navigate(['/agendas'])

  }

}


