import { Module } from '@nestjs/common';
import { UserRepositoriesModule } from '../repositories/user.repositories.module';
import { IUserReadService } from '../interfaces/services';
import { UserReadService } from './user-read.service';

@Module({
  imports: [UserRepositoriesModule],
  providers: [
    {
      provide: IUserReadService,
      useClass: UserReadService,
    },
  ],
  exports: [IUserReadService],
})
export class UserReadModule {}
