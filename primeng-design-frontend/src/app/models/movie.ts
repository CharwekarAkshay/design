export type Movie = {
    "id": string,
    "plot": string,
    "genres": Array<string>,
    "runtime": number,
    "cast": Array<string>,
    "poster": string,
    "title": string,
    "fullplot": string,
    "languages": Array<string>,
    "released": {
      "$date": {
        "$numberLong": string
      }
    },
    "directors": Array<string>,
    "rated": string,
    "awards": {
      "wins": number,
      "nominations": number,
      "text": string
    },
    "lastupdated": string,
    "year": number,
    "imdb": {
      "rating": number,
      "votes": number,
      "id": number
    },
    "countries": Array<string>,
    "type": string,
    "tomatoes": {
      "viewer": {
        "rating": number,
        "numReviews": number,
        "meter": number
      },
      "fresh": number,
      "critic": {
        "rating": number,
        "numReviews": number,
        "meter": number
      },
      "rotten": number,
      "lastUpdated": {
        "$date": string
      }
    }
  };
