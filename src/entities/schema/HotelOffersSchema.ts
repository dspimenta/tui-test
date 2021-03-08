import {Schema, model} from 'mongoose'
import IHotelOffers from "../../interfaces/IHotelOffers"

const HotelOffersSchema = new Schema (({
        data: Object,
        meta: Object
        })
)

export default model<IHotelOffers>('HotelOffers', HotelOffersSchema)