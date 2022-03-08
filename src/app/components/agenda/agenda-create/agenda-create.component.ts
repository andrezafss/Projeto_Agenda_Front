import { Agenda } from '../agenda.model';
import { AgendaService } from '../agenda.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-agenda-create',
  templateUrl: './agenda-create.component.html',
  styleUrls: ['./agenda-create.component.css']
})
export class AgendaCreateComponent implements OnInit {


  agenda: Agenda = {
    tarefa: '',
    data: '',
    hora: ''
  }


  constructor(private agendaService: AgendaService,
              private router: Router  ) { }

  ngOnInit(): void {
    
  }

  createAgenda(): void{
    this.agendaService.create(this.agenda).subscribe(()=>{
      this.agendaService.showMessage('Tarefa Adicionada com sucesso!')
      this.router.navigate(['/agendas'])

    })
    
  }
  
  cancel(): void{
    this.router.navigate(['/agendas'])
  }

}
