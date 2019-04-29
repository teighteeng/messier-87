const dataJson =
    '{ "screen01" : [' +
        '{ "description" : "is a supergiant elliptical galaxy in the constellation Virgo. One of the most massive galaxies in the local Universe, it has a large population of globular clusters—about 12,000 compared with the 150–200 orbiting the Milky Way—and a jet of energetic plasma that originates at the core and extends at least 1,500 parsecs (4,900 light-years), traveling at relativistic speed." } ]}'

datas = JSON.parse(dataJson)

sc1Descrip = document.getElementById("screen_01_deception")
sc1Descrip.innerHTML = datas.screen01[0].description

console.log(datas.screen01[0].description)