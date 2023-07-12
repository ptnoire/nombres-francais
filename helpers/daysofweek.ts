export function getDayWord(number: number): string {
    const frenchWords: Record<number, string> = {
        1: 'Lundi',
        2: 'Mardi',
        3: 'Mercredi',
        4: 'Jeudi',
        5: 'Vendredi',
        6: 'Samedi',
        7: 'Dimanche'
    };
    
    if (number in frenchWords) {
      return frenchWords[number];
    } else {
      return 'Out of Range';
    }
  }
  
export function convertNumberToDay(number:number): string {
    const englishWords: Record<number, string> = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
      }
    if (number in englishWords) {
        return englishWords[number];
      } else {
        return 'Out of Range';
      }
}