import { PersonagemView } from "./components/personagem-view.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { Guerreiro } from "./modules/guerreiro.js";
import { Mago } from "./modules/mago.js";
import { Personagem } from "./modules/personagem.js";

const magoAntonio = new Mago('Antonio', 4, 'fogo', 4, 3);
const arqueiroAndre = new Arqueiro('Andre', 5, 4);
const arqueiroMagoAlberto = new ArqueiroMago('Alberto', 5, 5, 'Água', 5, 6)
const guerreiroAline = new Guerreiro('Aline',10)

const personagens = [magoAntonio, arqueiroAndre,arqueiroMagoAlberto, guerreiroAline]

new PersonagemView(personagens).render();

