import { Agenda } from './agenda.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar} from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  baseUrl = "http://localhost:8080/agendas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
}

  create(agenda: Agenda): Observable<Agenda>{
    return this.http.post<Agenda>(this.baseUrl, agenda)
  }

  read(): Observable<Agenda[]>{
    return this.http.get<Agenda[]>(this.baseUrl)
  }

  readById(id:any): Observable<Agenda> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Agenda>(url)
  }

  update(agenda: Agenda): Observable<Agenda>{
    const url = `${this.baseUrl}/${agenda.id}`
    return this.http.put<Agenda>(url, agenda)
  }

  delete(agenda: Agenda): Observable<Agenda>{
    const url = `${this.baseUrl}/${agenda.id}`
     return this.http.delete<Agenda>(url)
  }

}
