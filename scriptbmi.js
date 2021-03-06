/* Height */
function heightRange() {
    var rangeValue = document.getElementById('heightRange').value;
    document.getElementById('heightNumber').value = rangeValue;
}
function heightNumber() {
    var numberValue = document.getElementById('heightNumber').value;
    document.getElementById('heightRange').value = numberValue;
}
/* Weight */
function weightRange() {
    var rangeValue = document.getElementById('weightRange').value;
    document.getElementById('weightNumber').value = rangeValue;
}
function weightNumber() {
    var numberValue = document.getElementById('weightNumber').value;
    document.getElementById('weightRange').value = numberValue;
}
/* Age */
function ageRange() {
    var rangeValue = document.getElementById('ageRange').value;
    document.getElementById('ageNumber').value = rangeValue;
    if (rangeValue >= 19) {
        document.getElementById('mjesecibox').style.display = "none";
        document.getElementById('aktivnostibox').style.display = "block";
    } else {
        document.getElementById('mjesecibox').style.display = "block";
        document.getElementById('aktivnostibox').style.display = "none";
    }
}
function ageNumber() {
    var numberValue = document.getElementById('ageNumber').value;
    document.getElementById('ageRange').value = numberValue;
    if (numberValue >= 19) {
        document.getElementById('mjesecibox').style.display = "none";
        document.getElementById('aktivnostibox').style.display = "block";
    } else {
        document.getElementById('mjesecibox').style.display = "block";
        document.getElementById('aktivnostibox').style.display = "none";
    }
}
/* Month */
function monthRange() {
    var rangeValue = document.getElementById('monthRange').value;
    document.getElementById('monthNumber').value = rangeValue;
}
function monthNumber() {
    var numberValue = document.getElementById('monthNumber').value;
    document.getElementById('monthRange').value = numberValue;
}

