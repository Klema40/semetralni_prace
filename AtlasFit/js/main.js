var tlacitka = document.querySelectorAll(".filtr");
var cviky = document.querySelectorAll(".cvik");

for (var i = 0; i < tlacitka.length; i++) {
    tlacitka[i].addEventListener("click", function () {
        var vyber = this.getAttribute("data-filtr");

        for (var j = 0; j < tlacitka.length; j++) {
            tlacitka[j].classList.remove("aktivni");
            tlacitka[j].setAttribute("aria-pressed", "false");
        }

        this.classList.add("aktivni");
        this.setAttribute("aria-pressed", "true");

        for (var k = 0; k < cviky.length; k++) {
            var skupina = cviky[k].getAttribute("data-skupina");

            if (vyber === "vse" || skupina === vyber) {
                cviky[k].classList.remove("skryty");
            } else {
                cviky[k].classList.add("skryty");
            }
        }
    });
}
