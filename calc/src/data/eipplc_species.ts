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
  Lickitung: {
    types: ['Normal'],
    bs: {hp: 90, at: 55, df: 75, sp: 30, sl: 60},
    weightkg: 65.5,
  },
};

const GSC_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  // gen 1 pokemon changes
  Lickitung: {bs: {sa: 60, sd: 75}},
  // gen 2 pokemon
  Aipom: {types: ['Normal'], bs: {hp: 55, at: 70, df: 55, sa: 40, sd: 55, sp: 85}, weightkg: 11.5},
  Chinchou: {
    types: ['Water', 'Electric'],
    bs: {hp: 75, at: 38, df: 38, sa: 56, sd: 56, sp: 67},
    weightkg: 12,
    nfe: true,
  },
  Hoppip: {
    types: ['Grass', 'Flying'],
    bs: {hp: 35, at: 35, df: 40, sa: 35, sd: 55, sp: 50},
    weightkg: 0.5,
    nfe: true,
  },
  Houndour: {
    types: ['Dark', 'Fire'],
    bs: {hp: 45, at: 60, df: 30, sa: 80, sd: 50, sp: 65},
    weightkg: 10.8,
    nfe: true,
  },
  Pichu: {
    types: ['Electric'],
    bs: {hp: 20, at: 40, df: 15, sa: 35, sd: 35, sp: 60},
    weightkg: 2,
    nfe: true,
  },
  Teddiursa: {
    types: ['Normal'],
    bs: {hp: 60, at: 80, df: 50, sa: 50, sd: 50, sp: 40},
    weightkg: 8.8,
    nfe: true,
  },
  Totodile: {
    types: ['Water'],
    bs: {hp: 50, at: 65, df: 64, sa: 44, sd: 48, sp: 43},
    weightkg: 9.5,
    nfe: true,
  },
};
const GSC: {[name: string]: SpeciesData} = extend(true, {}, RBY, GSC_PATCH);

const ADV_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  // gen 1 pokemon changes
  Lickitung: {abilities: {0: 'Own Tempo'}},
  // gen 2 pokemon changes
  Aipom: {abilities: {0: 'Run Away'}},
  Chinchou: {abilities: {0: 'Volt Absorb'}},
  Hoppip: {abilities: {0: 'Chlorophyll'}},
  Houndour: {abilities: {0: 'Early Bird'}},
  Pichu: {abilities: {0: 'Static'}},
  Teddiursa: {abilities: {0: 'Pickup'}},
  Totodile: {abilities: {0: 'Torrent'}},
  // gen 3 pokemon
  Gulpin: {
    types: ['Poison'],
    bs: {hp: 70, at: 43, df: 53, sa: 43, sd: 53, sp: 40},
    weightkg: 10.3,
    nfe: true,
    abilities: {0: 'Liquid Ooze'},
  },
  Numel: {
    types: ['Fire', 'Ground'],
    bs: {hp: 60, at: 60, df: 40, sa: 65, sd: 45, sp: 35},
    weightkg: 24,
    nfe: true,
    abilities: {0: 'Oblivious'},
  },
  Swablu: {
    types: ['Normal', 'Flying'],
    bs: {hp: 45, at: 40, df: 60, sa: 40, sd: 75, sp: 50},
    weightkg: 1.2,
    nfe: true,
    abilities: {0: 'Natural Cure'},
  },
  Torchic: {
    types: ['Fire'],
    bs: {hp: 45, at: 60, df: 40, sa: 70, sd: 50, sp: 45},
    weightkg: 2.5,
    nfe: true,
    abilities: {0: 'Blaze'},
  },
  Treecko: {
    types: ['Grass'],
    bs: {hp: 40, at: 45, df: 35, sa: 65, sd: 55, sp: 70},
    weightkg: 5,
    nfe: true,
    abilities: {0: 'Overgrow'},
  },
};

const ADV: {[name: string]: SpeciesData} = extend(true, {}, GSC, ADV_PATCH);

