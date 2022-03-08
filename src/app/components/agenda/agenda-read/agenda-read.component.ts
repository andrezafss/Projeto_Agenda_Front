import { AgendaService } from '../agenda.service';
import { Agenda } from '../agenda.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-agenda-read',
  templateUrl: './agenda-read.component.html',
  styleUrls: ['./agenda-read.component.css']
})
export class AgendaReadComponent implements OnInit {

  agendas: Agenda[] = []; 
  displayedColumns = ['id', 'tarefa', 'data', 'hora', 'action']
  


  constructor(private agendaService: AgendaService) { }

  ngOnInit(): void {
    this.agendaService.read().subscribe(agendas => {
      this.agendas = agendas
      console.log(agendas)
    })
  }

}
