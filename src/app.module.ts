import { Module } from '@nestjs/common';
import { UsersController } from './users/users.controller';
import { ParameterController } from './parameter/parameter.controller';
import { DataSubmissionController } from './data-submission/data-submission.controller';
import { UserSubmissionController } from './user-submission/user-submission.controller';


@Module({
  imports: [],
  controllers: [UsersController, ParameterController, DataSubmissionController, UserSubmissionController], //define userController and so on
  providers: [],
})
export class AppModule {}
