import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class JogosService {
    private jogos = [
        {id: 1, titulo: 'Minecraft', estudio:'Mojang Studios'},
        {id: 2, titulo: 'The Legend of Zelda: Ocarina of Time', Studio: 'Nitendo'},
        {id: 3, titulo: 'Grand theft Auto V', estudio:'Rock North'},
        {id: 4, titulo: 'Elden Ring', estudio: 'FromSoftware'},
        {id: 5, titulo: 'God of War', estudio: 'Santa Monica Studio'},
    ];

    buscarPorId(id:number){
        const jogo = this.jogos.find((j) => j.id == id);
        if(!jogo){
            throw new NotFoundException(`Jogo com ID ${id} não localizado em nosso estoque.`);
        }
        return jogo;
    }
}