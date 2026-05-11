import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Time } from '../../models/time.model';


@Injectable({ providedIn: 'root' }) // Standalone por padrão
export class TimeService {
  private readonly API = 'http://localhost:3000/times';

  constructor(private http: HttpClient) {}

  listar() { return this.http.get<Time[]>(this.API); }
  criar(time: Partial<Time>) { return this.http.post<Time>(this.API, time); }
  registrarVitoria(id: number) { return this.http.patch(`${this.API}/${id}/vitoria`, {}); }
  excluir(id: number) { return this.http.delete(`${this.API}/${id}`); }
}