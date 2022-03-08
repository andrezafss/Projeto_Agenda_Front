import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../agenda.service';
import { Component, OnInit } from '@angular/core';
import { Agenda } from '../agenda.model';

@Component({
  selector: 'app-agenda-update',
  templateUrl: './agenda-update.component.html',
  styleUrls: ['./agenda-update.component.css']
})
export class AgendaUpdateComponent implements OnInit {
  
  agenda!: Agenda;

  constructor(private agendaService: AgendaService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.agendaService.readById(id).subscribe(agenda =>{
      this.agenda = agenda
    })
  }

  updateAgenda(): void{
    this.agendaService.update(this.agenda).subscribe(() => {
      this.agendaService.showMessage('Tarefa atualizada com sucesso!')
      this.router.navigate(['/agendas'])
    })

  }

  cancel(): void{
    this.router.navigate(['/agendas'])

  }

}
