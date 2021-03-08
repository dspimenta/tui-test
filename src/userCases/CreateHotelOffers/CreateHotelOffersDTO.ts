

export interface ICreateHotelOffersRequestDTO {
    data: HotelOffers[];
    meta: Meta;
}

  class HotelOffers {
    type: string;
    hotel: Hotel;
    available: boolean;
    offers: Offer[];
    self: string;
}

 class Hotel {
    type: string;
    hotelId: string;
    chainCode: string;
    dupeId: string;
    name: string;
    rating: string;
    cityCode: string;
    latitude: number;
    longitude: number;
    hotelDistance: HotelDistance;
    address: Address;
    contact: Contact;
    description?: Description;
    amenities: string[];
    media: Media[];
}

class Address {
    lines: string[];
    postalCode: string;
    cityName: string;
    countryCode: string;
}

class  Contact {
    phone: string;
    fax: string;
    email?: string;
}

class Description {
    lang?: string;
    text: string;
}

class HotelDistance {
    distance: number;
    distanceUnit: string;
}

export interface Media {
    uri: string;
    category: string;
}

class Offer {
    id: string;
    checkInDate: Date;
    checkOutDate: Date;
    rateCode: string;
    rateFamilyEstimated: RateFamilyEstimated;
    boardType?: string;
    room: Room;
    guests: Guests;
    price: Price;
    policies: Policies;
    commission?: Commission;
}

class Commission {
    amount: string;
    percentage: string;
}

class Guests {
    adults: number;
}

class Policies {
    guarantee?: Guarantee;
    paymentType: string;
    cancellation: Cancellation;
}

class Cancellation {
    numberOfNights?: number;
    deadline: Date;
}

class Guarantee {
    acceptedPayments: AcceptedPayments;
}

class AcceptedPayments {
    creditCards: string[];
    methods: string[];
}

class Price {
    currency: string;
    base?: string;
    total: string;
    taxes?: Tax[];
    variations: Variations;
}

class Tax {
    code: string;
    pricingFrequency: string;
    pricingMode: string;
    percentage?: string;
    included: boolean;
    amount?: string;
    currency?: string;
}

class Variations {
    average: Average;
    changes: Change[];
}

class Average {
    base: string;
}

class Change {
    startDate: Date;
    endDate: Date;
    base?: string;
    total?: string;
}

class RateFamilyEstimated {
    code: string;
    type: string;
}

class Room {
    type: string;
    typeEstimated: TypeEstimated;
    description: Description;
}

class TypeEstimated {
    category?: string;
    beds?: number;
    bedType?: string;
}

class Meta {
    links: Links;
}

class Links {
    next: string;
}
