import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { ParameterController } from './parameter/parameter.controller';
import { DataSubmissionController } from './data-submission/data-submission.controller';


@Module({
  imports: [],
  controllers: [UsersController, ParameterController, DataSubmissionController], //define userController and so on
  providers: [],
})
export class AppModule {}
