import { IsNotEmpty, IsString } from "class-validator";

export class PizzaCreateDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  image: string;

  @IsNotEmpty()
  type: {
    order: number;
    name: string;
    price: number;
  }

}
