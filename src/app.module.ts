import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './users/user.module';
import ProjectModule from './projects/project.module';
import StreamServerModule from './servers/stream-server.module';
import { AccountModule } from './accounts/account.module';
import { CameraModule } from './cameras/camera.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'serbinario',
        database: 'devpleno-octor',
        autoLoadEntities: true,
        synchronize: true,
        logging: true,
      }),
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    CameraModule,
    StreamServerModule,
    ProjectModule,
    AccountModule,
    UserModule,
  ],
})
export class AppModule {}
