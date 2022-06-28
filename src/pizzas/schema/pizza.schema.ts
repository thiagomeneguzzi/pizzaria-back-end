import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose'

export type PizzaDocument = Pizza & Document

@Schema({ _id: false })
class PizzaType {

  @Prop()
  order: number;

  @Prop()
  name: string;

  @Prop()
  price: number;

}

@Schema()
export class Pizza {

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  image: string;

  @Prop()
  type: PizzaType;

}

export const PizzaSchema = SchemaFactory.createForClass(Pizza)