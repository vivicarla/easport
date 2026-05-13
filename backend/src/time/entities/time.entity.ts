export class Time {
  id: number;
  nome: string;
  jogo: string;
  pais: string;
  logo: string;
  vitorias: number;

  constructor(dados?: Partial<Time>) {
    this.id = dados?.id || 0;
    this.nome = dados?.nome || '';
    this.jogo = dados?.jogo || '';
    this.pais = dados?.pais || '';
    this.logo = dados?.logo || '';
    this.vitorias = dados?.vitorias || 0;
  }

  // Método para o Front-end saber o nível do time
  get rank(): string {
    if (this.vitorias < 10) return 'Bronze';
    if (this.vitorias <= 20) return 'Prata';
    return 'Ouro';
  }
}