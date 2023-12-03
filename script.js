var AssetRotate = document.getElementById('clickerBackground');
var enlargeIcon = document.getElementById('clickerIcon');
var rotateAngle = 1;

function rotation() {
    var rotInput = 'rotate(' + rotateAngle + 'deg)';
    AssetRotate.style.transform = rotInput;
    rotateAngle = rotateAngle + 1;
}

function spsIncome() {
    spiceTotal = spiceTotal + spsTotal;
    document.getElementById('overallSpice').textContent = spiceTotal + " Spice($)";
}

setInterval(spsIncome, 1000)
setInterval(rotation, 30);

//Costs of spices.
var saltCost = 50;
var pepperCost = 250;
var cilantroCost = 2500;
var oreganoCost = 5000;
var peprikaCost = 25000;
var garlicCost = 100000;
var onionCost = 500000;
var cuminCost = 2000000;
var cinnamonCost = 10000000;

//Display cost of spices.
var visualSaltCost = 50;
var visualPepperCost = 250;
var visualCilantroCost = 2500;
var visualOreganoCost = 5000;
var visualPeprikaCost = '25K';
var visualGarlicCost = '100K';
var visualOnionCost = '500K';
var visualCuminCost = '2000K';
var visualCinnamonCost = '10Mil';

//Number of spices.
var saltNumb = 0;
var pepperNumb = 0;
var cilantroNumb = 0;
var oreganoNumb = 0;
var peprikaNumb = 0;
var garlicNumb = 0;
var onionNumb = 0;
var cuminNumb = 0;
var cinnamonNumb = 0;

//Overall spice sps.
var saltSPS = 0;
var pepperSPS = 0;
var cilantroSPS = 0;
var oreganoSPS = 0;
var peprikaSPS = 0;
var garlicSPS = 0;
var onionSPS = 0;
var cuminSPS = 0;
var cinnamonSPS = 0;

//Overall visual spice sps.
var saltVisSPS = 0;
var pepperVisSPS = 0;
var cilantroVisSPS = 0;
var oreganoVisSPS = 0;
var peprikaVisSPS = 0;
var garlicVisSPS = 0;
var onionVisSPS = 0;
var cuminVisSPS = 0;
var cinnamonVisSPS = 0;

//Overall Sps and Spice.
var spiceTotal = 0;
var spsTotal = 0;







function tap() {
    var spiceTotalText = document.getElementById('overallSpice');
    spiceTotal = spiceTotal + 1;

    enlargeIcon.style.width = "1100px";
    enlargeIcon.style.height = "550px";

    enlargeIcon.style.top = "275px";
    enlargeIcon.style.left = "600px";

    setTimeout(() => {
        enlargeIcon.style.width = "1000px";
        enlargeIcon.style.height = "500px";

        enlargeIcon.style.top = "300px";
        enlargeIcon.style.left = "650px";

      }, "50");

      spiceTotalText.textContent = spiceTotal + " Spice($)";
}


