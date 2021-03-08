
import { HotelOffersRepository } from "../../repositories/implementantions/HotelOffersRepository";
import { CreateHotelOffersUserCase } from "./CreateHotelOffersUserCase";
import { CreateHotelOffersController } from "./CreateHotelOffersController";

const hotelOffersRepository = new HotelOffersRepository();


const createHotelOffersUserCase = new CreateHotelOffersUserCase(
  hotelOffersRepository,
);

const createHotelOffersController = new CreateHotelOffersController(createHotelOffersUserCase);

export { createHotelOffersUserCase, createHotelOffersController };
