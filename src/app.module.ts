import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { ParameterController } from './parameter/parameter.controller';


@Module({
  imports: [],
  controllers: [UsersController, ParameterController], //define userController and so on
  providers: [],
})
export class AppModule {}
