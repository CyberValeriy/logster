export class IUserEntity {
  id: string;
  email: string;
  username: string;
  createdAt: Date;
}

export interface IUserEntityWithPassword extends IUserEntity {
  password: string;
}

export interface ICreateUserInput {
  email: string;
  username: string;
  password: string;
}
