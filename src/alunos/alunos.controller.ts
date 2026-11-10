import { Controller, 
         Get,
         Post,
         Body,
         Patch,
         Param,
         Delete } from "@nestjs/common";
import { AlunosService } from "./alunos.service.js";
import { CreateAlunoDto } from "./dto/create-aluno.dto.js";
import { UpdateAlunoDto } from "./dto/update-aluno.dto.js";
import { ApiTags, 
         ApiOperation, 
         ApiResponse } from '@nestjs/swagger';

@ApiTags('alunos')         
@Controller('alunos')
export class AlunosController {
    constructor(private readonly alunoService : AlunosService){}
    
    @Post()
    @ApiOperation({
        summary: 'Cria a matrícula do aluno',
    })
    @ApiResponse({
        status: 201,
        description: 'A matrícula do aluno foi criada com sucesso.',
    })
    @ApiResponse({
        status: 400,
        description: 'Dados inválidos fornecidos para criar a matrícula do aluno.',
    })

    create(@Body() createAlunoDto:CreateAlunoDto){
        return this.alunoService.create(createAlunoDto);
    }
    @Get()
    findAll(){
        return this.alunoService.findAll();
    }
    @Get(':id')
    findOne(@Param('id') id: string){
        return this.alunoService.findOne(id);
    }
    @Patch(':id')
    update(@Param('id') id: string, @Body() updateAlunoDto: UpdateAlunoDto){
        return this.alunoService.update(id, updateAlunoDto);
    }
    @Delete(':id')
    remove(@Param('id') id: string){
        return this.alunoService.remove(id);
    }
}