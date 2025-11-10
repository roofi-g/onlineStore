import {useCategoryFilter} from "./useCategoryFilter";
import {sortSizes} from "../utils/sortSizes";

export default function useSortSizes() {
  const productsByCategory = useCategoryFilter();

  const allSizes = productsByCategory.flatMap(el => el.sizes);
  const uniqueSizes = [...new Set(allSizes)];

  return sortSizes(uniqueSizes);
}
