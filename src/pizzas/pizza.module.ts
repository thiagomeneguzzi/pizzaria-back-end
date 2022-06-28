import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Pizza, PizzaSchema } from "./schema/pizza.schema";
import { PizzaService } from "./pizza.service";
import { PizzaController } from "./pizza.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pizza.name,
        schema: PizzaSchema
      }
    ])
  ],
  controllers: [
    PizzaController
  ],
  providers: [
    PizzaService
  ]
})
export class PizzaModule {}