function updateVisualCost() {
    if (saltCost > 9999) {
        visualSaltCost = (Math.round(saltCost / 1000)) + 'K';
    }
    if (saltCost > 9999999) {
        visualSaltCost = (Math.round(saltCost / 1000000)) + 'Mil';
    }
    var buttonText = document.getElementById('saltButton');
    buttonText.textContent = '$' + visualSaltCost + "     Salt";



    if (pepperCost > 9999) {
        visualPepperCost = (Math.round(pepperCost / 1000)) + 'K';
    }
    if (pepperCost > 9999999) {
        visualPepperCost = (Math.round(pepperCost / 1000000)) + 'Mil';
    }
    var buttonText = document.getElementById('pepperButton');
    buttonText.textContent = '$' + visualPepperCost + "     Pepper";



    if (cilantroCost > 9999) {
        visualCilantroCost = (Math.round(cilantroCost / 1000)) + 'K';
    }
    if (cilantroCost > 9999999) {
        visualCilantroCost = (Math.round(cilantroCost / 1000000)) + 'Mil';
    }
    var buttonText = document.getElementById('cilantroButton');
    buttonText.textContent = '$' + visualCilantroCost + "     Cilantro";



    if (oreganoCost > 9999) {
        visualOreganoCost = (Math.round(oreganoCost / 1000)) + 'K';
    }
    if (oreganoCost > 9999999) {
        visualOreganoCost = (Math.round(oreganoCost / 1000000)) + 'Mil';
    }
    var buttonText = document.getElementById('oreganoButton');
    buttonText.textContent = '$' + visualOreganoCost + "     Oregano";



    if (peprikaCost > 9999) {
        visualPeprikaCost = (Math.round(peprikaCost / 1000)) + 'K';
    }
    if (peprikaCost > 9999999) {
        visualPeprikaCost = (Math.round(peprikaCost / 1000000)) + 'Mil';
    }
    var buttonText = document.getElementById('peprikaButton');
    buttonText.textContent = '$' + visualPeprikaCost + "     Peprika";



    if (garlicCost > 9999) {
        visualGarlicCost = (Math.round(garlicCost / 1000)) + 'K';
    }
    if (garlicCost > 9999999) {
        visualGarlicCost = (Math.round(garlicCost / 1000000)) + 'Mil';
    }
    var buttonText = document.getElementById('garlicPowderButton');
    buttonText.textContent = '$' + visualGarlicCost + "     Garlic";



    if (onionCost > 9999) {
        visualOnionCost = (Math.round(onionCost / 1000)) + 'K';
    }
    if (onionCost > 9999999) {
        visualOnionCost = (Math.round(onionCost / 1000000)) + 'Mil';
    }
    var buttonText = document.getElementById('onionPowderButton');
    buttonText.textContent = '$' + visualOnionCost + "     Onion";



    if (cuminCost > 9999) {
        visualCuminCost = (Math.round(cuminCost / 1000)) + 'K';
    }
    if (cuminCost > 9999999) {
        visualCuminCost = (Math.round(cuminCost / 1000000)) + 'Mil';
    }
    var buttonText = document.getElementById('cuminButton');
    buttonText.textContent = '$' + visualCuminCost + "     Cumin";



    if (cinnamonCost > 9999) {
        visualCinnamonCost = (Math.round(cinnamonCost / 1000000)) + 'K';
    }
    if (cinnamonCost > 9999999) {
        visualCinnamonCost = (Math.round(cinnamonCost / 1000000)) + 'Mil';
    }
    var buttonText = document.getElementById('cinnamonButton');
    buttonText.textContent = '$' + visualCinnamonCost + "     Cinnamon";
}

function saltUpdate() {
    if (spiceTotal >= saltCost) {
    var currentSpiceUpdate = document.getElementById('saltButton');
    currentSpiceUpdate.style.backgroundColor = "rgb(97, 96, 83)";

    setTimeout(() => {
        currentSpiceUpdate.style.backgroundColor = "rgb(122, 119, 91)";
    }, "50");

    spiceTotal = spiceTotal - saltCost;
    saltCost = Math.round(saltCost * 1.15);
    visualSaltCost = saltCost;
    saltNumb = saltNumb + 1;
    saltSPS = saltSPS + 1;
    spsTotal = spsTotal + 1;
    saltVisSPS = saltSPS;

    if (saltSPS > 9999) {
        saltVisSPS = (Math.round(saltSPS / 1000)) + 'K';
    }
    if (saltSPS > 9999999) {
        saltVisSPS = (Math.round(saltSPS / 1000000)) + 'Mil';
    }

    document.getElementById('saltNumb').textContent = saltNumb;
    document.getElementById('overallSps').textContent = spsTotal + " Sps";
    document.getElementById('saltSps').textContent = saltVisSPS + "_sps";
    document.getElementById('overallSpice').textContent = spiceTotal + " Spice($)";

    updateVisualCost();
    }
}



function pepperUpdate() {
    if (spiceTotal >= pepperCost) {
    var currentSpiceUpdate = document.getElementById('pepperButton');
    currentSpiceUpdate.style.backgroundColor = "rgb(97, 96, 83)";

    setTimeout(() => {
        currentSpiceUpdate.style.backgroundColor = "rgb(122, 119, 91)";
    }, "50");

    spiceTotal = spiceTotal - pepperCost;
    pepperCost = Math.round(pepperCost * 1.15);
    visualPepperCost = pepperCost;
    pepperNumb = pepperNumb + 1;
    pepperSPS = pepperSPS + 5;
    spsTotal = spsTotal + 5;
    pepperVisSPS = pepperSPS;

    if (pepperSPS > 9999) {
        pepperVisSPS = (Math.round(pepperSPS / 1000)) + 'K';
    }
    if (pepperSPS > 9999999) {
        pepperVisSPS = (Math.round(pepperSPS / 1000000)) + 'Mil';
    }

    document.getElementById('pepperNumb').textContent = pepperNumb;
    document.getElementById('overallSps').textContent = spsTotal + " Sps";
    document.getElementById('pepperSps').textContent = pepperVisSPS + "_sps";
    document.getElementById('overallSpice').textContent = spiceTotal + " Spice($)";

    updateVisualCost();
    }
}



