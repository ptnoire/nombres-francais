export function getMainFrenchVerb(number: number): string {
    const frenchWords: Record<number, string> = {
        1: "Aller",
        2: "S'appeler",
        3: "Attendre",
        4: 'Avoir',
        5: 'Boire',
        6: 'Conduire',
        7: 'Connaître',
        8: 'Courir',
        9: 'Devoir',
        10: 'Dire',
        11: 'Écrire',
        12: 'Être',
        13: 'Faire',
        14: 'Finir',
        15: 'Lire',
        16: 'Manger',
        17: 'Mettre',
        18: 'Offrir',
        19: 'Parler',
        20: 'Pouvoir',
        21: 'Prendre',
        22: 'Recevoir',
        23: 'Savoir',
        24: 'Suivre',
        25: 'Venir',
        26: 'Voir',
        27: 'Vouloir',
    };
    
    if (number in frenchWords) {
      return frenchWords[number];
    } else {
      return 'Out of Range';
    }
  }
  
  export function getFrenchVersion(number: number, version: number): string[] {
    const frenchTranslations: Record<number, string[]> = {
        1: ['vais', 'allez', 'allons', 'va', 'va', 'vont', 'vas', 'vont', 'va'],
        2: ['m\'appelle', 'vous appelez', 'nous appelons', 's\'appelle', 's\'appelle', 's\'appellent', 't\'appelles', 's\'appellent', 's\'appelle'],
        3: ['attends', 'attendez', 'attendons', 'attend', 'attend', 'attendent', 'attends', 'attendent', 'attend'],
        4: ['ai', 'avez', 'avons', 'a', 'a', 'ont', 'as', 'ont', 'a'],
        5: ['bois', 'buvez', 'buvons', 'boit', 'boit', 'boivent', 'bois', 'boivent', 'boit'],
        6: ['conduis', 'conduisez', 'conduisons', 'conduit', 'conduit', 'conduisent', 'conduis', 'conduisent', 'conduit'],
        7: ['connais', 'connaissez', 'connaissons', 'connait', 'connait', 'connaissent', 'connais', 'connaissent', 'connait'],
        8: ['cours', 'courez', 'courons', 'court', 'court', 'courent', 'cours', 'courent', 'court'],
        9: ['dois', 'devez', 'devons', 'doit', 'doit', 'doivent', 'dois', 'doivent', 'doit'],
        10: ['dis', 'dites', 'disons', 'dit', 'dit', 'disent', 'dis', 'disent', 'dit'],
        11: ['écris', 'écrivez', 'écrivons', 'écrit', 'écrit', 'écrivent', 'écris', 'écrivent', 'écrit'],
        12: ['suis', 'êtes', 'sommes', 'est', 'est', 'sont', 'es', 'sont', 'est'],
        13: ['fais', 'faites', 'faisons', 'fait', 'fait', 'font', 'fais', 'font', 'fait'],
        14: ['finis', 'finissez', 'finissons', 'finit', 'finit', 'finissent', 'finis', 'finissent', 'finit'],
        15: ['lis', 'lisez', 'lisons', 'lit', 'lit', 'lisent', 'lis', 'lisent', 'lit'],
        16: ['mange', 'mangez', 'mangeons', 'mange', 'mange', 'mangent', 'manges', 'mangent', 'mange'],
        17: ['mets', 'mettez', 'mettons', 'met', 'met', 'mettent', 'mets', 'mettent', 'met'],
        18: ['offre', 'offrez', 'offrons', 'offre', 'offre', 'offrent', 'offres', 'offrent', 'offre'],
        19: ['parle', 'parlez', 'parlons', 'parle', 'parle', 'parlent', 'parles', 'parlent', 'parle'],
        20: ['peux', 'pouvez', 'pouvons', 'peut', 'peut', 'peuvent', 'peux', 'peuvent', 'peut'],
        21: ['prends', 'prenez', 'prenons', 'prend', 'prend', 'prennent', 'prends', 'prennent', 'prend'],
        22: ['reçois', 'recevez', 'recevons', 'reçoit', 'reçoit', 'reçoivent', 'reçois', 'reçoivent', 'reçoit'],
        23: ['sais', 'savez', 'savons', 'sait', 'sait', 'savent', 'sais', 'savent', 'sait'],
        24: ['suis', 'suivez', 'suivons', 'suit', 'suit', 'suivent', 'suis', 'suivent', 'suit'],
        25: ['viens', 'venez', 'venons', 'vient', 'vient', 'viennent', 'viens', 'viennent', 'vient'],
        26: ['vois', 'voyez', 'voyons', 'voit', 'voit', 'voient', 'vois', 'voient', 'voit'],
        27: ['veux', 'voulez', 'voulons', 'veut', 'veut', 'veulent', 'veux', 'veulent', 'veut'],
    };

    if (number in frenchTranslations) {
        const wordVersions = frenchTranslations[number];
        const selectedVersion = version - 1; // Convert to 0-based index
        if (selectedVersion >= 0 && selectedVersion < wordVersions.length) {
            return [wordVersions[selectedVersion]];
        } else {
            return ['Invalid Version'];
        }
    } else {
        return ['Out of Range'];
    }
}