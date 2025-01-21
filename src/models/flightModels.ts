
export interface FlightDestinationResponse {
    id:                string;
    type:              Type;
    name:              string;
    code:              string;
    city?:             string;
    cityName?:         string;
    regionName?:       string;
    country:           string;
    countryName:       string;
    countryNameShort?: string;
    photoUri:          string;
    distanceToCity?:   DistanceToCity;
    parent?:           string;
    region?:           string;
}

export interface DistanceToCity {
    value: number;
    unit:  Unit;
}

export enum Unit {
    KM = "km",
}

export enum Type {
    Airport = "AIRPORT",
    City = "CITY",
}


// flight interface

export interface FlightResponse {
    aggregation: Aggregation;
    flightOffers: FlightOffer[];
    flightDeals: FlightDeal[];
    atolProtectedStatus: string;
    searchId: string;
    banners: unknown[];
    displayOptions: DisplayOptions;
    cabinClassExtension: CabinClassExtension;
    searchCriteria: SearchCriteria;
    baggagePolicies: BaggagePolicy[];
    priceAlertStatus: PriceAlertStatus;
}
export interface FlightOffer {
    token:                           string;
    segments:                        FlightOfferSegment[];
    priceBreakdown:                  PriceBreakdown;
    travellerPrices:                 TravellerPrice[];
    priceDisplayRequirements: unknown[];
    pointOfSale:                     PointOfSale;
    tripType:                        TripType;
    posMismatch:                     PosMismatch;
    includedProductsBySegment:       Array<IncludedProductsBySegment[]>;
    includedProducts:                IncludedProducts;
    ancillaries: unknown;
    appliedDiscounts: unknown[];
    offerKeyToHighlight:             string;
    extraProductDisplayRequirements: unknown;
    brandedFareInfo?:                BrandedFareInfo;
    seatAvailability?:               SeatAvailability;
}



export interface BrandedFareInfo {
    fareName:                    string;
    cabinClass:                  CabinClass;
    features:                    Feature[];
    fareAttributes:              unknown[];
    nonIncludedFeaturesRequired: boolean;
    nonIncludedFeatures:         unknown[];
}

export enum CabinClass {
    Business = "BUSINESS",
    Economy = "ECONOMY",
    PremiumEconomy = "PREMIUM_ECONOMY",
}

export interface Feature {
    featureName:  FeatureName;
    category:     FeatureCategory;
    code:         FeatureCode;
    label:        string;
    availability: Availability;
}

export enum Availability {
    Included = "INCLUDED",
}

export enum FeatureCategory {
    Baggage = "BAGGAGE",
}

export enum FeatureCode {
    Bk01 = "BK01",
    Bk02 = "BK02",
    Bk03 = "BK03",
}

export enum FeatureName {
    CabinBaggage = "CABIN_BAGGAGE",
    CheckBaggage = "CHECK_BAGGAGE",
    PersonalBaggage = "PERSONAL_BAGGAGE",
}

export interface IncludedProducts {
    areAllSegmentsIdentical: boolean;
    segments:                Array<LuggageAllowanceElement[]>;
}

export interface LuggageAllowanceElement {
    luggageType:        LuggageType;
    maxPiece:           number;
    piecePerPax?:       number;
    maxWeightPerPiece?: number;
    massUnit?:          MassUnit;
    sizeRestrictions?:  SizeRestrictions;
    ruleType?:          RuleType;
    maxTotalWeight?:    number;
}

export enum LuggageType {
    CheckedIn = "CHECKED_IN",
    Hand = "HAND",
    PersonalItem = "PERSONAL_ITEM",
}

export enum MassUnit {
    LB = "LB",
}

export enum RuleType {
    PieceBased = "PIECE_BASED",
    WeightBased = "WEIGHT_BASED",
}

export interface SizeRestrictions {
    maxLength: number;
    maxWidth:  number;
    maxHeight: number;
    sizeUnit:  SizeUnit;
}

export enum SizeUnit {
    Inch = "INCH",
}

export interface IncludedProductsBySegment {
    travellerReference: string;
    travellerProducts:  TravellerProduct[];
}

export interface TravellerProduct {
    type:     TravellerProductType;
    product?: LuggageAllowanceElement;
}

export enum TravellerProductType {
    CabinBaggage = "cabinBaggage",
    CheckedInBaggage = "checkedInBaggage",
    PersonalItem = "personalItem",
}

