import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { PizzaModule } from "./pizzas/pizza.module";
import { OrderModule } from "./orders/order.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://Pizzaria:mzRxVBGoXiSEnOgi@cluster0.hfzpecy.mongodb.net/Pizzaria?retryWrites=true&w=majority"),
    PizzaModule,
    OrderModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