const DPP_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Aipom: {nfe: true},
  Lickitung: {nfe: true},
  Bronzor: {
    types: ['Steel', 'Psychic'],
    bs: {hp: 57, at: 24, df: 86, sa: 24, sd: 86, sp: 23},
    weightkg: 60.5,
    nfe: true,
    gender: 'N',
    abilities: {0: 'Levitate'},
  },
  Gible: {
    types: ['Dragon', 'Ground'],
    bs: {hp: 58, at: 70, df: 45, sa: 40, sd: 45, sp: 42},
    weightkg: 20.5,
    nfe: true,
    abilities: {0: 'Sand Veil'},
  },
  Munchlax: {
    types: ['Normal'],
    bs: {hp: 135, at: 85, df: 40, sa: 40, sd: 85, sp: 5},
    weightkg: 105,
    nfe: true,
    abilities: {0: 'Pickup'},
  },
  Riolu: {
    types: ['Fighting'],
    bs: {hp: 40, at: 70, df: 40, sa: 35, sd: 40, sp: 60},
    weightkg: 20.2,
    nfe: true,
    abilities: {0: 'Steadfast'},
  },
  Stunky: {
    types: ['Poison', 'Dark'],
    bs: {hp: 63, at: 63, df: 47, sa: 41, sd: 41, sp: 74},
    weightkg: 19.2,
    nfe: true,
    abilities: {0: 'Stench'},
  },
};

const DPP: {[name: string]: SpeciesData} = extend(true, {}, ADV, DPP_PATCH);

const BW_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Cottonee: {
    types: ['Grass'],
    bs: {hp: 40, at: 27, df: 60, sa: 37, sd: 50, sp: 66},
    weightkg: 0.6,
    nfe: true,
    abilities: {0: 'Prankster'},
  },
  Ducklett: {
    types: ['Water', 'Flying'],
    bs: {hp: 62, at: 44, df: 50, sa: 44, sd: 50, sp: 55},
    weightkg: 5.5,
    nfe: true,
    abilities: {0: 'Keen Eye'},
  },
  Elgyem: {
    types: ['Psychic'],
    bs: {hp: 55, at: 55, df: 55, sa: 85, sd: 55, sp: 30},
    weightkg: 9,
    nfe: true,
    abilities: {0: 'Telepathy'},
  },
  Joltik: {
    types: ['Bug', 'Electric'],
    bs: {hp: 50, at: 47, df: 50, sa: 57, sd: 50, sp: 65},
    weightkg: 0.6,
    nfe: true,
    abilities: {0: 'Compound Eyes'},
  },
  Mienfoo: {
    types: ['Fighting'],
    bs: {hp: 45, at: 85, df: 50, sa: 55, sd: 50, sp: 65},
    weightkg: 20,
    nfe: true,
    abilities: {0: 'Inner Focus'},
  },
  Pawniard: {
    types: ['Dark', 'Steel'],
    bs: {hp: 45, at: 85, df: 70, sa: 40, sd: 40, sp: 60},
    weightkg: 10.2,
    nfe: true,
    abilities: {0: 'Defiant'},
  },
  Pidove: {
    types: ['Normal', 'Flying'],
    bs: {hp: 50, at: 55, df: 50, sa: 36, sd: 30, sp: 43},
    weightkg: 2.1,
    nfe: true,
    abilities: {0: 'Big Pecks'},
  },
  Tepig: {
    types: ['Fire'],
    bs: {hp: 65, at: 63, df: 45, sa: 45, sd: 45, sp: 45},
    weightkg: 9.9,
    nfe: true,
    abilities: {0: 'Blaze'},
  },
  Timburr: {
    types: ['Fighting'],
    bs: {hp: 75, at: 80, df: 55, sa: 25, sd: 35, sp: 35},
    weightkg: 12.5,
    nfe: true,
    abilities: {0: 'Guts'},
  },
  Zorua: {
    types: ['Dark'],
    bs: {hp: 40, at: 65, df: 40, sa: 80, sd: 40, sp: 65},
    weightkg: 12.5,
    abilities: {0: 'Illusion'},
    nfe: true,
  },
};

const BW: {[name: string]: SpeciesData} = extend(true, {}, DPP, BW_PATCH);

// @ts-ignore readonly

const XY_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Cottonee: {types: ['Grass', 'Fairy']},
  Espurr: {
    types: ['Psychic'],
    bs: {hp: 62, at: 48, df: 54, sa: 63, sd: 60, sp: 68},
    weightkg: 3.5,
    nfe: true,
    abilities: {0: 'Keen Eye'},
  },
  Froakie: {
    types: ['Water'],
    bs: {hp: 41, at: 56, df: 40, sa: 62, sd: 44, sp: 71},
    weightkg: 7,
    nfe: true,
    abilities: {0: 'Torrent'},
  },
  Litleo: {
    types: ['Fire', 'Normal'],
    bs: {hp: 62, at: 50, df: 58, sa: 73, sd: 54, sp: 72},
    weightkg: 13.5,
    nfe: true,
    abilities: {0: 'Rivalry'},
  },
  Skrelp: {
    types: ['Poison', 'Water'],
    bs: {hp: 50, at: 60, df: 60, sa: 60, sd: 60, sp: 30},
    weightkg: 7.3,
    nfe: true,
    abilities: {0: 'Poison Point'},
  },
};

