import { Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {}

export const UserSchema = SchemaFactory.createForClass(User);
