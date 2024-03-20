import {  Module  } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CitaService } from './cita/cita.service';
import { CitaModule } from './cita/cita.module';
import { FichaMedicaModule } from './ficha_medica/ficha_medica.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, ConfigModule.forRoot(), CitaModule, FichaMedicaModule, FilesModule,
  ],
  controllers: [],
  providers: [CitaService],
})
export class AppModule  {
  /*
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('login')
  }
  */
}
