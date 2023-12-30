import { ClothingType } from "@/types/clothing-type";
import { UsableTemperatureRange } from "@/types/usableTemperatureRange";

export interface ClothingDTO {
  id: string;
  clothing_type: ClothingType | string;
  usableTemperatureRange: UsableTemperatureRange;
  name: string;
  is_precipitation_proof: boolean;
  icon_path: string;
}
