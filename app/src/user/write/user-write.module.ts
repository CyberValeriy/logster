import { Module } from '@nestjs/common';
import { UserRepositoriesModule } from '../repositories/user.repositories.module';
import { IUserWriteService } from '../interfaces/services';
import { UserWriteService } from './user-write.service';

@Module({
  imports: [UserRepositoriesModule],
  providers: [
    {
      provide: IUserWriteService,
      useClass: UserWriteService,
    },
  ],
  exports: [IUserWriteService],
})
export class UserWriteModule {}
