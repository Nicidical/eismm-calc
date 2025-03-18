import type * as I from './interface';
import {type DeepPartial, toID, extend, assignWithout} from '../util';

export interface SpeciesData {
  readonly types: [I.TypeName] | [I.TypeName, I.TypeName];
  // TODO: replace with baseStats
  readonly bs: {
    hp: number;
    at: number;
    df: number;
    sa?: number;
    sd?: number;
    sp: number;
    sl?: number;
  };
  readonly weightkg: number; // weight
  readonly nfe?: boolean;
  readonly gender?: I.GenderName;
  readonly otherFormes?: string[];
  readonly baseSpecies?: string;
  readonly abilities?: {0: string}; // ability
}

const RBY: {[name: string]: SpeciesData} = {
  Snorlax: {
    types: ['Normal'],
    bs: {hp: 168, at: 116, df: 68, sp: 34, sl: 68},
    weightkg: 460,
  },
  Staryu: {
    types: ['Water'],
    bs: {hp: 50, at: 75, df: 92, sp: 144, sl: 117},
    weightkg: 34.5,
  },
};

const GSC_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  // gen 1 pokemon changes
  Snorlax: {bs: {sa: 68, sd: 116}},
  Staryu: {bs: {sa: 117, sd: 92}, gender: 'N'},
  // gen 2 pokemon
  Cleffa: {
    types: ['Normal'],
    bs: {hp: 130, at: 65, df: 73, sa: 117, sd: 143, sp: 42},
    weightkg: 3,
  },
  Corsola: {
    types: ['Water', 'Rock'],
    bs: {hp: 90, at: 76, df: 132, sa: 90, sd: 132, sp: 50},
    weightkg: 5,
  },
  Dunsparce: {
    types: ['Normal'],
    bs: {hp: 137, at: 96, df: 96, sa: 89, sd: 89, sp: 63},
    weightkg: 14,
  },
  Wooper: {
    types: ['Water', 'Ground'],
    bs: {hp: 149, at: 122, df: 122, sa: 67, sd: 67, sp: 43},
    weightkg: 8.5,
  },
};
const GSC: {[name: string]: SpeciesData} = extend(true, {}, RBY, GSC_PATCH);

const ADV_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  // gen 1 pokemon changes
  Snorlax: {abilities: {0: 'Lithoforge'}},
  Staryu: {abilities: {0: 'Protosynthesis'}},
  // gen 2 pokemon changes
  Cleffa: {abilities: {0: 'Psionization'}},
  Corsola: {abilities: {0: 'Lithoforge'}},
  Dunsparce: {abilities: {0: 'Protosynthesis'}},
  Wooper: {abilities: {0: 'Quark Drive'}},
  // gen 3 pokemon
  Camerupt: {
    types: ['Fire', 'Ground'],
    bs: {hp: 86, at: 123, df: 86, sa: 130, sd: 92, sp: 53},
    weightkg: 220,
    abilities: {0: 'Magirise'},
  },
  Dusclops: {
    types: ['Ghost'],
    bs: {hp: 50, at: 87, df: 162, sa: 75, sd: 162, sp: 34},
    weightkg: 30.6,
    abilities: {0: 'Magirise'},
  },
  Volbeat: {
    types: ['Bug'],
    bs: {hp: 86, at: 96, df: 99, sa: 62, sd: 112, sp: 115},
    weightkg: 17.7,
    abilities: {0: 'Verdaboost'},
  },
};

const ADV: {[name: string]: SpeciesData} = extend(true, {}, GSC, ADV_PATCH);

const DPP_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Chingling: {
    types: ['Psychic'],
    bs: {hp: 90, at: 60, df: 100, sa: 130, sd: 100, sp: 90},
    weightkg: 0.6,
    abilities: {0: 'Aquaform'},
  },
  Garchomp: {
    types: ['Dragon', 'Ground'],
    bs: {hp: 102, at: 123, df: 90, sa: 76, sd: 80, sp: 99},
    weightkg: 95,
    abilities: {0: 'Quark Drive'},
  },
};

const DPP: {[name: string]: SpeciesData} = extend(true, {}, ADV, DPP_PATCH);

const BW_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Duosion: {
    types: ['Psychic'],
    bs: {hp: 100, at: 61, df: 77, sa: 192, sd: 92, sp: 48},
    weightkg: 8,
    abilities: {0: 'Protosynthesis'},
  },
  Golett: {
    types: ['Ground', 'Ghost'],
    bs: {hp: 110, at: 139, df: 94, sa: 65, sd: 94, sp: 68},
    weightkg: 92,
    gender: 'N',
    abilities: {0: 'Aquaform'},
  },
  Timburr: {
    types: ['Fighting'],
    bs: {hp: 140, at: 149, df: 102, sa: 46, sd: 65, sp: 68},
    weightkg: 12.5,
    abilities: {0: 'Protosynthesis'},
  },
};

const BW: {[name: string]: SpeciesData} = extend(true, {}, DPP, BW_PATCH);

// @ts-ignore readonly

