import { Request, Response } from "express";

export interface IExternalAmadeusApiService {
  callExternalApi(req: Request, res: Response, cb: (hotelOffers: any) => any);
}



