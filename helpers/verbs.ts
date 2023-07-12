export function getFrenchVerb(number: number): string {
    const frenchVerbs: Record<number, string> = {
        1: 'Accepter',
        2: 'Acheter',
        3: 'Adorer',
        4: 'Aider',
        5: 'Aimer',
        6: 'Ajouter',
        7: 'Amener',
        8: 'Améliorer',
        9: 'Appeler',
        10: 'Apporter',
        11: 'Approcher',
        12: 'Approuver',
        13: 'Appuyer',
        14: 'Arrêter',
        15: 'Arriver',
        16: 'Assassiner',
        17: 'Assurer',
        18: 'Attacher',
        19: 'Attraper',
        20: 'Avancer',
        21: 'Bouger',
        22: 'Booster',
        23: 'Briller',
        24: 'Brûler',
        25: 'Cacher',
        26: 'Capter',
        27: 'Causer',
        28: 'Charger',
        29: 'Charmer',
        30: 'Cesser',
        31: 'Changer',
        32: 'Charmer',
        33: 'Charger',
        34: 'Chercher',
        35: 'Chauffer',
        36: 'Cliquer',
        37: 'Coller',
        38: 'Cogner',
        39: 'Commencer',
        40: 'Compter',
        41: 'Contester',
        42: 'Continuer',
        43: 'Copier',
        44: 'Coucher',
        45: 'Couper',
        46: 'Crier',
        47: 'Croiser',
        48: 'Cultiver',
        49: 'Danser',
        50: 'Décider',
        51: 'Déjeuner',
        52: 'Demander',
        53: 'Détacher',
        54: 'Détester',
        55: 'Deviner',
        56: 'Dîner',
        57: 'Donner',
        58: 'Écouter',
        59: 'Échouer',
        60: 'Élever',
    };
    
    if (number in frenchVerbs) {
      return frenchVerbs[number];
    } else {
      return 'Out of Range';
    }
  }
  
export function getEnglishVerb(number:number): string {
    const englishVerbs: Record<number, string> = {    
        1: 'Accept',
        2: 'Buy',
        3: 'Love',
        4: 'Help',
        5: 'Like',
        6: 'Add',
        7: 'Bring',
        8: 'Improve',
        9: 'Call',
        10: 'Bring',
        11: 'Approach',
        12: 'Approve',
        13: 'Support',
        14: 'Stop',
        15: 'Arrive',
        16: 'Assassinate',
        17: 'Ensure',
        18: 'Attach',
        19: 'Catch',
        20: 'Advance',
        21: 'Move',
        22: 'Boost',
        23: 'Shine',
        24: 'Burn',
        25: 'Hide',
        26: 'Capture',
        27: 'Cause',
        28: 'Load',
        29: 'Charm',
        30: 'Cease',
        31: 'Change',
        32: 'Charm',
        33: 'Charge',
        34: 'Search',
        35: 'Heat',
        36: 'Click',
        37: 'Paste',
        38: 'Hit',
        39: 'Begin',
        40: 'Count',
        41: 'Challenge',
        42: 'Continue',
        43: 'Copy',
        44: 'Lie down',
        45: 'Cut',
        46: 'Shout',
        47: 'Cross',
        48: 'Cultivate',
        49: 'Dance',
        50: 'Decide',
        51: 'Have lunch',
        52: 'Ask',
        53: 'Detach',
        54: 'Hate',
        55: 'Guess',
        56: 'Have dinner',
        57: 'Give',
        58: 'Listen',
        59: 'Fail',
        60: 'Raise',
    }

    if (number in englishVerbs) {
        return englishVerbs[number];
      } else {
        return 'Out of Range';
      }
}