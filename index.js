const societies = [
    { name: "Vodacom", numberOfEmployees: 200, location: "Gombe" },
    { name: "Africel", numberOfEmployees: 5000, location: "Gombe" },
    { name: "Airtel", numberOfEmployees: 1200, location: "Gombe" },
    { name: "Tigo", numberOfEmployees: 1300, location: "Gombe" },
];

const searchSociety = function (societyName, societyList) {
    for (let societyIndex = 0; societyIndex < societyList.length; societyIndex++) {
        const society = societyList[societyIndex];
        if (societyName == society.name) {
            return `Society: ${society.name}, \n Index: ${societyIndex}`;
        }
    }
    return "Society not available";
}

const recherche = searchSociety("Airtel", societies);

console.log(recherche);
