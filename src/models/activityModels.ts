
import Activity from '../pages/activities/Activity';

export interface ActivityDestinationReponse {
    products:     Product[];
    destinations: ActivityDestination[];
}

export interface ActivityDestination {
    id:           string;
    __typename:   string;
    ufi:          number;
    country:      string;
    cityName:     CityName;
    productCount: number;
    cc1:          string;
}

export enum CityName {
    Albufeira = "Albufeira",
    Lagos = "Lagos",
    Lisbon = "Lisbon",
}

export interface Product {
    id:           string;
    __typename:   Typename;
    title:        string;
    productId:    string;
    productSlug:  string;
    taxonomySlug: TaxonomySlug;
    cityUfi:      number;
    cityName:     CityName;
    countryCode:  CountryCode;
}

export enum Typename {
    AttractionsSearchProductSuggestion = "AttractionsSearchProductSuggestion",
}

export enum CountryCode {
    Pt = "pt",
}

export enum TaxonomySlug {
    Activities = "activities",
    Tours = "tours",
    TransfersServices = "transfers-services",
}

// activities

export interface Activity {
    __typename:    string;
    products:      ActivityProduct[];
    filterStats:   FilterStats;
    sorters:       Sorter[];
    defaultSorter: Sorter;
    filterOptions: FilterOptions;
}

export interface Sorter {
    __typename: string;
    name:       string;
    value:      string;
}

export interface FilterOptions {
    __typename:   string;
    typeFilters:  Filter[];
    labelFilters: Filter[];
    ufiFilters:   Filter[];
    priceFilters: null;
}

export interface Filter {
    __typename:   LabelFilterTypename;
    name:         string;
    tagname:      string;
    productCount: number;
}

export enum LabelFilterTypename {
    FilterOption = "FilterOption",
}

export interface FilterStats {
    __typename:             string;
    unfilteredProductCount: number;
    filteredProductCount:   number;
}

export interface ActivityProduct {
    cancellationPolicy:  CancellationPolicy;
    id:                  string;
    name:                string;
    slug:                string;
    shortDescription:    string;
    representativePrice: RepresentativePrice;
    primaryPhoto:        PrimaryPhoto;
    reviewsStats:        ReviewsStats;
    ufiDetails:          UfiDetails;
    offers:              Offer[];
    supportedFeatures:   SupportedFeatures;
    flags:               Flag[] | null;
}

export interface CancellationPolicy {
    __typename:          CancellationPolicyTypename;
    hasFreeCancellation: boolean;
}

export enum CancellationPolicyTypename {
    AttractionsCancellationPolicy = "AttractionsCancellationPolicy",
}

export interface Flag {
    __typename: FlagTypename;
    flag:       string;
    value:      boolean;
    rank:       number;
}

export enum FlagTypename {
    AttractionsProductFlags = "AttractionsProductFlags",
}

export interface Offer {
    __typename: OfferTypename;
    items:      Item[];
}

export enum OfferTypename {
    Offer = "Offer",
}

export interface Item {
    __typename: ItemTypename;
    id:         string;
}

export enum ItemTypename {
    OfferItem = "OfferItem",
}

export interface PrimaryPhoto {
    __typename: PrimaryPhotoTypename;
    small:      string;
}

export enum PrimaryPhotoTypename {
    AttractionsPhoto = "AttractionsPhoto",
}

export interface RepresentativePrice {
    __typename:   RepresentativePriceTypename;
    chargeAmount: number;
    currency:     Currency;
    publicAmount: number;
}

export enum RepresentativePriceTypename {
    AttractionsPrice = "AttractionsPrice",
}

export enum Currency {
    Inr = "INR",
}

export interface ReviewsStats {
    __typename:           ReviewsStatsTypename;
    allReviewsCount:      number;
    percentage:           string;
    combinedNumericStats: CombinedNumericStats;
}

export enum ReviewsStatsTypename {
    AttractionsProductReviewStats = "AttractionsProductReviewStats",
}

export interface CombinedNumericStats {
    __typename: CombinedNumericStatsTypename;
    average:    number;
    total:      number;
}

export enum CombinedNumericStatsTypename {
    AttractionsProductCombinedReviewStats = "AttractionsProductCombinedReviewStats",
}

export interface SupportedFeatures {
    __typename: SupportedFeaturesTypename;
    nativeApp:  boolean;
}

export enum SupportedFeaturesTypename {
    AttractionsProductSupportedFeatures = "AttractionsProductSupportedFeatures",
}

export interface UfiDetails {
    __typename: UfiDetailsTypename;
    bCityName:  BCityName;
    ufi:        number;
    url:        URL;
}

export enum UfiDetailsTypename {
    AttractionLocationResponse = "AttractionLocationResponse",
}

export enum BCityName {
    Albufeira = "Albufeira",
    Lagoa = "Lagoa",
    Lagos = "Lagos",
    Portimão = "Portimão",
}

export interface URL {
    __typename: URLTypename;
    country:    Country;
}

export enum URLTypename {
    AttractionLocationURL = "AttractionLocationUrl",
}

export enum Country {
    Pt = "pt",
}
export interface IActivityPayload {
    id: string,
}