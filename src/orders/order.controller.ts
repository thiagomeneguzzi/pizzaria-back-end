import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "./schema/order.schema";
import * as mongoose from "mongoose";

@Controller('order')
export class OrderController {

  constructor(
    private orderService: OrderService
  ) {}

  @Post()
  public async createOrder(@Body() order: Order): Promise<Order> {

    order.orders.forEach((order) => {
      order.flavorOne = new mongoose.Types.ObjectId(order.flavorOne.toString())

      if(order.flavorTwo) {
        order.flavorTwo = new mongoose.Types.ObjectId(order.flavorTwo.toString())
      }

      if(order.flavorThree) {
        order.flavorThree = new mongoose.Types.ObjectId(order.flavorThree.toString())
      }
    })

    return this.orderService.createOrder(order);
  }

  @Get()
  public async getAllOrders(): Promise<Array<Order>> {
    return this.orderService.findAllOrders();
  }

  @Put(':id')
  public async updateOrder(@Param() params, @Body() order: Order): Promise<Order> {
    return this.orderService.updateOrder(params.id, order);
  }

  @Delete(':id')
  public async deleteOrder(@Param() params): Promise<void> {
    return this.orderService.deleteOrder(params.id);
  }
}