const XY_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Cleffa: {types: ['Fairy']},
  'Aegislash-Shield': {
    types: ['Steel', 'Ghost'],
    bs: {hp: 68, at: 57, df: 159, sa: 57, sd: 159, sp: 70},
    weightkg: 53,
    abilities: {0: 'Lithoforge'},
  },
  Greninja: {
    types: ['Water', 'Dark'],
    bs: {hp: 77, at: 102, df: 72, sa: 110, sd: 76, sp: 133},
    weightkg: 40,
    abilities: {0: 'Aquaform'},
  },
};

const XY: {[name: string]: SpeciesData} = extend(true, {}, BW, XY_PATCH);

const SM_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Cosmoem: {
    types: ['Psychic'],
    bs: {hp: 61, at: 41, df: 186, sa: 41, sd: 186, sp: 55},
    weightkg: 999.9,
    gender: 'N',
    abilities: {0: 'Magirise'},
  },
  Melmetal: {
    types: ['Steel'],
    bs: {hp: 128, at: 135, df: 135, sa: 76, sd: 61, sp: 35},
    weightkg: 800,
    gender: 'N',
    abilities: {0: 'Lithoforge'},
  },
  Pyukumuku: {
    types: ['Water'],
    bs: {hp: 76, at: 83, df: 180, sa: 41, sd: 180, sp: 10},
    weightkg: 1.2,
    abilities: {0: 'Aquaform'},
  },
  Vikavolt: {
    types: ['Bug', 'Electric'],
    bs: {hp: 87, at: 79, df: 102, sa: 165, sd: 85, sp: 52},
    weightkg: 45,
    abilities: {0: 'Psionization'},
  },
};

const SM: {[name: string]: SpeciesData} = extend(true, {}, XY, SM_PATCH);

const SS_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Cursola: {
    types: ['Ghost'],
    bs: {hp: 67, at: 106, df: 55, sa: 162, sd: 145, sp: 35},
    weightkg: 0.4,
    abilities: {0: 'Verdaboost'},
  },
};

const SS: {[name: string]: SpeciesData} = extend(true, {}, SM, SS_PATCH);

const SV: {[name: string]: SpeciesData} = extend(true, {}, SS);

export const SPECIES = [{}, RBY, GSC, ADV, DPP, BW, XY, SM, SS, SV];

export class Species implements I.Species {
  private readonly gen: I.GenerationNum;

  constructor(gen: I.GenerationNum) {
    this.gen = gen;
  }

  get(id: I.ID) {
    return SPECIES_BY_ID[this.gen][id];
  }

  *[Symbol.iterator]() {
    for (const id in SPECIES_BY_ID[this.gen]) {
      yield this.get(id as I.ID)!;
    }
  }
}

class Specie implements I.Specie {
  readonly kind: 'Species';
  readonly id: I.ID;
  readonly name: I.SpeciesName;
  readonly types!: [I.TypeName] | [I.TypeName, I.TypeName];
  readonly baseStats: Readonly<I.StatsTable>;
  readonly weightkg!: number; // weight
  readonly nfe?: boolean;
  readonly gender?: I.GenderName;
  readonly otherFormes?: I.SpeciesName[];
  readonly baseSpecies?: I.SpeciesName;
  readonly abilities?: {0: I.AbilityName}; // ability

  private static readonly EXCLUDE = new Set(['bs', 'otherFormes']);

  constructor(name: string, data: SpeciesData) {
    this.kind = 'Species';
    this.id = toID(name);
    this.name = name as I.SpeciesName;

    const baseStats: Partial<I.StatsTable> = {};
    baseStats.hp = data.bs.hp;
    baseStats.atk = data.bs.at;
    baseStats.def = data.bs.df;
    baseStats.spa = gen >= 2 ? data.bs.sa : data.bs.sl;
    baseStats.spd = gen >= 2 ? data.bs.sd : data.bs.sl;
    baseStats.spe = data.bs.sp;
    this.baseStats = baseStats as I.StatsTable;
    // Hack for getting Gmax pokemon out of existence in Gen 9+
    if (data.otherFormes) {
      this.otherFormes = data.otherFormes as I.SpeciesName[];
      if (gen >= 9 && !['toxtricity', 'urshifu'].includes(this.id)) {
        this.otherFormes = this.otherFormes.filter(f => !f.endsWith('-Gmax'));
        if (!this.otherFormes.length) this.otherFormes = undefined;
        if (this.otherFormes) this.otherFormes = [...new Set(this.otherFormes)];
      }
    }

    assignWithout(this, data, Specie.EXCLUDE);
  }
}
const SPECIES_BY_ID: Array<{[id: string]: Specie}> = [];

let gen = 0;
for (const species of SPECIES) {
  const map: {[id: string]: Specie} = {};
  for (const specie in species) {
    if (gen >= 2 && species[specie].bs.sl) delete species[specie].bs.sl;
    const m = new Specie(specie, species[specie]);
    map[m.id] = m;
  }
  SPECIES_BY_ID.push(map);
  gen++;
}
