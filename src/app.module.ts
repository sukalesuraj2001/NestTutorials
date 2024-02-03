import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';


@Module({
  imports: [],
  controllers: [UsersController], //define userController and so on
  providers: [],
})
export class AppModule {}
