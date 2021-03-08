import { Router } from "express";
import { createHotelOffersController } from "./userCases/CreateHotelOffers";
import externalApiUsingRequest  from './providers/ExternalApiUsingRequest'

const router = Router();

router.get("/hotel-offers", (request, response) => {
   createHotelOffersController.getHotelOffers(request, response);
   return response
});

router.get("/add", (request, response ) => {
  externalApiUsingRequest.callExternalApi(request, response, hotelOffers => { 
      createHotelOffersController.handle(request, response, hotelOffers);
      return response.status(201).send(hotelOffers);
  });  
});

export { router };
