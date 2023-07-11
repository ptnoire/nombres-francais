export function getDayWord(number: number): string {
    const frenchVerbs: Record<number, string> = {
        1: 'Accepter',
        2: 'Acheter',
        3: 'Adorer',
        4: 'Aider',
        5: 'Aimer',
        6: 'Ajouter',
        7: 'Amener',
        8: 'Améliorer'
    };
    
    if (number in frenchVerbs) {
      return frenchVerbs[number];
    } else {
      return 'Out of Range';
    }
  }
  
// export function convertNumberToDay(number:number): string {
//     const englishWords: Record<number, string> = {
//         1: 'Monday',
//         2: 'Tuesday',
//         3: 'Wednesday',
//         4: 'Thursday',
//         5: 'Friday',
//         6: 'Saturday',
//         7: 'Sunday'
//       }
//     if (number in englishWords) {
//         return englishWords[number];
//       } else {
//         return 'Out of Range';
//       }
// }