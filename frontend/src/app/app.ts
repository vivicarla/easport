import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Para usar *ngFor e [ngClass]
import { FormsModule } from '@angular/forms'; // Para usar [(ngModel)]
import { TimeService } from './services/time';
import { Time } from '../models/time.model';
import confetti from 'canvas-confetti'; // Importe os fogos


@Component({
  selector: 'app-root',
  standalone: true, // AQUI está a mágica
  imports: [CommonModule, FormsModule], // Importamos os módulos necessários aqui
  templateUrl: './app.html',
})
export class App implements OnInit {
  times: Time[] = [];
  novoTime = { nome: '', jogo: '' };

  constructor(private timesService: TimeService) {}

  ngOnInit() { this.atualizarLista(); }

  atualizarLista() {
    this.timesService.listar().subscribe(res => this.times = res);
  }

  adicionar() {
    this.timesService.criar(this.novoTime).subscribe(() => {
      this.atualizarLista();
      this.novoTime = { nome: '', jogo: '' };
    });
  }

vitoria(id: number) {
    this.timesService.registrarVitoria(id).subscribe(() => {
      this.atualizarLista();
      this.soltarFogos(); // Chama o efeito aqui!
    });
  }
soltarFogos() {
    const duracao = 3 * 1000; // 3 segundos
    const fim = Date.now() + duracao;

    const intervalo = setInterval(() => {
      const tempoRestante = fim - Date.now();

      if (tempoRestante <= 0) {
        return clearInterval(intervalo);
      }

      // Configuração estilo "Fireworks"
      confetti({
        particleCount: 50,
        startVelocity: 30,
        spread: 360,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#22d3ee', '#d946ef', '#ffffff'] // Cores Neon (Cyan, Fuchsia, Branco)
      });
    }, 250);
  }
  remover(id: number) {
    this.timesService.excluir(id).subscribe(() => this.atualizarLista());
  }
}