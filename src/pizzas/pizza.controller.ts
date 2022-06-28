import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Pizza } from "./schema/pizza.schema";
import { PizzaService } from "./pizza.service";
import { PizzaCreateDto } from "./dtos/pizza-create.dto";

@Controller('pizza')
export class PizzaController {

  constructor(
    private pizzaService: PizzaService
  ) {}

  @Post()
  public async createPizza(@Body() pizza: PizzaCreateDto): Promise<Pizza> {
    return this.pizzaService.createPizza(pizza)
  }

  @Get()
  public async getAllPizzas(): Promise<Array<Pizza>> {
    return this.pizzaService.findAllPizza();
  }

  @Put(':id')
  public async updatePizza(@Param() params, @Body() pizza: Pizza): Promise<Pizza> {
    return this.pizzaService.updatePizza(params.id, pizza);
  }

  @Delete(':id')
  public async deletePizza(@Param() params): Promise<void> {
    await this.pizzaService.deletePizza(params.id);
  }

}