export enum PointOfSale {
    Us = "us",
}

export interface PosMismatch {
    detectedPointOfSale: PointOfSale;
    isPOSMismatch:       boolean;
    offerSalesCountry:   PointOfSale;
}

export interface PriceBreakdown {
    total:                       BaseFare;
    baseFare:                    BaseFare;
    fee:                         BaseFare;
    tax:                         BaseFare;
    totalRounded:                BaseFare;
    moreTaxesAndFees:            unknown;
    discount:                    BaseFare;
    totalWithoutDiscount:        BaseFare;
    totalWithoutDiscountRounded: BaseFare;
    carrierTaxBreakdown?:        CarrierTaxBreakdown[];
}

export interface BaseFare {
    currencyCode: CurrencyCode;
    units:        number;
    nanos:        number;
}

export enum CurrencyCode {
    Aed = "AED",
}

export interface CarrierTaxBreakdown {
    carrier:       Carrier;
    avgPerAdult:   BaseFare;
    avgPerChild:   BaseFare;
    avgPerInfant?: BaseFare;
}

export interface Carrier {
    name: CarrierName;
    code: CodeElement;
    logo: string;
}

export enum CodeElement {
    AI = "AI",
    Qp = "QP",
    The6E = "6E",
}

export enum CarrierName {
    AirIndia = "Air India",
    AkasaAir = "Akasa Air",
    IndiGo = "IndiGo",
}

export interface SeatAvailability {
    numberOfSeatsAvailable: number;
}

export interface FlightOfferSegment {
    departureAirport:              Airport;
    arrivalAirport:                Airport;
    departureTime:                 string;
    arrivalTime:                   string;
    legs:                          unknown[];
    totalTime:                     number;
    travellerCheckedLuggage:       TravellerCheckedLuggage[];
    travellerCabinLuggage:         TravellerCabinLuggage[];
    isAtolProtected:               boolean;
    showWarningDestinationAirport: boolean;
    showWarningOriginAirport:      boolean;
}

export interface Airport {
    type:        ArrivalAirportType;
    code:        City;
    name:        ArrivalAirportName;
    city:        City;
    cityName:    CityName;
    country:     Country;
    countryName: CountryName;
    province?:   Province;
}

export enum City {
    AMD = "AMD",
    BOM = "BOM",
    Del = "DEL",
    Idr = "IDR",
    Jai = "JAI",
    Nag = "NAG",
}

export enum CityName {
    Ahmedabad = "Ahmedabad",
    Indore = "Indore",
    Jaipur = "Jaipur",
    Mumbai = "Mumbai",
    Nagpur = "Nagpur",
    NewDelhi = "New Delhi",
}

export enum Country {
    In = "IN",
}

export enum CountryName {
    India = "India",
}

export enum ArrivalAirportName {
    ChhatrapatiShivajiInternationalAirportMumbai = "Chhatrapati Shivaji International Airport Mumbai",
    DRBabasahebAmbedkarInternationalAirport = "Dr. Babasaheb Ambedkar International Airport",
    DelhiInternationalAirport = "Delhi International Airport",
    DeviAhilyaBaiHolkarAirport = "Devi Ahilya Bai Holkar Airport",
    JaipurInternationalAirport = "Jaipur International Airport",
    SardarVallabhbhaiPatelInternationalAirport = "Sardar Vallabhbhai Patel International Airport",
}

export enum Province {
    Gujarat = "Gujarat",
    MadhyaPradesh = "Madhya Pradesh",
    Maharashtra = "Maharashtra",
    Rajasthan = "Rajasthan",
}

export enum ArrivalAirportType {
    Airport = "AIRPORT",
}

export interface Leg {
    departureTime:      Date;
    arrivalTime:        Date;
    departureAirport:   Airport;
    arrivalAirport:     Airport;
    cabinClass:         CabinClass;
    flightInfo:         FlightInfo;
    carriers:           CodeElement[];
    carriersData:       Carrier[];
    totalTime:          number;
    flightStops:        unknown[];
    amenities:          Amenity[];
    departureTerminal?: string;
    arrivalTerminal?:   string;
}

export interface Amenity {
    category:   AmenityCategory;
    model?:     string;
    type?:      TypeElement[] | PurpleType;
    legroom?:   Legroom;
    pitch?:     number;
    pitchUnit?: PitchUnit;
    cost?:      Cost;
}

