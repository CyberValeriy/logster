import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserEntity, UserSchema } from '../schemas/user.schema';
import {
  IUserReadRepository,
  IUserWriteRepository,
} from '../interfaces/repositories';
import { UserReadRepository } from './providers/user.read-repository';
import { UserWriteRepository } from './providers/user.write-repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: UserEntity.name, schema: UserSchema }]),
  ],
  providers: [
    {
      provide: IUserReadRepository,
      useClass: UserReadRepository,
    },
    {
      provide: IUserWriteRepository,
      useClass: UserWriteRepository,
    },
  ],
  exports: [IUserReadRepository, IUserWriteRepository],
})
export class UserRepositoriesModule {}
