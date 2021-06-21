<?php

/*
Plugin Name: BMI calculator
Description: Prikazuje BMI calculator. Potrebno zaljepiti shortcode <strong>[bmi_calculator]</strong> u objavu ili stranicu.
Version: 1.0
Author: TB
*/

/* Include style */
function add_stylesheet() 
{
    wp_enqueue_style( 'style-bmi', plugin_dir_url( __FILE__ ) . 'style-bmi.css' );
}
add_action('wp_enqueue_scripts', 'add_stylesheet');

/* Function */
function bmi_calc() {
    $bmi =  '<div class="alert alert-warning" role="alert">
                Indeks tjelesne mase (ITM) relativno je jednostavna okvirna mjera za procjenu stanja uhranjenosti opće populacije. S obzirom na to da se kod odraslih osoba njegov izračun bazira samo na tjelesnoj masi i visini, on Vam ne može ništa reći o udjelu masnog tkiva i mišićne mase u Vašem tijelu. Iz tog razloga, odrasle osobe s visokim udjelom mišićne mase i sportaši mogu putem indeksa tjelesne mase biti kategorizirani kao da imaju "prekomjernu tjelesnu masu" ili "debljinu", iako imaju nizak udio masnog tkiva. Također, starije osobe kojima pada udio mišićne mase mogu na osnovu indeksa tjelesne mase biti  svrstani u kategoriju "normalne tjelesne mase", iako možda imaju prevelik udio masnog tkiva. Osim toga, ne preporuča se upotreba indeksa tjelesne mase kod trudnica i osoba koje boluju od poremećaja prehrane.<br>Podaci dobiveni na ovoj stranici su informativnog karaktera. Za dodatne savjete oko postizanja ili održavanja zdrave tjelesne mase obratite se svom liječniku obiteljske medicine.
            </div>
            <br><br>
            <div class="bmiform">
                <p class="parametar">Spol</p>
                <input type="radio" id="radiom" name="spol" value="m" checked="checked"><label for="radiom">Muško</label>
                <input type="radio" id="radioz" name="spol" value="f"><label for="radioz">Žensko</label>
                <p class="parametar">Visina (cm)</p>
                <input style="float:left;width:250px;margin-right:15px;" type="range" id="heightRange" name="points" min="70" max="210" value="180" oninput="heightRange()"><input type="number" id="heightNumber" min="70" max="210" value="180" oninput="heightNumber()">
                <p class="parametar">Tjelesna masa (kg)</p>
                <input style="float:left;width:250px;margin-right:15px;" type="range" id="weightRange" name="points" min="10" max="200" value="70" oninput="weightRange()"><input type="number" id="weightNumber" min="10" max="200" value="70" oninput="weightNumber()">
                <p class="parametar">Dob</p>
                Godina:<br><input style="float:left;width:250px;margin-right:15px;" type="range" id="ageRange" name="points" min="5" max="120" value="20" oninput="ageRange()"><input type="number" id="ageNumber" min="5" max="120" value="20" oninput="ageNumber()">
                <div id="mjesecibox">
                    Mjeseci:<br><input style="float:left;width:250px;margin-right:15px;" type="range" id="monthRange" name="points" min="1" max="12" value="1" oninput="monthRange()"><input type="number" id="monthNumber" min="1" max="12" value="1" oninput="monthNumber()">
                </div>
                <div id="aktivnostibox">
                <p class="parametar">Tjelesna aktivnost</p>
                    <select id="aktivnosti">
                        <option value="aktivnost1">Sjedilački tip (malo ili nimalo kretanja)</option>
                        <option value="aktivnost2">Lagano aktivni tip (trening 1-3 puta tjedno)</option>
                        <option value="aktivnost3">Umjereno aktivni tip (trening 3-5 puta tjedno)</option>
                        <option value="aktivnost4">Veoma aktivni tip (trening 6-7 puta tjedno)</option>
                        <option value="aktivnost5">Izuzetno aktivni tip (intenzivan svakodnevni trening ili fizički zahtjevan rad)</option>
                    </select>
                </div>
                <button class="bmibtn" onclick="izracunaj(event)">Pokreni!</button>
            </div>    

            <canvas id="bmiprikaz" style="max-width:700px;margin:0 auto;display:block;width:100%;"></canvas>

            <div class="rezultat">
                <div id="resultBmi"></div>
                <div id="poruka"></div>
                <div id="poruka2"></div> 
            </div>';

    return $bmi;
}
add_shortcode('bmi_calculator', 'bmi_calc');

/* Include script */
if ( strpos($_SERVER['REQUEST_URI'], 'itm-kalkulator') !== false ) { // provjerava da li je u url-u rijec itm-kalkulator
    function add_script() {
        wp_enqueue_script( 'tabledata', plugin_dir_url( __FILE__ ) . 'tabledata.js' );
        wp_enqueue_script( 'scriptbmi', plugin_dir_url( __FILE__ ) . 'scriptbmi.js' );
        wp_enqueue_script( 'gauge.min', plugin_dir_url( __FILE__ ) . 'gauge.min.js' );
    }
    add_action('wp_enqueue_scripts','add_script');
}
?>
