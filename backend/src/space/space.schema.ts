import { ResourceGroup } from '@azure/arm-resources';
import { Optional } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

export type SpaceDocument = Space & mongoose.Document;

@Schema()
export class Space {
  @Prop({ required: true })
  name: string;

  @Prop({ default: Date.now() })
  @Optional()
  createdAt: Date;

  @Prop({ required: true })
  owner: string;

  // @Prop({ required: true, type: mongoose.Schema.Types.Mixed })
  @Prop({ required: true })
  resourceGroupName: string;

  // @Prop({ type: mongoose.Schema.Type.ObjectId, ref: 'User' })
}

export const SpaceSchema = SchemaFactory.createForClass(Space);
