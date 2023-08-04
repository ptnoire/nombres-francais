// export function getFrenchQuestion(number: number, version: number): string[] {
//     const frenchTranslations: Record<number, string[]> = {
//         1: [''],
//     };

//     if (number in frenchTranslations) {
//         const wordVersions = frenchTranslations[number];
//         const selectedVersion = version - 1; // Convert to 0-based index
//         if (selectedVersion >= 0 && selectedVersion < wordVersions.length) {
//             return [wordVersions[selectedVersion]];
//         } else {
//             return ['Invalid Version'];
//         }
//     } else {
//         return ['Out of Range'];
//     }
// }
  
//   export function getEnglishQuestion(number:number): string {
//     const englishWords: Record<number, string> = {

//     }

//     if (number in englishWords) {
//         return englishWords[number];
//       } else {
//         return 'Out of Range';
//       }
// }