import { HotelOffersModel } from "../entities/HotelOffers";
import { Request, Response } from 'express';

export interface IHotelOffersRepository {
  save(hotelOffers: HotelOffersModel): Promise<void>;
  getHotelOffers(req: Request, res: Response): Promise<Response> ;
}
