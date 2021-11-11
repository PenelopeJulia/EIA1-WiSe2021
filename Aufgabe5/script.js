/* 2008 vs. 2018 */
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
/* Gesamtrechnung*/
var welt = europe18 + north18 + south18 + africa18 + asia18 + australia18;
var europeWelt = (europe18 * 100) / welt;
var europeProzent = (europe18 / europe08 - 1) * 100;
var europeVergleich = europe18 - europe08;
var northWelt = (north18 * 100) / welt;
var northProzent = (north18 / north08 - 1) * 100;
var northVergleich = north18 - north08;
var southWelt = (south18 * 100) / welt;
var southProzent = (south18 / south08 - 1) * 100;
var southVergleich = south18 - south08;
var africaWelt = (africa18 * 100) / welt;
var africaProzent = (africa18 / africa08 - 1) * 100;
var africaVergleich = africa18 - africa08;
var asiaWelt = (asia18 * 100) / welt;
var asiaProzent = (asia18 / asia08 - 1) * 100;
var asiaVergleich = asia18 - asia08;
var australiaWelt = (australia18 * 100) / welt;
var australiaProzent = (australia18 / australia08 - 1) * 100;
var australiaVergleich = australia18 - australia08;
/* Konsole*/
console.log('Die Emission von Europa ist: ' + europe18 + ' kg CO2. Relativ zur Gesamtemission der Welt verursacht Europa damit ' + europeWelt + '%. Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um ' + europeProzent + '% verändert. 2018 im Vergleich zu 2008 sind das ' + europeVergleich + ' kg CO2');
console.log('Die Emission von Nord-Amerika ist: ' + north18 + ' kg CO2. Relativ zur Gesamtemission der Welt verursacht Nord-Amerika damit ' + northWelt + '%. Für Nord-Amerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + northProzent + '% verändert. 2018 im Vergleich zu 2008 sind das ' + northVergleich + ' kg CO2');
console.log('Die Emission von Süd-Amerika ist: ' + south18 + ' kg CO2. Relativ zur Gesamtemission der Welt verursacht Süd-Amerika damit ' + southWelt + '%. Für Süd-Amerika hat sich 2018 im Vergleich zu 2008 die Emission um ' + southProzent + '% verändert. 2018 im Vergleich zu 2008 sind das ' + southVergleich + ' kg CO2');
console.log('Die Emission von Afrika ist: ' + africa18 + ' kg CO2. Relativ zur Gesamtemission der Welt verursacht Afrika damit ' + africaWelt + '%. Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um ' + africaProzent + '% verändert. 2018 im Vergleich zu 2008 sind das ' + africaVergleich + ' kg CO2');
console.log('Die Emission von Asien ist: ' + asia18 + ' kg CO2. Relativ zur Gesamtemission der Welt verursacht Asien damit ' + asiaWelt + '%. Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um ' + australiaProzent + '% verändert. 2018 im Vergleich zu 2008 sind das ' + asiaVergleich + ' kg CO2');
console.log('Die Emission von Australien ist: ' + australia18 + ' kg CO2. Relativ zur Gesamtemission der Welt verursacht Australien damit ' + australiaWelt + '%. Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um ' + australiaProzent + '% verändert. 2018 im Vergleich zu 2008 sind das ' + australiaVergleich + ' kg CO2');
//# sourceMappingURL=script.js.map