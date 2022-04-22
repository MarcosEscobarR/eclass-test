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

export interface Image {
    height: number;
    url: string;
    width: number;
}

export interface Album {
    album_type: string;
    artists: Artist[];
    available_markets: string[];
    external_urls: ExternalUrls;
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


export interface ExternalIds {
    isrc: string;
}

export interface Item {
    album: Album;
    images: Image[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url?: any;
    track_number: number;
    type: string;
    url: string;
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

export interface Artists {
    href: string;
    items: Item[];
    limit: number;
    next: string;
    offset: number;
    previous: string;
    total: number;
}

export interface Albums {
    href: string;
    items: Item[];
}

export interface SpotifyModel {
    tracks: Tracks;
    artists: Artists;
    albums: Albums;
}

