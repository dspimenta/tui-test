import { Request, Response } from "express";
import { CreateHotelOffersUserCase } from "./CreateHotelOffersUserCase";


export class CreateHotelOffersController {
  constructor(private createHotelOffersUserCase: CreateHotelOffersUserCase) {}

  async handle(
    request: Request,
    response: Response,
    hotelOffers : any
  ): Promise<Response> {
    console.log(hotelOffers)
    const { data, meta } = hotelOffers;
    try {
      await this.createHotelOffersUserCase.execute({
        data,
        meta
      });

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }

  async getHotelOffers(
    request: Request,
    response: Response
  ): Promise<Response> {
    try {
      await this.createHotelOffersUserCase.getHotelOffers(request, response);

      return response.status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error."
      });
    }
  }
}
