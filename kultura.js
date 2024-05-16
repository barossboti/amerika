document.addEventListener("DOMContentLoaded", function() {
    const kulturalisJellegzesek = [
        {
            cim: "Jazz",
            kep: "jazz.jpg",
            leiras: "Az amerikai jazz a 20. század elején alakult ki, és azóta is fontos része az amerikai zenei kultúrának."
        },
        {
            cim: "Broadway",
            kep: "broadway.jpg",
            leiras: "New York City színházi negyede, ahol az amerikai musical és színházi előadások találhatók."
        },
        {
            cim: "Country zene",
            kep: "country.jpg",
            leiras: "Az amerikai country zene egy fontos része az amerikai zenei kultúrának, és gyökerei a déli államok népzenéjébe nyúlnak vissza."
        },
        {
            cim: "Street art",
            kep: "streetart.jpg",
            leiras: "Az amerikai street art sokszínű és élénk, számos városban találhatók festői graffitik és művészeti munkák."
        },
        {
            cim: "Native American kultúra",
            kep: "nativeamerican.jpg",
            leiras: "Az őslakos amerikai kultúra gazdag és sokszínű, különféle törzsek és hagyományokkal rendelkezik az ország különböző részein."
        }


    ];

    const kulturaKartyakKontener = document.getElementById("kultura-kartyak");

    kulturalisJellegzesek.forEach(jellegzes => {
        const kartya = document.createElement("div");
        kartya.classList.add("col");

        const kartyaTartalom = `
            <div class="card">
                <img src="${jellegzes.kep}" class="card-img-top" alt="${jellegzes.cim}">
                <div class="card-body">
                    <h5 class="card-title">${jellegzes.cim}</h5>
                    <p class="card-text">${jellegzes.leiras}</p>
                </div>
            </div>
        `;

        kartya.innerHTML = kartyaTartalom;
        kulturaKartyakKontener.appendChild(kartya);
    });
});