export default interface Pokemon{
    number: number;
    name: string;
    abilities: [{
        ability: {
            name: string;
            url: string;
        };
        is_hidden: boolean;
        slot: number;

    }];
    base_experience: number;
    forms: [{
        name: string;
        url: string;
    }];
    height: number;
    id: number;
    varieties: [{
        is_default: boolean;
        pokemon: {
            name: string;
            url: string;
        }
    }]
  }

  // EVOLUTION CHAIN!