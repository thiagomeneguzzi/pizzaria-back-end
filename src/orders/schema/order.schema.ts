import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import * as mongoose from "mongoose";

export type OrderDocument = Order & Document

@Schema({ _id: false, timestamps: true})
class PizzaOrder {

  @Prop()
  size: string;

  @Prop()
  flavorOne: mongoose.Types.ObjectId;

  @Prop()
  flavorTwo?: mongoose.Types.ObjectId;

  @Prop()
  flavorThree?: mongoose.Types.ObjectId;

  @Prop()
  border_flavor: string;

  @Prop()
  observation: string;

}

@Schema({ _id: false })
class Address {

  @Prop()
  cep: string;

  @Prop()
  neighboor: string;

  @Prop()
  street: string;

  @Prop()
  number: number;

}

@Schema()
export class Order {

  @Prop()
  orders: Array<PizzaOrder>;

  @Prop()
  price: number;

  @Prop()
  address: Address;

  @Prop()
  name: string;

  @Prop()
  phone: string;

  @Prop()
  payment_method: string;

}

export const OrderSchema = SchemaFactory.createForClass(Order)