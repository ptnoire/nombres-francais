export function getProposition(number: number): string {
    const frenchProposition: Record<number, string> = {
        1: 'Au-dessus de',
        2: 'En-dessous de',
        3: 'Sur',
        4: 'Sous',
        5: 'Prés de',
        6: 'Lion de',
        7: 'À côté de',
        8: 'Entre',
        9: 'Devant',
        10: 'Derrière',
        11: "De l'autre côté de",
        12: 'En face de',
        13: 'À gauche de',
        14: 'À droite de',
        15: 'Contre',
        16: 'Dans',
        17: 'Chez',
        18: 'À',
        19: 'En',
    }

    if (number in frenchProposition) {
        return frenchProposition[number];
    } else {
        return 'Out of Range';
    }
}

export function getEnglishProposition(number: number): string {
    const getEnglishProposition: Record<number, string> = {
        1: 'Above',
        2: 'Below',
        3: 'On',
        4: 'Under',
        5: 'Near',
        6: 'Next to',
        7: 'Beside',
        8: 'Between',
        9: 'In front of',
        10: 'Behind',
        11: 'On the other side of',
        12: 'Opposite',
        13: 'To the left of',
        14: 'To the right of',
        15: 'Against',
        16: 'In',
        17: "At someone's place",
        18: 'At',
        19: 'In/To'
    }

    if (number in getEnglishProposition) {
        return getEnglishProposition[number];
    } else {
        return 'Out of Range';
    }
}