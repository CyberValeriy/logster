import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Types } from "mongoose";

const USER_COLLECTION_NAME = 'users'

@Schema({ 
    timestamps: true, 
    collection: USER_COLLECTION_NAME
})
export class UserEntity {
    public _id: Types.ObjectId;
    public readonly createdAt: Date;
    public readonly updatedAt: Date;

    @Prop({ type: String, required: true })
    public username: string

    @Prop({ type: String, required: true })
    public password: string

    @Prop({ type: String, required: true })
    public email: string
}

export const UserSchema = SchemaFactory.createForClass(UserEntity);