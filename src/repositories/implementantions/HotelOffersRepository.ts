import { IHotelOffersRepository } from "../IHotelOffersRepository";
import { HotelOffersModel } from "../../entities/HotelOffers";
import { Request, Response } from 'express';
import HotelOffersSchema from '../../entities/schema/HotelOffersSchema'


export class HotelOffersRepository implements IHotelOffersRepository {

  async getHotelOffers(req: Request, res: Response): Promise<Response> {
    const hotelOffers = await HotelOffersSchema.find();

    return res.json(hotelOffers)
  }

  public async index(req: Request, res: Response): Promise<Response> {
    const users = await HotelOffersSchema.find();

    return res.json(users)
  }


  async save(hotelOffers: HotelOffersModel): Promise<void> {
    HotelOffersSchema.create(hotelOffers)   
  }
}
