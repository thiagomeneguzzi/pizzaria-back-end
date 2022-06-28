import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Pizza, PizzaDocument } from "./schema/pizza.schema";
import { Model } from "mongoose";
import { PizzaCreateDto } from "./dtos/pizza-create.dto";

@Injectable()
export class PizzaService {

  constructor(
    @InjectModel(Pizza.name) private readonly pizzaModel: Model<PizzaDocument>
  ) {}

  public async createPizza(pizza: PizzaCreateDto): Promise<Pizza> {
    return this.pizzaModel.create(pizza)
  }

  public async findAllPizza(): Promise<Array<Pizza>> {
    return this.pizzaModel.find()
  }

  public async updatePizza(id: number, pizza: Pizza): Promise<Pizza> {
    return this.pizzaModel.findByIdAndUpdate(id, pizza)
  }

  public async deletePizza(id: number): Promise<void> {
    await this.pizzaModel.findByIdAndDelete(id)
  }

}