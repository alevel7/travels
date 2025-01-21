
export interface Destination {
    dest_id: number;
    search_type: string;
    cc1: string;
    type: string;
    hotels: number;
    region: string;
    lc: string;
    image_url: string;
    city_ufi: number | null;
    dest_type: string;
    longitude: number;
    city_name: string;
    name: string;
    nr_hotels: number;
    latitude: number;
    country: string;
    label: string;
    roundtrip: string;
}

export interface IHotelPayload {
    dest_id: number,
    search_type: string,
    arrival_date: string,
    departure_date: string,
}

// interface for hotels

export interface HotelResponse {
    hotels: Hotel[];
    meta: Meta[];
    appear: Appear[];
}

export interface Appear {
    id?: string;
    component?: AppearComponent;
    contentUrl?: string;
}

export interface AppearComponent {
    props: PurpleProps;
}

export interface PurpleProps {
    fill?: boolean;
    content?: Content;
    text?: string;
    title?: string;
}

export interface Content {
    props: ContentProps;
}

export interface ContentProps {
    items: PurpleItem[];
    fitContentWidth: boolean;
}

export interface PurpleItem {
    props: FluffyProps;
}

export interface FluffyProps {
    component?: PropsComponent;
}

export interface PropsComponent {
    props: TentacledProps;
}

export interface TentacledProps {
    spacing?: string;
    items?: FluffyItem[];
    accessibilityLabel?: string;
    variant?: string;
    icon?: string;
    tertiaryTintedColor?: string;
}

export interface FluffyItem {
    props: StickyProps;
}

export interface StickyProps {
    text: Text[];
}

export interface Text {
    font: string;
    text: string;
    color?: string;
    linkActions?: LinkAction[];
}

export interface LinkAction {
    props: LinkActionProps;
}

export interface LinkActionProps {
    url: string;
}

export interface Hotel {
    hotel_id: number;
    accessibilityLabel: string;
    property: Property;
}

export interface Property {
    ufi: number;
    latitude: number;
    countryCode: CountryCode;
    currency: PropertyCurrency;
    qualityClass: number;
    checkinDate: string;
    isFirstPage: boolean;
    reviewScoreWord: string;
    blockIds: string[];
    photoUrls: string[];
    reviewScore: number;
    accuratePropertyClass: number;
    checkin: Check;
    position: number;
    optOutFromGalleryChanges: number;
    longitude: number;
    checkoutDate: string;
    checkout: Check;
    mainPhotoId: number;
    isPreferred?: boolean;
    name: string;
    propertyClass: number;
    rankingPosition: number;
    reviewCount: number;
    wishlistName: WishlistName;
    id: number;
    priceBreakdown: PriceBreakdown;
}

export interface Check {
    fromTime: FromTime;
    untilTime: UntilTime;
}

export enum FromTime {
    The0000 = "00:00",
    The1200 = "12:00",
    The1400 = "14:00",
    The1500 = "15:00",
}

export enum UntilTime {
    The0000 = "00:00",
    The1100 = "11:00",
    The1200 = "12:00",
}

export enum CountryCode {
    In = "in",
}

export enum PropertyCurrency {
    Inr = "INR",
}

export interface PriceBreakdown {
    grossPrice: Price;
    taxExceptions: unknown;
    benefitBadges: BenefitBadge[];
    excludedPrice: Price;
    strikethroughPrice?: Price;
}

export interface BenefitBadge {
    identifier: Identifier;
    variant: Variant;
    explanation: Explanation;
    text: Explanation;
}

export enum Explanation {
    Early2025Deal = "Early 2025 Deal",
    MobileOnlyPrice = "Mobile-only price",
}

export enum Identifier {
    EarlyYearDeals = "Early Year Deals",
    MobileRate = "Mobile Rate",
}

export enum Variant {
    Constructive = "constructive",
}

export interface Price {
    currency: ExcludedPriceCurrency;
    value: number;
}

export enum ExcludedPriceCurrency {
    Aed = "AED",
}

export enum WishlistName {
    Mumbai = "Mumbai",
}

export interface Meta {
    title: string;
}

