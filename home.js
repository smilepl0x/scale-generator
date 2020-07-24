let app = {
    triads: ["Major", "minor", "diminished", "augmented", "sus2", "sus4"],
    sevenths: ["maj7", "7", "6", "m7", "mMaj7", "m6", "half diminished", "full diminished", "augmented 7", "Maj7sus2", "7sus2", "Maj7sus4", "7sus4"],
    extensions: ["#5", "#9", "#11", "b5", "b9", "b13", "6/9"],
    scales: ["Ionian", "Dorian", "Phrygian", "Lydian", "Mixolydian", "Aeolian", "Locrian", "Harmonic minor","Locrian #6", "Ionian #5", "Dorian #4",
            "Phrygian #3", "Lydian #2", "Melodic minor", "Dorian b2", "Lydian augmented", "Lydian dominant", "Mixolydian b6", "Locrian ♮2", "Altered",
            "WH (fully diminished)", "HW (dominant diminished)", "Whole tone"]
}

// Create triad buttons
let triadDiv = document.getElementById("triads");
for (let triad of app.triads) {
    triadDiv.innerHTML += `<div class="btn btn-secondary m-2 triad-btn">${triad}</div>`;
}


// Create sevenths buttons
let seventhsDiv = document.getElementById("sevenths");
for (let seventh of app.sevenths) {
    seventhsDiv.innerHTML += `<div class="btn btn-secondary m-2 seventh-btn">${seventh}</div>`;
}


// Create extensions buttons
let extensionsDiv = document.getElementById("extensions");
for (let extension of app.extensions) {
    extensionsDiv.innerHTML += `<div class="btn btn-secondary m-2 extension-btn">${extension}</div>`;
}

// Create scales
let scalesDiv = document.getElementById("scales");
for (let scale of app.scales) {
    scalesDiv.innerHTML += `<div class="btn btn-secondary m-2">${scale}</div>`;
}


$(document).ready(function(){

    $("#select-chord").click(function(){
        $("#triads").slideToggle("slow");
    });

    $(".triad-btn").click(function(){
        $("#select-chord").text($(this).text());
        $(this).parent().slideToggle("slow");
        $("#sevenths").slideToggle("slow");
    })

    $(".seventh-btn").click(function(){
        $("#select-chord").text($("#select-chord").text() + " " + $(this).text())
        $(this).parent().slideToggle("slow");
        $("#extensions").slideToggle("slow");
    })

    $(".extension-btn").click(function(){
        $("#select-chord").text($("#select-chord").text() + " " + $(this).text())
        $("#extensions").slideToggle("slow");
        $("#scales").slideToggle("slow");
    })

});
