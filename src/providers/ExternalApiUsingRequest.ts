import { Request, Response } from "express";
import { json } from "body-parser";
import { HotelOffersModel } from "../entities/HotelOffers";
import { IExternalAmadeusApiService } from "./IExternalAmadeusApi";

const request = require("request");

class ExternalApiUsingRequest implements IExternalAmadeusApiService {
  
    
    callExternalApi(req: Request, res: Response, cb : (hotelOffers : any) => any) {
    
    this.ExternalApiUsingRequestAuthToken(    
    token => {
      this.ExternalApiUsingRequestHotelOffers(
        token,
        req,
        res,
        body => {            
            const hotelOffers = new HotelOffersModel(body);  
            cb(hotelOffers);
        }
      );
    })
  
  }
  private ExternalApiUsingRequestAuthToken(cb: (token: String) => any) {
    
    let body: any;
    const options = {
      method: "POST",
      url: process.env.AUTH_API,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      form: {
        grant_type: "client_credentials",
        client_id: process.env.CLIENT_ID,
        client_secret: process.env.CLIENT_SECRET
      }
    };
    request(options, (error, response) => {
      body = JSON.parse(response.body);
      cb(body.access_token);
      if (error) throw new Error(error);
    });
  }

  private ExternalApiUsingRequestHotelOffers(
    token: String,
    req: Request,
    res: Response,
    cb: (body: any) => any
  ) {
    let body: any;
    var options = {
      method: "GET",
      url: process.env.API_REQUEST_HOTEL_OFFERS,
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    request(options, (error, response) => {
      body = JSON.parse(response.body);

      cb(body);
      if (error) throw new Error(error);
    });
  }
}

export default new ExternalApiUsingRequest();
