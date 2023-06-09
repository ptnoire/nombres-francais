export function getOrdinalWord(number: number): string {
    const frenchWords: Record<number, string> = {
        1: 'premier',
        2: 'deuxième',
        3: 'troisième',
        4: 'quatrième',
        5: 'cinquième',
        6: 'sixième',
        7: 'septième',
        8: 'huitième',
        9: 'neuvième',
        10: 'dixième',
        11: 'onzième',
        12: 'douzième',
        13: 'treizième',
        14: 'quatorzième',
        15: 'quinzième',
        16: 'seizième',
        17: 'dix-septième',
        18: 'dix-huitième',
        19: 'dix-neuvième',
        20: 'vingtième',
        21: 'vingt et unième',
        22: 'vingt-deuxième',
        23: 'vingt-troisième',
        24: 'vingt-quatrième',
        25: 'vingt-cinquième',
        26: 'vingt-sixième',
        27: 'vingt-septième',
        28: 'vingt-huitième',
        29: 'vingt-neuvième',
        30: 'trentième',
        31: 'trente et unième'
    };
    
    if (number in frenchWords) {
      return frenchWords[number];
    } else {
      return 'Out of Range';
    }
  }