
import { HotelOffers, Meta} from '../interfaces/IHotelOffers'

export class HotelOffersModel {

  data: HotelOffers[];
  meta: Meta;

  
  constructor(props: Omit<HotelOffersModel, 'id'>) {
    Object.assign(this, props)
  }
}




