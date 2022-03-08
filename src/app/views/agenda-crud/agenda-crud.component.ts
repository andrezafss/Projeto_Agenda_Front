import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agenda-crud',
  templateUrl: './agenda-crud.component.html',
  styleUrls: ['./agenda-crud.component.css']
})
export class AgendaCrudComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToAgendaCreate(): void{
    this.router.navigate(['/agendas-create'])
  }

}
