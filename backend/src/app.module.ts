import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    // Configuración de BD
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'gestion_escolar',
      entities: ['src/**/*.entity.ts'],
      synchronize: process.env.NODE_ENV !== 'production',
      logging: process.env.NODE_ENV === 'development',
    }),
    // JWT
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'tu-clave-secreta',
      signOptions: { expiresIn: '24h' },
    }),
    // Passport
    PassportModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
