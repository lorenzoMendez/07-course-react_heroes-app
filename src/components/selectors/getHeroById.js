

import { heroes } from "../data/heroes"

export const getHeroById = (heroeId) => {

    return heroes.find(heroe => heroe.id === heroeId);
}
