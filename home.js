const app = {
    triads: ["Major", "minor", "diminished", "augmented", "sus2", "sus4"],
    sevenths: ["maj7", "7", "6", "m7", "mMaj7", "m6", "half diminished", "full diminished", "augmented 7", "Maj7sus2", "7sus2", "Maj7sus4", "7sus4"],
    extensions: ["#5", "#9", "#11", "b5", "b9", "b13", "6/9"],
    scales: ["Ionian", "Dorian", "Phrygian", "Lydian", "Mixolydian", "Aeolian", "Locrian", "Harmonic minor","Locrian #6", "Ionian #5", "Dorian #4",
            "Phrygian #3", "Lydian #2", "Melodic minor", "Dorian b2", "Lydian augmented", "Lydian dominant", "Mixolydian b6", "Locrian ♮2", "Altered",
            "WH (fully diminished)", "HW (dominant diminished)", "Whole tone"],
    userScales: Array()
}

const scales = {
    // Major
    ionian: [1, 3, 5, 6, 8, 10, 12],
    dorian: [1, 3, 4, 6, 8, 10, 11],
    phrygian: [1, 2, 4, 6, 8, 9, 11],
    lydian: [1, 3, 5, 7, 8, 10, 12],
    mixolydian: [1, 3, 5, 6, 8, 10, 12],
    aeolian: [1, 3, 4, 6, 8, 9, 11],
    locrian: [1, 2, 4, 6, 7, 9, 11],

    // Harmonic Minor
    harmonic_minor: [1, 3, 4, 6, 8, 9, 12],
    locrian_6: [1, 2, 4, 6, 7, 10, 11],
    ionian_5: [1, 3, 5, 6, 9, 10, 12],
    dorian_4: [1, 3, 4, 7, 8, 10, 11],
    phrygian_3: [1, 2, 5, 6, 8, 9, 11],
    lydian_2: [1, 4, 5, 7, 8, 10, 12],

    // Melodic Minor
    melodic_minor: [1, 3, 4, 6, 8, 10, 12],
    dorian_b2: [1, 2, 4, 6, 8, 10, 11],
    lydian_augmented: [1, 3, 5, 7, 9, 10, 12],
    lydian_dominant: [1, 3, 5, 7, 8, 10, 11],
    mixolydian_b6: [1, 3, 5, 6, 8, 9, 11],
    locrian_nat_2: [1, 3, 4, 6, 7, 9, 11],
    altered: [1, 2, 4, 5, 7, 9, 11],

    // Harmonic Major
    harmonic_major: [1, 3, 5, 6, 8, 9, 12],
    dorian_b5: [1, 3, 4, 6, 7, 10, 11],
    phrygian_b4: [1, 2, 4, 5, 8, 9, 11],
    lydian_minor: [1, 3, 4, 7, 8, 10, 12],
    mixolydian_b9: [1, 2, 5, 6, 8, 10, 11],
    lydian_aug_9: [1, 4, 5, 7, 9, 10, 12],
    locrian_bb7: [1, 2, 4, 6, 7, 9, 10],

    // Diminished
    wh_fully_diminished: [1, 3, 4, 6, 7, 9, 10, 12],
    hw_dominant_diminished: [1, 2, 4, 5, 7, 8, 10, 11],

    // Hexatonic
    whole_tone: [1, 3, 5, 7, 9, 11],
    augmented: [1, 4, 5, 8, 9, 12]
}

let userChord = {
    one: 1,
    two: null,
    three: null,
    four: null,
    five: null,
    six: null,
    seven: null,
    eight: null
}

function userChordHandler(chordComponent) {
    switch (chordComponent) {
        case "Major": {
            userChord.three = 5;
            userChord.five = 8;
            break;
        }
        case "minor": {
            userChord.three = 4;
            userChord.five = 8;
            break;
        }
        case "diminished": {
            userChord.three = 4;
            userChord.five = 7;
            break;
        }
        case "augmented": {
            userChord.three = 5;
            userChord.five = 9;
            break;
        }
        case "sus2": {
            userChord.three = 3;
            userChord.five = 8;
            break;
        }
        case "sus4": {
            userChord.three = 6;
            userChord.five = 8;
            break;
        }
        default: {
            console.log("Something went wrong");
            break;
        }
    }

    console.log(userChord);
}

// Create triad buttons
function createTriads() {
    let triadDiv = document.getElementById("triads");
    for (let triad of app.triads) {
        triadDiv.innerHTML += `<div class="btn btn-secondary m-2 triad-btn">${triad}</div>`;
    }
}


// Create sevenths buttons
function createSevenths(triad) {
    // Grab div and clear it
    let seventhsDiv = document.getElementById("sevenths");
    seventhsDiv.innerHTML = null;

    let results = [];

    switch (triad) {
        case "Major": {
            results = ["maj7", "7", "6"];
            break;
        }
        case "minor": {
            results = ["m7", "mMaj7", "m6"];
            break;
        }
        case "diminished": {
            results = ["half diminished", "full diminished"];
            break;
        }
        case "augmented": {
            results = ["augmented Maj7", "augmented 7"];
            break;
        }
        case "sus2": {
            results = ["Maj7sus2", "7sus2"];
            break;
        }
        case "sus4": {
            results = ["Maj7sus4", "7sus4"];
            break;
        }
        default: {
            console.log("Something went wrong when creating the sevenths");
        }
    }

    // Load div
    for (let result of results) {
        seventhsDiv.innerHTML += `<div class="btn btn-secondary m-2 seventh-btn">${result}</div>`;
    }
}

// Create extensions buttons
function createExtensions() {
    let extensionsDiv = document.getElementById("extensions");
    for (let extension of app.extensions) {
        extensionsDiv.innerHTML += `<div class="btn btn-secondary m-2 extension-btn">${extension}</div>`;
    }
}

// Create scales
let scalesDiv = document.getElementById("scales");
for (let scale of app.scales) {
    scalesDiv.innerHTML += `<div class="btn btn-secondary m-2">${scale}</div>`;
}

// Update scales
function updateScales() {
    // TODO: Write logic to update the scales div when user makes a selection
}


$(document).ready(function(){

    createTriads();

    $("#select-chord").click(function(){
        $("#triads").slideDown("slow");
    });

    $(".triad-btn").click(function(){
        $("#select-chord").text($(this).text());
        $(this).parent().slideUp("slow");
        $("#sevenths").slideDown("slow");
        userChordHandler($(this).text());
        
        createSevenths($(this).text());

        $(".seventh-btn").click(function(){
            $("#select-chord").text($("#select-chord").text() + " " + $(this).text());
            $(this).parent().slideUp("slow");
            $("#extensions").slideDown("slow");

            createExtensions($(this).text());

            $(".extension-btn").click(function(){
                $("#select-chord").text($("#select-chord").text() + " " + $(this).text())
                $("#extensions").slideUp("slow");
                $("#scales").slideDown("slow");
            })
        })
    })
});
