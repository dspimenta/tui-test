import { IHotelOffersRepository } from "../IHotelOffersRepository";
import { HotelOffersModel } from "../../entities/HotelOffers";
import { Request, Response } from 'express';
import HotelOffersSchema from '../../entities/schema/HotelOffersSchema'

export class HotelOffersRepository implements IHotelOffersRepository {

  async getHotelOffers(req: Request, res: Response): Promise<Response> {
    const hotelOffers = await HotelOffersSchema.find();

    return res.json(hotelOffers)
  }


  async save(hotelOffers: HotelOffersModel): Promise<void> {
    HotelOffersSchema.create(hotelOffers)   
  }
}
