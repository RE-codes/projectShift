//Write some JavaScript that loops through the following bands array and alerts, "I love [bandName]", obviously with the current band name string replacing the [bandName].

const bands = ['Kiss', 'Aerosmith', 'ACDC', 'Led Zeppelin', 'Nickelback'];

for (i = 0; i < bands.length; i++) {
    if (bands[i] !== "Nickelback"){
        console.log(`I love ${bands[i]}!`);
    } else {
        console.log(`I DON'T love ${bands[i]}!!!`);
    }
}