function cilantroUpdate() {
    if (spiceTotal >= cilantroCost) {
    var currentSpiceUpdate = document.getElementById('cilantroButton');
    currentSpiceUpdate.style.backgroundColor = "rgb(97, 96, 83)";

    setTimeout(() => {
        currentSpiceUpdate.style.backgroundColor = "rgb(122, 119, 91)";
    }, "50");

    spiceTotal = spiceTotal - cilantroCost;
    cilantroCost = Math.round(cilantroCost * 1.15);
    visualCilantroCost = cilantroCost;
    cilantroNumb = cilantroNumb + 1;
    cilantroSPS = cilantroSPS + 50;
    spsTotal = spsTotal + 50;
    cilantroVisSPS = cilantroSPS;

    if (cilantroSPS > 9999) {
        cilantroVisSPS = (Math.round(cilantroSPS / 1000)) + 'K';
    }
    if (cilantroSPS > 9999999) {
        cilantroVisSPS = (Math.round(cilantroSPS / 1000000)) + 'Mil';
    }

    document.getElementById('cilantroNumb').textContent = cilantroNumb;
    document.getElementById('overallSps').textContent = spsTotal + " Sps";
    document.getElementById('cilantroSps').textContent = cilantroVisSPS + "_sps";
    document.getElementById('overallSpice').textContent = spiceTotal + " Spice($)";

    updateVisualCost();
    }
}



function oreganoUpdate() {
    if (spiceTotal >= oreganoCost) {
    var currentSpiceUpdate = document.getElementById('oreganoButton');
    currentSpiceUpdate.style.backgroundColor = "rgb(97, 96, 83)";

    setTimeout(() => {
        currentSpiceUpdate.style.backgroundColor = "rgb(122, 119, 91)";
    }, "50");

    spiceTotal = spiceTotal - oreganoCost;
    oreganoCost = Math.round(oreganoCost * 1.15);
    visualOreganoCost = oreganoCost;
    oreganoNumb = oreganoNumb + 1;
    oreganoSPS = oreganoSPS + 100;
    spsTotal = spsTotal + 100;
    oreganoVisSPS = oreganoSPS;

    if (oreganoSPS > 9999) {
        oreganoVisSPS = (Math.round(oreganoSPS / 1000)) + 'K';
    }
    if (oreganoSPS > 9999999) {
        oreganoVisSPS = (Math.round(oreganoSPS / 1000000)) + 'Mil';
    }

    document.getElementById('oreganoNumb').textContent = oreganoNumb;
    document.getElementById('overallSps').textContent = spsTotal + " Sps";
    document.getElementById('oreganoSps').textContent = oreganoVisSPS + "_sps";
    document.getElementById('overallSpice').textContent = spiceTotal + " Spice($)";

    updateVisualCost();
    }
}



function peprikaUpdate() {
    if (spiceTotal >= peprikaCost) {
    var currentSpiceUpdate = document.getElementById('peprikaButton');
    currentSpiceUpdate.style.backgroundColor = "rgb(97, 96, 83)";

    setTimeout(() => {
        currentSpiceUpdate.style.backgroundColor = "rgb(122, 119, 91)";
    }, "50");

    spiceTotal = spiceTotal - peprikaCost;
    peprikaCost = Math.round(peprikaCost * 1.15);
    visualPeprikaCost = peprikaCost;
    peprikaNumb = peprikaNumb + 1;
    peprikaSPS = peprikaSPS + 500;
    spsTotal = spsTotal + 500;
    peprikaVisSPS = peprikaSPS;

    if (peprikaSPS > 9999) {
        peprikaVisSPS = (Math.round(peprikaSPS / 1000)) + 'K';
    }
    if (peprikaSPS > 9999999) {
        peprikaVisSPS = (Math.round(peprikaSPS / 1000000)) + 'Mil';
    }

    document.getElementById('peprikaNumb').textContent = peprikaNumb;
    document.getElementById('overallSps').textContent = spsTotal + " Sps";
    document.getElementById('peprikaSps').textContent = peprikaVisSPS + "_sps";
    document.getElementById('overallSpice').textContent = spiceTotal + " Spice($)";

    updateVisualCost();
    }
}

function garlicPowderUpdate() {
    if (spiceTotal >= garlicCost) {
    var currentSpiceUpdate = document.getElementById('garlicPowderButton');
    currentSpiceUpdate.style.backgroundColor = "rgb(97, 96, 83)";

    setTimeout(() => {
        currentSpiceUpdate.style.backgroundColor = "rgb(122, 119, 91)";
    }, "50");

    spiceTotal = spiceTotal - garlicCost;
    garlicCost = Math.round(garlicCost * 1.15);
    visualGarlicCost = garlicCost;
    garlicNumb = garlicNumb + 1;
    garlicSPS = garlicSPS + 2000;
    spsTotal = spsTotal + 2000;
    garlicVisSPS = garlicSPS;

    if (garlicSPS > 9999) {
        garlicVisSPS = (Math.round(garlicSPS / 1000)) + 'K';
    }
    if (garlicSPS > 9999999) {
        garlicVisSPS = (Math.round(garlicSPS / 1000000)) + 'Mil';
    }

    document.getElementById('garlicPowderNumb').textContent = garlicNumb;
    document.getElementById('overallSps').textContent = spsTotal + " Sps";
    document.getElementById('garlicPowderSps').textContent = garlicVisSPS + "_sps";
    document.getElementById('overallSpice').textContent = spiceTotal + " Spice($)";

    updateVisualCost();
    }
}

