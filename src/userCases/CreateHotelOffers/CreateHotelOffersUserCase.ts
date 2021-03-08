import { IHotelOffersRepository } from "../../repositories/IHotelOffersRepository";
import { ICreateHotelOffersRequestDTO } from "./CreateHotelOffersDTO";
import { HotelOffersModel } from "../../entities/HotelOffers";
import { Request, Response } from "express";

export class CreateHotelOffersUserCase {
    constructor(
        private hotelOffersRepository: IHotelOffersRepository,
       
    ) { }

    async execute(data: ICreateHotelOffersRequestDTO) {
        const hotelOffers = new HotelOffersModel(data);

        await this.hotelOffersRepository.save(hotelOffers);

    }

    async getHotelOffers(req: Request, res: Response) {
       
        await this.hotelOffersRepository.getHotelOffers(req, res);

    }
}
