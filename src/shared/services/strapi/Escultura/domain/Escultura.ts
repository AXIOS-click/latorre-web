export interface IStrapiScultureAndPaints {
    id: number;
    attributes: ISculturesOrPaints;
}

export interface ISculturesOrPaints {
    Titulo: string;
    Serie: string;
    Materiales: string;
    Medidas: string;
    Anio: Date;
    ExplicacionSimple: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    Imagenes: Imagenes;
    ImagenPrincipal: ImagenPrincipal;
}

export interface ImagenPrincipal {
    data: DAT;
}

export interface DAT {
    id: number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: EXT;
    mime: MIME;
    size: number;
    url: string;
    previewUrl: null;
    provider: Provider;
    provider_metadata: null;
    createdAt: Date;
    updatedAt: Date;
}

export enum EXT {
    Jpg = ".jpg",
}

export interface Formats {
    thumbnail: Thumbnail;
}

export interface Thumbnail {
    name: string;
    hash: string;
    ext: EXT;
    mime: MIME;
    path: null;
    width: number;
    height: number;
    size: number;
    url: string;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
}

export enum Provider {
    Local = "local",
}

export interface Imagenes {
    data: DAT[];
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
