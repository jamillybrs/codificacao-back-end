import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module.js";
import { AlunosService } from "./alunos/alunos.service.js";
import { faker } from '@faker-js/faker/locale/pt_BR';

async function bootstrap () {
    const app = await NestFactory.createApplicationContext(AppModule);
    const alunosService = app.get(AlunosService);

     console.log('🌳 Iniciando a Geração de Faker alunos...');

     const cursosDisponiveis = [
        'Programador Full Stack',
        'Panificação',
        'Eletrecista Predial',
        'Excel Básico',
        'Power BI Básico',
        'Apresentação Criativa no Canva',
        'Corte e Costura',
        'Tecnico em Biotecnologia',
        'Tecnico em Informatica',
        'Tecnico em Desenvolvimento de Jogos Digitais',
        'Tecnico em Manutenção e Suporte em Informatica',
     ];

    for( let i = 0; i < 150; i++){
        const cursosAleatorios = faker.helpers. arrayElements(cursosDisponiveis,{min: 1, max: 3});
        const alunoFaker = {
            nome: faker.person.fullName(),
            idade: faker.number.int({
                min:16,
                max:65,
            }),
            matricula: faker.string.numeric(5),
            cursos: cursosAleatorios,
            ativo:true,
        }
        try{
            await alunosService.create(alunoFaker);
        } catch(error){
            console.log(`Pular: Erro ao Criar Matrícula para ${alunoFaker.nome}! - Matrícula Duplicada`);
        }
    }
    console.log('✅ Banco de Dados Populado com Sucesso!');
    console.log('Feliz Natal🎅');

    await app.close();
}
bootstrap();

    