const XY: {[name: string]: SpeciesData} = extend(true, {}, BW, XY_PATCH);

const SM_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  'Grimer-Alola': {
    types: ['Poison', 'Dark'],
    bs: {hp: 80, at: 80, df: 50, sa: 40, sd: 50, sp: 25},
    weightkg: 42,
    nfe: true,
    abilities: {0: 'Poison Touch'},
  },
  Mudbray: {
    types: ['Ground'],
    bs: {hp: 70, at: 100, df: 70, sa: 45, sd: 55, sp: 45},
    weightkg: 110,
    nfe: true,
    abilities: {0: 'Own Tempo'},
  },
  Poipole: {
    types: ['Poison'],
    bs: {hp: 67, at: 73, df: 67, sa: 73, sd: 67, sp: 73},
    weightkg: 1.8,
    abilities: {0: 'Beast Boost'},
    nfe: true,
    gender: 'N',
  },
  Stufful: {
    types: ['Normal', 'Fighting'],
    bs: {hp: 70, at: 75, df: 50, sa: 45, sd: 50, sp: 50},
    weightkg: 6.8,
    abilities: {0: 'Fluffy'},
    nfe: true,
  },
};

const SM: {[name: string]: SpeciesData} = extend(true, {}, XY, SM_PATCH);

const SS_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  'Farfetch\u2019d-Galar': {
    types: ['Fighting'],
    bs: {hp: 52, at: 95, df: 55, sa: 58, sd: 62, sp: 55},
    weightkg: 42,
    abilities: {0: 'Steadfast'},
    nfe: true,
  },
  Grookey: {
    types: ['Grass'],
    bs: {hp: 50, at: 65, df: 50, sa: 40, sd: 40, sp: 65},
    weightkg: 5,
    abilities: {0: 'Overgrow'},
    nfe: true,
  },
  Hatenna: {
    types: ['Psychic'],
    bs: {hp: 42, at: 30, df: 45, sa: 56, sd: 53, sp: 39},
    weightkg: 3.4,
    abilities: {0: 'Healer'},
    nfe: true,
  },
  'Kubfu': {
    types: ['Fighting'],
    bs: {hp: 60, at: 90, df: 60, sa: 53, sd: 50, sp: 72},
    weightkg: 12,
    nfe: true,
    abilities: {0: 'Inner Focus'},
  },
  'Meowth-Galar': {
    types: ['Steel'],
    bs: {hp: 50, at: 65, df: 55, sa: 40, sd: 40, sp: 40},
    weightkg: 7.5,
    abilities: {0: 'Pickup'},
    nfe: true,
  },
};

const SS: {[name: string]: SpeciesData} = extend(true, {}, SM, SS_PATCH);

const PLA_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Zorua: {otherFormes: ['Zorua-Hisui']},
  'Zorua-Hisui': {
    types: ['Normal', 'Ghost'],
    bs: {hp: 35, at: 60, df: 40, sa: 85, sd: 40, sp: 70},
    weightkg: 12.5,
    abilities: {0: 'Illusion'},
    baseSpecies: 'Zorua',
    nfe: true,
  },
};

const SV_PATCH: {[name: string]: DeepPartial<SpeciesData>} = {
  Shroodle: {
    types: ['Poison', 'Normal'],
    bs: {hp: 40, at: 65, df: 35, sa: 40, sd: 35, sp: 75},
    weightkg: 0.7,
    abilities: {0: 'Unburden'},
    nfe: true,
  },
  Tinkatink: {
    types: ['Fairy', 'Steel'],
    bs: {hp: 50, at: 45, df: 45, sa: 35, sd: 64, sp: 58},
    weightkg: 8.9,
    abilities: {0: 'Mold Breaker'},
    nfe: true,
  },
};

const SV: {[name: string]: SpeciesData} = extend(true, {}, SS, SV_PATCH, PLA_PATCH);

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
