const passife = [
    { nomCompte: "a", numero: 10, montant: 34 },
    { nomCompte: "b", numero: 10, montant: 34 },
    { nomCompte: "c", numero: 10, montant: 34 },
    { nomCompte: "d", numero: 10, montant: 34 },
];


const actif = [
    { nomCompte: "A", numero: 10, montant: 34 },
    { nomCompte: "B", numero: 10, montant: 34 },
    { nomCompte: "C", numero: 10, montant: 34 },
    { nomCompte: "D", numero: 10, montant: 34 },
];



const calculeDeSome = function (tableau) {
    var some = 0;
    for (let i = 0; i < tableau.length; i++) {
        var montantComptetableau = tableau[i].montant;
        some += montantComptetableau;
    }
    return some;
}

const calculBilant = function (passife, actif) {
    const somePassife = calculeDeSome(passife);
    const someActif = calculeDeSome(actif);
    return { somePassife, someActif }
}

const somes = calculBilant(passife, actif);

console.log(somes);
