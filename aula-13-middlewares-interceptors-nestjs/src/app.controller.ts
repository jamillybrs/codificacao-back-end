import { Controller, Get } from '@nestjs/common';
import {get} from "http";

@Controller()
export class AppController {
  @Get()
  getPublic(){
    return{
      message: 'Rota pública acessada com sucesso!',
      data: new Date(),
    }
  }

  @Get('admin')
  getPrivate(){
    return{
      message: 'Bem-vindo ao painel administrativo!',
      data:new Date(),
    }
  }
}