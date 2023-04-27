import { SaleInfo } from "./sale-info";
import { VolumeInfo } from "./volume-info";

export interface Book {
    id: string;
    saleInfo: SaleInfo;
    volumeInfo: VolumeInfo;
}