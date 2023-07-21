export function getEnglishPronoun(number: number): string {
    const englishPronoun: Record<number, string> = {
            1: 'I',
            2: 'You (Formal)',
            3: 'We (Formal)',
            4: 'He',
            5: 'She',
            6: 'Them (Masculine)',
            7: 'You (Informal)',
            8: 'Them (Feminine)',
            9: 'We (Informal)',
    };
    
    if (number in englishPronoun) {
      return englishPronoun[number];
    } else {
      return 'Out of Range';
    }
  }
  
  export function getFrenchPronoun(number:number): string {
    const frenchPronoun: Record<number, string> = {
            1: "Je / J'",
            2: 'Vous',
            3: 'Nous',
            4: 'Il',
            5: 'Elle',
            6: 'Ils',
            7: 'Tu',
            8: 'Elles',
            9: 'On',
    }

    if (number in frenchPronoun) {
        return frenchPronoun[number];
      } else {
        return 'Out of Range';
      }
}