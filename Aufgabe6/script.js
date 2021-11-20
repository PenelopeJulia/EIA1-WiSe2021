var A6;
(function (A6) {
    window.addEventListener("load", function () {
        /* Kontinente - String */
        var eu = "Europe";
        var north = "North-America";
        var south = "South-America";
        var africa = "Africa";
        var asia = "Asia";
        var australia = "Australia";
        /* Kontinente - Number */
        var europe08 = 4965.7;
        var europe18 = 4209.3;
        var north08 = 6600.4;
        var north18 = 6035.6;
        var south08 = 1132.6;
        var south18 = 1261.5;
        var africa08 = 1028;
        var africa18 = 1235.5;
        var asia08 = 12954.7;
        var asia18 = 16274.1;
        var australia08 = 1993;
        var australia18 = 2100.5;
        /* Weltrechnung*/
        var welt = europe18 + north18 + south18 + africa18 + asia18 + australia18;
        /*DOM-Manipulation*/
        document.querySelector(".europe").addEventListener("click", function () { emissions(welt, eu, europe08, europe18); });
        document.querySelector(".northamerica").addEventListener("click", function () { emissions(welt, north, north08, north18); });
        document.querySelector(".southamerica").addEventListener("click", function () { emissions(welt, south, south08, south18); });
        document.querySelector(".africa").addEventListener("click", function () { emissions(welt, africa, africa08, africa18); });
        document.querySelector(".asia").addEventListener("click", function () { emissions(welt, asia, asia08, asia18); });
        document.querySelector(".australia").addEventListener("click", function () { emissions(welt, australia, australia08, australia18); });
        function emissions(welt, continent, continent08, continent18) {
            document.querySelector('#titleRegion').innerHTML = continent;
            document.querySelector('#region').innerHTML = continent;
            document.querySelector('#emission').innerHTML = continent18 + " kg";
            document.querySelector('#world').innerHTML = ((continent18 * 100) / welt).toFixed(2) + " %";
            document.querySelector('#percentage').innerHTML = ((continent18 / continent08 - 1) * 100).toFixed(2) + " %";
            document.querySelector('#absolute').innerHTML = (continent18 - continent08).toFixed(2) + " kg";
            /* Balken */
            document.querySelector(".chart").setAttribute("style", "height:" + (continent18 / welt) * 100 + "%");
        }
    });
})(A6 || (A6 = {}));
//# sourceMappingURL=script.js.map