export function getFrenchAdj(number: number): string {
    const frenchWords: Record<number, string> = {
        1: 'Adroit',
        2: 'Brillant',
        3: 'Compétent',
        4: 'Débrouillard',
        5: 'Excellent',
        6: 'Habile',
        7: 'Instruit',
        8: 'Intelligent',
        9: 'Savant',
        10: 'Talentueux',
        11: 'Ambitieux',
        12: 'Appliqué',
        13: 'Déterminé',
        14: 'Dévoué',
        15: 'Persévérant',
        16: 'Sérieux',
        17: 'Studieux',
        18: 'Tenance',
        19: 'Vailant',
        20: 'Audacieux',
        21: 'Brave',
        22: 'Confiant',
        23: 'Héroïque',
        24: 'Actif',
        25: 'Athlétique',
        26: 'Dynamique',
        27: 'Énergique',
        28: 'Attentif',
        29: 'Discret',
        30: 'Paisible',
    };
    
    if (number in frenchWords) {
      return frenchWords[number];
    } else {
      return 'Out of Range';
    }
  }
  
  export function getEnglishAdj(number:number): string {
    const englishWords: Record<number, string> = {
        1: 'Skillful',
        2: 'Brilliant',
        3: 'Competent',
        4: 'Resourceful',
        5: 'Excellent',
        6: 'Skillful',
        7: 'Educated',
        8: 'Intelligent',
        9: 'Learned',
        10: 'Talented',
        11: 'Ambitious',
        12: 'Diligent',
        13: 'Determined',
        14: 'Devoted',
        15: 'Persistent',
        16: 'Serious',
        17: 'Studious',
        18: 'Tenacious',
        19: 'Valiant',
        20: 'Daring',
        21: 'Brave',
        22: 'Confident',
        23: 'Heroic',
        24: 'Active',
        25: 'Athletic',
        26: 'Dynamic',
        27: 'Energetic',
        28: 'Attentive',
        29: 'Discreet',
        30: 'Peaceful',
    }

    if (number in englishWords) {
        return englishWords[number];
      } else {
        return 'Out of Range';
      }
}