export enum AmenityCategory {
    Aircraft = "AIRCRAFT",
    Entertainment = "ENTERTAINMENT",
    Food = "FOOD",
    Power = "POWER",
    Seat = "SEAT",
    Wifi = "WIFI",
}

export enum Cost {
    Free = "free",
}

export enum Legroom {
    Less = "less",
    More = "more",
}

export enum PitchUnit {
    In = "in",
}

export enum TypeElement {
    PowerOutlet = "power_outlet",
    USBPort = "usb_port",
}

export enum PurpleType {
    LightMeal = "light_meal",
    Meal = "meal",
}

export interface FlightInfo {
    facilities:   unknown[];
    flightNumber: number;
    planeType:    string;
    carrierInfo:  CarrierInfo;
}

export interface CarrierInfo {
    operatingCarrier:               CodeElement;
    marketingCarrier:               CodeElement;
    operatingCarrierDisclosureText: string;
}

export interface TravellerCabinLuggage {
    travellerReference: string;
    luggageAllowance:   LuggageAllowance;
    personalItem:       boolean;
}

export interface LuggageAllowance {
    luggageType:       LuggageType;
    maxPiece:          number;
    maxWeightPerPiece: number;
    massUnit:          MassUnit;
    sizeRestrictions:  SizeRestrictions;
}

export interface TravellerCheckedLuggage {
    travellerReference: string;
    luggageAllowance:   LuggageAllowanceElement;
}

export interface TravellerPrice {
    travellerPriceBreakdown: PriceBreakdown;
    travellerReference:      string;
    travellerType:           TravellerType;
}

export enum TravellerType {
    Adult = "ADULT",
    Kid = "KID",
}

export enum TripType {
    Oneway = "ONEWAY",
}

export interface Aggregation {
    totalCount: number;
    filteredTotalCount: number;
    stops: Stop[];
    airlines: Airline[];
    departureIntervals: DepartureInterval[];
    flightTimes: FlightTime[];
    shortLayoverConnection: ShortLayoverConnection;
    durationMin: number;
    durationMax: number;
    minPrice: MinPrice;
    minRoundPrice: MinPrice;
    minPriceFiltered: MinPrice;
    baggage: Baggage[];
    budget: Budget;
    budgetPerAdult: Budget;
    duration: Duration[];
    filtersOrder: string[];
}

export interface Airline {
    name: string;
    logoUrl: string;
    iataCode: string;
    count: number;
    minPrice: MinPrice;
}

export interface MinPrice {
    currencyCode: CurrencyCode;
    units: number;
    nanos: number;
}

export interface Baggage {
    paramName: string;
    count: number;
    enabled: boolean;
    baggageType: string;
}

export interface Budget {
    paramName: string;
    min: MinPrice;
    max: MinPrice;
}

export interface DepartureInterval {
    start: string;
    end: string;
}

export interface Duration {
    min: number;
    max: number;
    durationType: string;
    enabled: boolean;
    paramName: string;
}

export interface FlightTime {
    arrival: Arrival[];
    departure: Arrival[];
}

export interface Arrival {
    start: string;
    end: string;
    count: number;
}

export interface ShortLayoverConnection {
    count: number;
}

export interface Stop {
    numberOfStops: number;
    count: number;
    minPrice: MinPrice;
    minPriceRound: MinPrice;
}

export interface BaggagePolicy {
    code: string;
    name: string;
    url: string;
}

export interface CabinClassExtension {
    text: string;
}

export interface DisplayOptions {
    brandedFaresShownByDefault: boolean;
    directFlightsOnlyFilterIgnored: boolean;
    hideFlexiblePricesBanner: boolean;
}

export interface FlightDeal {
    key: string;
    offerToken: string;
    price: MinPrice;
    travellerPrices: TravellerPrice[];
}

export interface TravellerPriceBreakdown {
    total: MinPrice;
    baseFare: MinPrice;
    fee: MinPrice;
    tax: MinPrice;
    totalRounded: MinPrice;
    moreTaxesAndFees: unknown;
    discount: MinPrice;
    totalWithoutDiscount: MinPrice;
    totalWithoutDiscountRounded: MinPrice;
}


export interface PriceAlertStatus {
    isEligible: boolean;
    isSearchEligible: boolean;
}

export interface SearchCriteria {
    cabinClass: string;
}

export interface IFlightPayload {
    fromId: string,
    toId: string,
    departDate: string,
    returnDate: string,
}