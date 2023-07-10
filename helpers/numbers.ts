export function getFrenchWord(number: number): string {
    const frenchWords: Record<number, string> = {
      1: 'un',
      2: 'deux',
      3: 'trois',
      4: 'quatre',
      5: 'cinq',
      6: 'six',
      7: 'sept',
      8: 'huit',
      9: 'neuf',
      10: 'dix',
      11: 'onze',
      12: 'douze',
      13: 'treize',
      14: 'quatorze',
      15: 'quinze',
      16: 'seize',
      17: 'dix-sept',
      18: 'dix-huit',
      19: 'dix-neuf',
      20: 'vingt',
      30: 'trente',
      40: 'quarante',
      50: 'cinquante',
      60: 'soixante',
      70: 'soixante-dix',
      80: 'quatre-vingts',
      90: 'quatre-vingt-dix'
    };
    
    if (number in frenchWords) {
      // if the number is in the object, return its corresponding French word
      return frenchWords[number];
    } else if (number < 100) {
      // if the number is between 21 and 99, return its French word as a combination of the words for its tens and ones places
      const tens = Math.floor(number / 10) * 10;
      const ones = number % 10;

      if (tens === 70 || tens === 90) {
        const base = tens === 70 ? frenchWords[60] : frenchWords[80];
        const onesWord = frenchWords[ones + 10];
        return base + '-' + onesWord;
      } else {
      return frenchWords[tens] + '-' + frenchWords[ones];
      }
    } else {
      // if the number is 100 return the french word for 100.
      return 'cent';
    }
  }
  
  // This algorithm needs to change because 70 - 79 is not 10 + single, and 90 - 99 is not either. We can change it to between 71 - 79 : soixante + 10 - 19 and the same with 91 - 99. - Solved 7-10-23