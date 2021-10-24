export type Pageable = {
  "sort": {
    "empty": boolean,
    "unsorted": boolean,
    "sorted": boolean
  },
  "offset": number,
  "pageNumber": number,
  "pageSize": number,
  "paged": boolean,
  "unpaged": boolean
};