function gaugeBeforeIzracunaj() {
    var opts = {
        angle: 0, // The span of the gauge arc
        lineWidth: 1, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
          length: 0.67, // // Relative to gauge radius
          strokeWidth: 0.037, // The thickness
          color: '#000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true,     // High resolution support
        staticZones: [
            {strokeStyle: "#6bbfe7", min: 0, max: 50},
            {strokeStyle: "#59b268", min: 50, max: 100},
            {strokeStyle: "#f5d55e", min: 100, max: 150},
            {strokeStyle: "#f4a74b", min: 150, max: 200},
            {strokeStyle: "#f7905f", min: 200, max: 250},
            {strokeStyle: "#d84e56", min: 250, max: 300}
        ]
    };
    var target = document.getElementById('bmiprikaz'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create gauge!
    gauge.maxValue = 300; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 38; // set animation speed (32 is default value)
    gauge.set(0); // set actual value
}

window.addEventListener('load', (event) => {
    gaugeBeforeIzracunaj();
});

function izracunaj(e) {

    var spol = document.querySelector('input[name="spol"]:checked').value;
    var tezina = document.getElementById('weightRange').value;
    var visina = document.getElementById('heightRange').value;
    var godine = document.getElementById('ageRange').value;
    var mjeseci = document.getElementById('monthRange').value;

    var numForBmr = 5;
    if (spol == "f") { numForBmr = -161; }

    var bmi = tezina / (visina * visina / 10000);
    var bmr = (10 * tezina) + (6.25 * visina) - (5 * godine) + numForBmr;

    if (godine >= 19) {
        var opts = {
            angle: 0, // The span of the gauge arc
            lineWidth: 1, // The line thickness
            radiusScale: 1, // Relative radius
            pointer: {
              length: 0.67, // // Relative to gauge radius
              strokeWidth: 0.037, // The thickness
              color: '#000' // Fill color
            },
            limitMax: false,     // If false, max value increases automatically if value > maxValue
            limitMin: false,     // If true, the min value of the gauge will be fixed
            colorStart: '#6FADCF',   // Colors
            colorStop: '#8FC0DA',    // just experiment with them
            strokeColor: '#E0E0E0',  // to see which ones work best for you
            generateGradient: true,
            highDpiSupport: true,     // High resolution support
            staticZones: [
              {strokeStyle: "#6bbfe7", min: 0, max: 50},
              {strokeStyle: "#59b268", min: 50, max: 100},
              {strokeStyle: "#f5d55e", min: 100, max: 150},
              {strokeStyle: "#f4a74b", min: 150, max: 200},
              {strokeStyle: "#f7905f", min: 200, max: 250},
              {strokeStyle: "#d84e56", min: 250, max: 300}
            ]
        };
    } else {
        var opts = {
            angle: 0, // The span of the gauge arc
            lineWidth: 1, // The line thickness
            radiusScale: 1, // Relative radius
            pointer: {
              length: 0.67, // // Relative to gauge radius
              strokeWidth: 0.037, // The thickness
              color: '#000' // Fill color
            },
            limitMax: false,     // If false, max value increases automatically if value > maxValue
            limitMin: false,     // If true, the min value of the gauge will be fixed
            colorStart: '#6FADCF',   // Colors
            colorStop: '#8FC0DA',    // just experiment with them
            strokeColor: '#E0E0E0',  // to see which ones work best for you
            generateGradient: true,
            highDpiSupport: true,     // High resolution support
            staticZones: [
              {strokeStyle: "#6abfe7", min: 0, max: 60},
              {strokeStyle: "#a1cee4", min: 60, max: 120},
              {strokeStyle: "#59b268", min: 120, max: 180},
              {strokeStyle: "#f5d55e", min: 180, max: 240},
              {strokeStyle: "#f7905f", min: 240, max: 300}
            ]
        };
    }

    // Izracun za prikaz strelice - START
    var bmi1 = 0;
    var bmi2 = 0;
    var bmi3 = 0;
    var bmi4 = 0;
    var bmi5 = 0;

    var ukupnoMjeseci = godine * 12 + Number(mjeseci);

    if (godine >= 19) {
        bmi1 = tablica19[0];
        bmi2 = tablica19[1];
        bmi3 = tablica19[2];
        bmi4 = tablica19[3];
        bmi5 = tablica19[4];
    } else if (godine < 19) {
        if (spol == 'm') {
            bmi1 = tablicaM[ukupnoMjeseci-61][1];
            bmi2 = tablicaM[ukupnoMjeseci-61][2];
            bmi3 = tablicaM[ukupnoMjeseci-61][3];
            bmi4 = tablicaM[ukupnoMjeseci-61][4];
        } else if (spol == 'f') {
            bmi1 = tablicaF[ukupnoMjeseci-61][1];
            bmi2 = tablicaF[ukupnoMjeseci-61][2];
            bmi3 = tablicaF[ukupnoMjeseci-61][3];
            bmi4 = tablicaF[ukupnoMjeseci-61][4];
        }
    }

    var kalorije = '';
    switch (document.getElementById('aktivnosti').value) {
        case 'aktivnost1':
            kalorije = (bmr * 1.2).toFixed();
            break;
        case 'aktivnost2':
            kalorije = (bmr * 1.375).toFixed();
            break;
        case 'aktivnost3':
            kalorije = (bmr * 1.55).toFixed();
            break;
        case 'aktivnost4':
            kalorije = (bmr * 1.725).toFixed();
            break;
        case 'aktivnost5':
            kalorije = (bmr * 1.90).toFixed();
            break;
    }

    // izracunaj jelovnik
    if (bmi >= 25 && godine >= 19 && (document.getElementById('aktivnosti').value == 'aktivnost1' || document.getElementById('aktivnosti').value == 'aktivnost2')) {
        var jelovnici = [
            [1400, "https://zivjetizdravo.eu/wp-content/uploads/2020/12/jelovnik_1400kcal.pdf"],
            [1600, "https://zivjetizdravo.eu/wp-content/uploads/2020/12/jelovnik_1600kcal.pdf"],
            [1800, "https://zivjetizdravo.eu/wp-content/uploads/2020/12/jelovnik_1800kcal.pdf"],
            [2000, "https://zivjetizdravo.eu/wp-content/uploads/2020/12/jelovnik_2000kcal.pdf"]
        ];

        var kalorijeMin = parseInt(kalorije) - 600;
        var kalorijeMax = parseInt(kalorije) - 300;

        var pripadajuciJelovnik = "https://zivjetizdravo.eu/jelovnik-u-izradi/";

        var pripadajuciJelovnici = jelovnici.filter(function(e) {
            return (e[0] > kalorijeMin) && (e[0] < kalorijeMax);
        });
        
        if (pripadajuciJelovnici.length == 2) {
            pripadajuciJelovnik = pripadajuciJelovnici[1][1];
        } else if (pripadajuciJelovnici.length == 1) {
            pripadajuciJelovnik = pripadajuciJelovnici[0][1];
        }
    }

    var setPointer = 0;
    var poljeMin = 0;
    var poljeMax = 0;
    var bmiMin = 0;
    var bmiMax = 0;

    var poruka = '';
    var poruka2 = '';

    var dodatnaBmrPoruka = '';

    if (godine >= 19) {
        if (bmi < bmi1) {
            poljeMax = 49.9999;
            bmiMax = bmi1;
            setPointer = poljeMax / (bmiMax / bmi);
            poruka = ['Pothranjenost', '#6bbfe7'];
        } else if (bmi >= bmi1 && bmi < bmi2) {
            poljeMin = 50;
            poljeMax = 99.9999;
            bmiMin = bmi1;
            bmiMax = bmi2;
            setPointer = (bmi - bmiMin) * ((poljeMax - poljeMin) / (bmiMax - bmiMin)) + poljeMin;
            poruka = ['Normalna tjelesna masa', '#59b268'];
            dodatnaBmrPoruka = ' Za dodatne ideje i inspiraciju pogledajte na??e primjere <a href="https://zivjetizdravo.eu/2020/12/17/jelovnici/">jelovnika</a> i <a href="https://zivjetizdravo.eu/2020/12/17/kalkulator-potrosnje-energije-tjelesnom-aktivnoscu/">Kalkulator potro??nje energije</a>.';
        } else if (bmi >= bmi2 && bmi < bmi3) {
            poljeMin = 100;
            poljeMax = 149.9999;
            bmiMin = bmi2;
            bmiMax = bmi3;
            setPointer = (bmi - bmiMin) * ((poljeMax - poljeMin) / (bmiMax - bmiMin)) + poljeMin;
            poruka = ['Prekomjerna tjelesna masa', '#f5d55e'];
            if (document.getElementById('aktivnosti').value == 'aktivnost1' || document.getElementById('aktivnosti').value == 'aktivnost2') {
            	dodatnaBmrPoruka = ' Savjetujemo postupan i za zdravlje siguran gubitak tjelesne mase od pola kilograma do kilogram tjedno. Preporu??ujemo da smanjite energijski unos iz hrane i pi??a za oko 300 kcal do 600 kcal i pove??ate razinu tjelesne aktivnosti tako da svakog dana potro??ite dodatnih 200 do 400 kcal. Za pomo?? i inspiraciju, pogledajte <a href="'+pripadajuciJelovnik+'" target="_blank">na?? primjer jelovnika</a> i prona??ite odgovaraju??u tjelesnu aktivnost za sebe uz na?? <a href="https://zivjetizdravo.eu/2020/12/17/kalkulator-potrosnje-energije-tjelesnom-aktivnoscu/">Kalkulator potro??nje energije</a>. Za sva dodatna pitanja obratite nam se u Savjetovali??te za pravilnu prehranu i tjelesnu aktivnost.'
            } else {
	            dodatnaBmrPoruka = ' Za smanjenje tjelesne mase smanjite kalorijski unos i pove??ajte razinu tjelesne aktivnosti.';
    		}
        } else if (bmi >= bmi3 && bmi < bmi4) {
            poljeMin = 150;
            poljeMax = 199.9999;
            bmiMin = bmi3;
            bmiMax = bmi4;
            setPointer = (bmi - bmiMin) * ((poljeMax - poljeMin) / (bmiMax - bmiMin)) + poljeMin;
            poruka = ['Debljina prvog stupnja', '#f4a74b'];
            if (document.getElementById('aktivnosti').value == 'aktivnost1' || document.getElementById('aktivnosti').value == 'aktivnost2') {
            	dodatnaBmrPoruka = ' Savjetujemo postupan i za zdravlje siguran gubitak tjelesne mase od pola kilograma do kilogram tjedno. Preporu??ujemo da smanjite energijski unos iz hrane i pi??a za oko 300 kcal do 600 kcal i pove??ate razinu tjelesne aktivnosti tako da svakog dana potro??ite dodatnih 200 do 400 kcal. Za pomo?? i inspiraciju, pogledajte <a href="'+pripadajuciJelovnik+'" target="_blank">na?? primjer jelovnika</a> i prona??ite odgovaraju??u tjelesnu aktivnost za sebe uz na?? <a href="https://zivjetizdravo.eu/2020/12/17/kalkulator-potrosnje-energije-tjelesnom-aktivnoscu/">Kalkulator potro??nje energije</a>. Za sva dodatna pitanja obratite nam se u Savjetovali??te za pravilnu prehranu i tjelesnu aktivnost.'
            } else {
	            dodatnaBmrPoruka = ' Za smanjenje tjelesne mase smanjite kalorijski unos i pove??ajte razinu tjelesne aktivnosti.';
    		}
        } else if (bmi >= bmi4 && bmi < bmi5) {
            poljeMin = 200;
            poljeMax = 249.9999;
            bmiMin = bmi4;
            bmiMax = bmi5;
            setPointer = (bmi - bmiMin) * ((poljeMax - poljeMin) / (bmiMax - bmiMin)) + poljeMin;
            poruka = ['Debljina drugog stupnja', '#f7905f'];
            if (document.getElementById('aktivnosti').value == 'aktivnost1' || document.getElementById('aktivnosti').value == 'aktivnost2') {
            	dodatnaBmrPoruka = ' Savjetujemo postupan i za zdravlje siguran gubitak tjelesne mase od pola kilograma do kilogram tjedno. Preporu??ujemo da smanjite energijski unos iz hrane i pi??a za oko 300 kcal do 600 kcal i pove??ate razinu tjelesne aktivnosti tako da svakog dana potro??ite dodatnih 200 do 400 kcal. Za pomo?? i inspiraciju, pogledajte <a href="'+pripadajuciJelovnik+'" target="_blank">na?? primjer jelovnika</a> i prona??ite odgovaraju??u tjelesnu aktivnost za sebe uz na?? <a href="https://zivjetizdravo.eu/2020/12/17/kalkulator-potrosnje-energije-tjelesnom-aktivnoscu/">Kalkulator potro??nje energije</a>. Za sva dodatna pitanja obratite nam se u Savjetovali??te za pravilnu prehranu i tjelesnu aktivnost.'
            } else {
	            dodatnaBmrPoruka = ' Za smanjenje tjelesne mase smanjite kalorijski unos i pove??ajte razinu tjelesne aktivnosti.';
    		}
        } else if (bmi >= bmi5) {
            poljeMin = 250;
            poljeMax = 300;
            bmiMin = bmi5;
            bmiMax = 408.2;
            setPointer = (bmi - bmiMin) * ((poljeMax - poljeMin) / (bmiMax - bmiMin)) + poljeMin;
            poruka = ['Debljina tre??eg stupnja', '#d84e56'];
            if (document.getElementById('aktivnosti').value == 'aktivnost1' || document.getElementById('aktivnosti').value == 'aktivnost2') {
            	dodatnaBmrPoruka = ' Savjetujemo postupan i za zdravlje siguran gubitak tjelesne mase od pola kilograma do kilogram tjedno. Preporu??ujemo da smanjite energijski unos iz hrane i pi??a za oko 300 kcal do 600 kcal i pove??ate razinu tjelesne aktivnosti tako da svakog dana potro??ite dodatnih 200 do 400 kcal. Za pomo?? i inspiraciju, pogledajte <a href="'+pripadajuciJelovnik+'" target="_blank">na?? primjer jelovnika</a> i prona??ite odgovaraju??u tjelesnu aktivnost za sebe uz na?? <a href="https://zivjetizdravo.eu/2020/12/17/kalkulator-potrosnje-energije-tjelesnom-aktivnoscu/">Kalkulator potro??nje energije</a>. Za sva dodatna pitanja obratite nam se u Savjetovali??te za pravilnu prehranu i tjelesnu aktivnost.'
            } else {
	            dodatnaBmrPoruka = ' Za smanjenje tjelesne mase smanjite kalorijski unos i pove??ajte razinu tjelesne aktivnosti.';
    		}
        }
    } else {
        if (bmi < bmi1) {
            poljeMax = 59.9999;
            bmiMax = bmi1;
            setPointer = poljeMax / (bmiMax / bmi);
            poruka = ['Izrazita pothranjenost', '#6abfe7'];
            poruka2 = 'Ukoliko je Va??e dijete trenutno u tretmanu zbog poreme??aja prehrane ili rasta, NEMOJTE se slu??iti ovim alatom. <br><br>Va??e dijete izvan je raspona normalne tjelesne uhranjenosti. Ako ve?? niste, preporu??amo Vam da se obratite svom pedijatru, lije??niku ??kolske ili obiteljske medicine. <br><br>Pravilna prehrana i tjelesna aktivnost nu??ni su za odr??avanje zdrave tjelesne mase i zdravog rasta. Sva djeca trebaju energiju i hranjive tvari iz raznovrsne i uravnote??ene prehrane. Budite pozitivni primjeri svojoj djeci, uklju??ite ih u pripremu hrane i poti??ite ih na isprobavanje novih okusa. <br><br>Zdrave navike grade se od najranijeg djetinjstva, a djeca najbolje u??e slijede??i Va?? primjer!';
        } else if (bmi >= bmi1 && bmi < bmi2) {
            poljeMin = 60;
            poljeMax = 119.9999;
            bmiMin = bmi1;
            bmiMax = bmi2;
            setPointer = (bmi - bmiMin) * ((poljeMax - poljeMin) / (bmiMax - bmiMin)) + poljeMin;
            poruka = ['Pothranjenost', '#a1cee4'];
            poruka2 = 'Ukoliko je Va??e dijete trenutno u tretmanu zbog poreme??aja prehrane ili rasta, NEMOJTE se slu??iti ovim alatom. <br><br>Va??e dijete izvan je raspona normalne tjelesne uhranjenosti. Ako ve?? niste, preporu??amo Vam da se obratite svom pedijatru, lije??niku ??kolske ili obiteljske medicine. <br><br>Pravilna prehrana i tjelesna aktivnost nu??ni su za odr??avanje zdrave tjelesne mase i zdravog rasta. Sva djeca trebaju energiju i hranjive tvari iz raznovrsne i uravnote??ene prehrane. Budite pozitivni primjeri svojoj djeci, uklju??ite ih u pripremu hrane i poti??ite ih na isprobavanje novih okusa. <br><br>Zdrave navike grade se od najranijeg djetinjstva, a djeca najbolje u??e slijede??i Va?? primjer!';
        } else if (bmi >= bmi2 && bmi < bmi3) {
            poljeMin = 120;
            poljeMax = 179.9999;
            bmiMin = bmi2;
            bmiMax = bmi3;
            setPointer = (bmi - bmiMin) * ((poljeMax - poljeMin) / (bmiMax - bmiMin)) + poljeMin;
            poruka = ['Normalna tjelesna uhranjenost', '#59b268'];
            poruka2 = 'Va??e dijete unutar je raspona normalne tjelesne uhranjenosti. <br><br>Za zdravlje va??eg djeteta najbolje je da zadr??i zdravu tjelesnu masu. <br><br>Mnogo je stvari koje Vi kao roditelji mo??ete poduzeti kako bi Va??e dijete zadr??alo zdravu tjelesnu masu dok raste. <br><br>Ukoliko poti??ete svoje dijete da konzumira pravilnu prehranu i bude aktivno, ve??a je vjerojatnost da ??e zadr??ati zdravu tjelesnu masu. Kuhajte kod ku??e zdrava jela. Kre??ite se zajedno kao obitelj. Zdrave navike grade se od najranijeg djetinjstva, a djeca najbolje u??e slijede??i Va?? primjer!';
        }
        else if (bmi >= bmi3 && bmi < bmi4) {
            poljeMin = 180;
            poljeMax = 239.9999;
            bmiMin = bmi3;
            bmiMax = bmi4;
            setPointer = (bmi - bmiMin) * ((poljeMax - poljeMin) / (bmiMax - bmiMin)) + poljeMin;
            poruka = ['Prekomjerna tjelesna masa', '#f5d55e'];
            poruka2 = 'Va??e dijete izvan je raspona normalne tjelesne uhranjenosti. <br><br>Roditeljima je ponekad te??ko prepoznati da je njihovo dijete prekomjerne tjelesne mase. <br><br>Prekomjerna tjelesna masa djeteta mo??e dovesti do problema sa zdravljem i dobrobiti djeteta kao ??to su visoki krvni tlak, rani znakovi ??e??erne bolesti tipa 2, nisko samopouzdanje i lo??a slika o sebi. <br><br>Mnogo je stvari koje Vi kao roditelji mo??ete poduzeti kako bi Va??e dijete postiglo zdravu tjelesnu masu dok raste. Va??no je poticati dijete da se pravilno hrani i vi??e se kre??e. Zdrave navike grade se od najranijeg djetinjstva, a djeca najbolje u??e slijede??i Va?? primjer! <br><br>Za dodatne savjete obratite se svom pedijatru, lije??niku ??kolske ili obiteljske medicine.';
        }
        else if (bmi >= bmi4) {
            poljeMin = 240;
            poljeMax = 300;
            bmiMin = bmi4;
            bmiMax = 408.2;
            setPointer = (bmi - bmiMin) * ((poljeMax - poljeMin) / (bmiMax - bmiMin)) + poljeMin;
            poruka = ['Debljina', '#f7905f'];
            poruka2 = 'Ukoliko je Va??e dijete trenutno u tretmanu zbog poreme??aja prehrane ili rasta, NEMOJTE se slu??iti ovim alatom. <br><br>Va??e dijete izvan je raspona normalne tjelesne uhranjenosti. <br><br>Debljina djeteta mo??e dovesti do problema sa zdravljem i dobrobiti djeteta kao ??to su visoki krvni tlak, rani znakovi ??e??erne bolesti tipa 2, nisko samopouzdanje i lo??a slika o sebi. <br><br>Mnogo je stvari koje mo??ete poduzeti kako bi Va??e dijete postiglo zdravu tjelesnu masu dok raste. Va??no je poticati dijete da se pravilno hrani i vi??e se kre??e. Zdrave navike grade se od najranijeg djetinjstva, a djeca najbolje u??e slijede??i Va?? primjer! <br><br>Za dodatne savjete obratite se svom pedijatru, lije??niku ??kolske ili obiteljske medicine.';
        }
    }

    var target = document.getElementById('bmiprikaz'); // your canvas element
    var gauge = new Gauge(target).setOptions(opts); // create gauge!
    gauge.maxValue = 300; // set max gauge value
    gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
    gauge.animationSpeed = 38; // set animation speed (32 is default value)
    gauge.set(setPointer); // set actual value

    if (godine >= 19) {
        if (bmi < 18.5) {

            document.getElementById('poruka2').style.display = 'block';
            poruka2 = '<strong>Oprez!</strong> Va??a tjelesna masa je ni??a od preporu??enih vrijednosti. Potra??ite stru??an savjet kako regulirati prehranu i dobiti nekoliko kilograma. Posljedice pothranjenosti su iscrpljenost organizma, pad imuniteta te pove??ani rizik za razne bolesti poput osteoporoze i osteomalacije, anemije te izostanak mjese??nice kod ??ena.';

        } else if (bmi >= 18.5 && bmi < 25) {

            document.getElementById('poruka2').style.display = 'block';
            poruka2 = '<strong>Odli??no!</strong> Va??a tjelesna masa je optimalna. Nastavite ju i dalje odr??avati takvom odabirom uravnote??enih i raznolikih obroka i primjerenom tjelesnom aktivnosti.';

            if (document.getElementById('aktivnosti').value == "aktivnost1" || document.getElementById('aktivnosti').value == "aktivnost2") {
            	poruka2 += ' Radi o??uvanja Va??eg zdravlja preporu??ujemo Vam tjedno najmanje 150 minuta tjelesne aktivnosti umjerenog intenziteta ili 75 minuta aktivnosti visokog intenziteta.';
            }

        } else if (bmi >= 25 && bmi < 30) {

            document.getElementById('poruka2').style.display = 'block';
            poruka2 = '<strong>Potreban oprez!</strong> Imate prekomjernu tjelesnu masu. Potrebno je regulirati prehranu i pove??ati tjelesnu aktivnost. Ve?? i male promjene stila ??ivota doprinijet ??e pobolj??anju op??eg stanja Va??eg organizma i smanjiti rizik od kroni??nih nezaraznih bolesti povezanih s prekomjernom tjelesnom masom. Napravite promjenu ve?? danas: pro??etajte, grickalice zamijenite vo??em, a sokove vodom ili nezasla??enim ??ajem.';

        } else if (bmi >= 30 && bmi < 35) {

            document.getElementById('poruka2').style.display = 'block';
            poruka2 = '<strong>Djelujte odmah!</strong> Va?? indeks tjelesne mase pokazuje prvi stupanj debljine i visok rizik od raznih bolesti poput bolesti srca i krvnih ??ila te ??e??erne bolesti tipa II i nekih oblika karcinoma. Potra??ite savjet stru??njaka, regulirajte prehranu i krenite vje??bati prema svojim mogu??nostima. Zadajte si realan cilj, gubitkom 5% do 10% od po??etne tjelesne mase smanjuje se rizik obolijevanja od navedenih bolesti. Napravite promjenu ve?? danas: pro??etajte, grickalice zamijenite vo??em, a sokove vodom ili nezasla??enim ??ajem.';

        } else if (bmi >= 35 && bmi < 40) {

            document.getElementById('poruka2').style.display = 'block';
            poruka2 = '<strong>Djelujte odmah!</strong> Va?? indeks tjelesne mase pokazuje drugi stupanj debljine i vrlo visok rizik od raznih bolesti poput bolesti srca i krvnih ??ila te ??e??erne bolesti tipa II i nekih oblika karcinoma. Potra??ite savjet stru??njaka, regulirajte prehranu i krenite vje??bati prema svojim mogu??nostima. Zadajte si realan cilj, gubitkom 5% do 10% od po??etne tjelesne mase smanjuje se rizik obolijevanja od navedenih bolesti. Napravite promjenu ve?? danas: pro??etajte, grickalice zamijenite vo??em, a sokove vodom ili nezasla??enim ??ajem.';

        } else if (bmi >= 40) {

            document.getElementById('poruka2').style.display = 'block';
            poruka2 = '<strong>Hitno u promjenu!</strong> Va?? indeks tjelesne mase pokazuje izrazitu debljinu i izrazito visok rizik od raznih bolesti povezane s debljinom. Najpoznatije komplikacije debljine su metaboli??ki sindrom, ??e??erna bolest tipa 2, visoki krvni tlak, bolesti srca i krvnih ??ila te neki oblici karcinoma. ??to prije potra??ite savjet stru??njaka, regulirajte prehranu i krenite vje??bati prema svojim mogu??nostima. Zadajte si realan cilj, gubitkom ve?? 5% do 10% od po??etne tjelesne mase smanjuje se rizik obolijevanja od navedenih bolesti. Napravite promjenu ve?? danas: pro??etajte, grickalice zamijenite vo??em, a sokove vodom ili nezasla??enim ??ajem.';

        }
    } else {
        document.getElementById('poruka2').style.display = 'block';
    }

    if (godine >= 19) {
        document.getElementById('resultBmi').style.display = 'block';
        document.getElementById('resultBmi').innerHTML = bmi.toFixed(1);
    } else {
        document.getElementById('resultBmi').style.display = 'none';
    }





    if (godine >= 19) {
        var bmrPoruka = '<br><br>Za odr??avanje trenutne tjelesne mase uz postoje??u razinu tjelesne aktivnosti potrebno je unijeti <strong>' + kalorije + ' kcal</strong>.' + dodatnaBmrPoruka;
    } else {
        var bmrPoruka = '';
    }

    document.getElementById('poruka').innerHTML = poruka[0];
    document.getElementById('poruka').style.backgroundColor = poruka[1];
    document.getElementById('poruka2').innerHTML = poruka2 + bmrPoruka;

    // scroll after click
    var elmntToView = document.getElementById("bmiprikaz");
    elmntToView.scrollIntoView({behavior: "smooth"}); 

}