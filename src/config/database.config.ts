import { registerAs } from "@nestjs/config";

export default registerAs ('databaseConfig', ()=>({
uri: process.env.DATABASE_URI || ' mongodb://localhost:27017/escola_dbn',
maxPoolSize: parseInt(process.env.MAXX_POOL_SIZE || '10', 10),
}));