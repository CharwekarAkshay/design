import { Pageable } from "./pageable";

export type Page = {
  pageable: Pageable,
  "totalPages": number,
  "totalElements": number,
  "last": boolean,
  "number": number,
  "sort": {
    "empty": boolean,
    "unsorted": boolean,
    "sorted": boolean
  },
  "size": number,
  "numberOfElements": number,
  "first": boolean,
  "empty": boolean
}
