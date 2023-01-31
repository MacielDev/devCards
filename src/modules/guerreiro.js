import { Personagem } from "./personagem.js";


export class Guerreiro extends Personagem {
  static tipo = 'Guerreiro';
  static descricao = 'Você será esmagado pela fúria do Guerreiro!!!'
  forca

  constructor(nome,force) {
    super(nome)
    this.forca = force
  }

  obterInsignia() {
    if (this.level >= 7 && this.forca >= 5) {
      return 'Guerreiro furioso'
    }
    return super.obterInsignia()
  }

}