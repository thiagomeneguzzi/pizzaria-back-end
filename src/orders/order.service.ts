import {  Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Order, OrderDocument } from "./schema/order.schema";
import { Model } from "mongoose";
import { Pizza } from "../pizzas/schema/pizza.schema";

@Injectable()
export class OrderService {

  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>
  ) {}

  public async createOrder(order: Order): Promise<Order> {
    return this.orderModel.create(order);
  }

  public async findAllOrders(): Promise<Array<Order>> {
    return this.orderModel.find()
      .populate({ path: 'orders', populate: { path: 'flavorOne', model: Pizza.name } })
      .populate({ path: 'orders', populate: { path: 'flavorTwo', model: Pizza.name } })
      .populate({ path: 'orders', populate: { path: 'flavorThree', model: Pizza.name } })
  }

  public async updateOrder(id: number, order: Order): Promise<Order> {
    return this.orderModel.findByIdAndUpdate(id, order)
  }

  public async deleteOrder(id: number): Promise<void> {
    await this.orderModel.findByIdAndDelete(id)
  }
}