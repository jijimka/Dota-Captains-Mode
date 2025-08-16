import {gql} from "@apollo/client";

export const GET_MATCHUPS = (heroId: number) => {
    return gql(`query HeroSynergy {
  heroStats {
    matchUp(heroId: ${heroId}, take: 200, bracketBasicIds: DIVINE_IMMORTAL) {
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