function onionPowderUpdate() {
    if (spiceTotal >= onionCost) {
    var currentSpiceUpdate = document.getElementById('onionPowderButton');
    currentSpiceUpdate.style.backgroundColor = "rgb(97, 96, 83)";

    setTimeout(() => {
        currentSpiceUpdate.style.backgroundColor = "rgb(122, 119, 91)";
    }, "50");

    spiceTotal = spiceTotal - onionCost;
    onionCost = Math.round(onionCost * 1.15);
    visualOnionCost = onionCost;
    onionNumb = onionNumb + 1;
    onionSPS = onionSPS + 10000;
    spsTotal = spsTotal + 10000;
    onionVisSPS = onionSPS;

    if (onionSPS > 9999) {
        onionVisSPS = (Math.round(onionSPS / 1000)) + 'K';
    }
    if (onionSPS > 9999999) {
        onionVisSPS = (Math.round(onionSPS / 1000000)) + 'Mil';
    }

    document.getElementById('onionPowderNumb').textContent = onionNumb;
    document.getElementById('overallSps').textContent = spsTotal + " Sps";
    document.getElementById('onionPowderSps').textContent = onionVisSPS + "_sps";
    document.getElementById('overallSpice').textContent = spiceTotal + " Spice($)";

    updateVisualCost();
    }
}



function cuminUpdate() {
    if (spiceTotal >= cuminCost) {
    var currentSpiceUpdate = document.getElementById('cuminButton');
    currentSpiceUpdate.style.backgroundColor = "rgb(97, 96, 83)";

    setTimeout(() => {
        currentSpiceUpdate.style.backgroundColor = "rgb(122, 119, 91)";
    }, "50");

    spiceTotal = spiceTotal - cuminCost;
    cuminCost = Math.round(cuminCost * 1.15);
    visualCuminCost = cuminCost;
    cuminNumb = cuminNumb + 1;
    cuminSPS = cuminSPS + 40000;
    spsTotal = spsTotal + 40000;
    cuminVisSPS = cuminSPS;

    if (cuminSPS > 9999) {
        cuminVisSPS = (Math.round(cuminSPS / 1000)) + 'K';
    }
    if (cuminSPS > 9999999) {
        cuminVisSPS = (Math.round(cuminSPS / 1000000)) + 'Mil';
    }

    document.getElementById('cuminNumb').textContent = cuminNumb;
    document.getElementById('overallSps').textContent = spsTotal + " Sps";
    document.getElementById('cuminSps').textContent = cuminVisSPS + "_sps";
    document.getElementById('overallSpice').textContent = spiceTotal + " Spice($)";

    updateVisualCost();
    }
}



function cinnamonUpdate() {
    if (spiceTotal >= cinnamonCost) {
    var currentSpiceUpdate = document.getElementById('cinnamonButton');
    currentSpiceUpdate.style.backgroundColor = "rgb(97, 96, 83)";

    setTimeout(() => {
        currentSpiceUpdate.style.backgroundColor = "rgb(122, 119, 91)";
    }, "50");

    spiceTotal = spiceTotal - cinnamonCost;
    cinnamonCost = Math.round(cinnamonCost * 1.15);
    visualCinnamonCost = cinnamonCost;
    cinnamonNumb = cinnamonNumb + 1;
    cinnamonSPS = cinnamonSPS + 200000;
    spsTotal = spsTotal + 200000;
    cinnamonVisSPS = cinnamonSPS;

    if (cinnamonSPS > 9999) {
        cinnamonVisSPS = (Math.round(cinnamonSPS / 1000)) + 'K';
    }
    if (cinnamonSPS > 9999999) {
        cinnamonVisSPS = (Math.round(cinnamonSPS / 1000000)) + 'Mil';
    }

    document.getElementById('cinnamonNumb').textContent = cinnamonNumb;
    document.getElementById('overallSps').textContent = spsTotal + " Sps";
    document.getElementById('cinnamonSps').textContent = cinnamonVisSPS + "_sps";
    document.getElementById('overallSpice').textContent = spiceTotal + " Spice($)";

    updateVisualCost();
    }
}

updateVisualCost();