

export interface ICreateHotelOffersRequestDTO {
    data: HotelOffers[];
    meta: Meta;
}

export interface HotelOffers {
    type: string;
    hotel: Hotel;
    available: boolean;
    offers: Offer[];
    self: string;
}

export interface Hotel {
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

export interface Address {
    lines: string[];
    postalCode: string;
    cityName: string;
    countryCode: string;
}

export interface Contact {
    phone: string;
    fax: string;
    email?: string;
}

export interface Description {
    lang?: string;
    text: string;
}

export interface HotelDistance {
    distance: number;
    distanceUnit: string;
}

export interface Media {
    uri: string;
    category: string;
}

export interface Offer {
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

export interface Commission {
    amount: string;
    percentage: string;
}

export interface Guests {
    adults: number;
}

export interface Policies {
    guarantee?: Guarantee;
    paymentType: string;
    cancellation: Cancellation;
}

export interface Cancellation {
    numberOfNights?: number;
    deadline: Date;
}

export interface Guarantee {
    acceptedPayments: AcceptedPayments;
}

export interface AcceptedPayments {
    creditCards: string[];
    methods: string[];
}

export interface Price {
    currency: string;
    base?: string;
    total: string;
    taxes?: Tax[];
    variations: Variations;
}

export interface Tax {
    code: string;
    pricingFrequency: string;
    pricingMode: string;
    percentage?: string;
    included: boolean;
    amount?: string;
    currency?: string;
}

export interface Variations {
    average: Average;
    changes: Change[];
}

export interface Average {
    base: string;
}

export interface Change {
    startDate: Date;
    endDate: Date;
    base?: string;
    total?: string;
}

export interface RateFamilyEstimated {
    code: string;
    type: string;
}

export interface Room {
    type: string;
    typeEstimated: TypeEstimated;
    description: Description;
}

export interface TypeEstimated {
    category?: string;
    beds?: number;
    bedType?: string;
}

export interface Meta {
    links: Links;
}

export interface Links {
    next: string;
}
