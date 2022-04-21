export interface ExternalUrls {
    spotify: string;
}

export interface Artist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface ExternalUrls2 {
    spotify: string;
}

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls2;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface ExternalUrls3 {
    spotify: string;
}

export interface Artist2 {
    external_urls: ExternalUrls3;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface ExternalIds {
    isrc: string;
}

export interface ExternalUrls4 {
    spotify: string;
}

export interface Item {
    album: Album;
    artists: Artist2[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls4;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url?: any;
    track_number: number;
    type: string;
    uri: string;
}

export interface Tracks {
    href: string;
    items: Item[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface ExternalUrls5 {
    spotify: string;
}

export interface Followers {
    href?: any;
    total: number;
}

export interface Image2 {
    height: number;
    url: string;
    width: number;
}

export interface Item2 {
    external_urls: ExternalUrls5;
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Image2[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
}

export interface Artists {
    href: string;
    items: Item2[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface ExternalUrls6 {
    spotify: string;
}

export interface Artist3 {
    external_urls: ExternalUrls6;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface Item3 {
    album_type: string;
    artists: Artist3[];
}

export interface Albums {
    href: string;
    items: Item3[];
}

export interface SpotifyModel {
    tracks: Tracks;
    artists: Artists;
    albums: Albums;
}
