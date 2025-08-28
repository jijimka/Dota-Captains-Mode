import {gql} from "@apollo/client";

export const GET_MATCHUPS = () => {
    return gql(`query HeroSynergy($heroId: Short = 0) {
  heroStats {
    matchUp(heroId: $heroId, take: 200) {
      heroId
      vs {
        heroId2
        synergy
      }
      with {
        heroId2
        synergy
      }
    }
  }
}`)
}