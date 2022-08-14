import { Prop, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type AppServiceDocument = AppService & mongoose.Document;

export class AppService {
  @Prop({ required: true })
  name: string;
}

export const AppServiceSchema = SchemaFactory.createForClass(AppService);
