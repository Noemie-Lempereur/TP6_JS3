function addSegments(digitId) {
    let digit = document.getElementById(digitId);
    for (let j = 0; j <= 6; j++) {
        let segment = document.createElement("div");
        segment.className = "segment off segment" + j;
        digit.appendChild(segment);
    }
}

function updateDigit(digitId, value) {

    let segmentStates = [
        [1, 1, 1, 0, 1, 1, 1],
        [0, 0, 1, 0, 0, 1, 0],
        [1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 1, 1],
        [0, 1, 1, 1, 0, 1, 0],
        [1, 1, 0, 1, 0, 1, 1],
        [1, 1, 0, 1, 1, 1, 1],
        [1, 0, 1, 0, 0, 1, 0],
        [1, 1, 1, 1, 1, 1, 1],
        [1, 1, 1, 1, 0, 1, 1]
    ];
    for (let j = 0; j <= 6; j++) {
        if (segmentStates[value][j] == 0) {
            let d = document.querySelector("#" + digitId).querySelector(".segment" + j);
            d.className = "segment off segment" + j;
        }
        else {
            let d = document.querySelector("#" + digitId).querySelector(".segment" + j);
            d.className = "segment segment" + j;
        }
    }
}



function init() {
    addSegments("hours-tens");
    addSegments("hours-units");
    addSegments("minutes-tens");
    addSegments("minutes-units");
}



function main() {

    init();
    let date = new Date();
    let minute1 = 0;
    let minute2 = date.getMinutes();
    while (minute2 >= 10) {
        minute2 = minute2 - 10;
        minute1++;
    }
    let heure2 = date.getHours();
    let heure1 = 0;
    while (heure2 >= 10) {
        heure2 = heure2 - 10;
        heure1++;
    }
    updateDigit("hours-tens", heure1);
    updateDigit("hours-units", heure2);
    updateDigit("minutes-tens", minute1);
    updateDigit("minutes-units", minute2);
}


main();
