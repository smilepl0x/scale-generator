const app = {
    triads: ["Major", "minor", "diminished", "augmented", "sus2", "sus4"],
    extensions: ["#5", "#9", "#11", "b5", "b9", "b13", "6/9"],
}

const scales = [
    // Major
    {name: "Ionian", zero: 0, one: 2, two: 4, three: 5, four: 7, five: 8, six: 11},
    {name: "Dorian", zero: 0, one: 2, two: 3, three: 5, four: 7, five: 9, six: 10},
    {name: "Phrygian", zero: 0, one: 1, two: 3, three: 5, four: 7, five: 8, six: 10},
    {name: "Lydian", zero: 0, one: 2, two: 4, three: 6, four: 7, five: 9, six: 11},
    {name: "Mixolydian", zero: 0, one: 2, two: 4, three: 5, four: 7, five: 9, six: 11},
    {name: "Aeolian", zero: 0, one: 2, two: 3, three: 5, four: 7, five: 8, six: 10},
    {name: "Locrian", zero: 0, one: 1, two: 3, three: 5, four: 6, five: 8, six: 10},

    // Harmonic Minor
    {name: "Harmonic Minor", zero: 0, one: 2, two: 3, three: 5, four: 7, five: 8, six: 11},
    {name: "Locrian #6", zero: 0, one: 1, two: 3, three: 5, four: 6, five: 9, six: 10},
    {name: "Ionian #5", zero: 0, one: 2, two: 4, three: 5, four: 8, five: 9, six: 11},
    {name: "Dorian #4", zero: 0, one: 2, two: 3, three: 6, four: 7, five: 9, six: 10},
    {name: "Phrygian #3", zero: 0, one: 1, two: 4, three: 5, four: 7, five: 8, six: 10},
    {name: "Lydian #2", zero: 0, one: 3, two: 4, three: 6, four: 7, five: 9, six: 11},
    {name: "Ultralocrian", zero: 0, one: 1, two: 3, three: 4, four: 6, five: 8, six: 9},

    // Melodic Minor
    {name: "Melodic Minor", zero: 0, one: 2, two: 3, three: 5, four: 7, five: 9, six: 11},
    {name: "Dorian b2", zero: 0, one: 1, two: 3, three: 5, four: 7, five: 9, six: 10},
    {name: "Lydian Augmented", zero: 0, one: 2, two: 4, three: 6, four: 8, five: 9, six: 11},
    {name: "Lydian Dominant", zero: 0, one: 2, two: 4, three: 6, four: 7, five: 9, six: 10},
    {name: "Mixolydian b6", zero: 0, one: 2, two: 4, three: 5, four: 7, five: 8, six: 10},
    {name: "Locrian ♮2", zero: 0, one: 2, two: 3, three: 5, four: 6, five: 8, six: 10},
    {name: "Altered", zero: 0, one: 1, two: 3, three: 4, four: 6, five: 8, six: 10},

    // Harmonic Major
    {name: "Harmonic Major", zero: 0, one: 2, two: 4, three: 5, four: 7, five: 8, six: 11},
    {name: "Dorian b5", zero: 0, one: 2, two: 3, three: 5, four: 6, five: 9, six: 10},
    {name: "Phrygian b4", zero: 0, one: 1, two: 3, three: 4, four: 7, five: 8, six: 10},
    {name: "Lydian Minor", zero: 0, one: 2, two: 3, three: 6, four: 7, five: 9, six: 11},
    {name: "Mixolydian b9", zero: 0, one: 1, two: 4, three: 5, four: 7, five: 9, six: 10},
    {name: "Lydian Augmented #2", zero: 0, one: 3, two: 4, three: 6, four: 8, five: 9, six: 11},
    {name: "Locrian bb7", zero: 0, one: 1, two: 3, three: 5, four: 6, five: 8, six: 9},

    // Diminished
    {name: "WH (fully diminished)", zero: 0, one: 2, two: 3, three: 5, four: 6, five: 8, six: 9, seven: 11},
    {name: "HW (dominant diminished)", zero: 0, one: 1, two: 3, three: 4, four: 6, five: 7, six: 9, seven: 10},

    // Hexatonic
    {name: "Whole Tone", zero: 0, one: 2, two: 4, three: 6, four: 8, five: 10},
    {name: "Augmented", zero: 0, one: 3, two: 4, three: 7, four: 8, five: 11},
    {name: "Major Blues", zero: 0, one: 2, two: 3, three: 4, four: 7, five: 9},
    {name: "Minor Blues", zero: 0, one: 3, two: 5, three: 6, four: 7, five: 10}
]

// The object the user builds
let userChord = {
    zero: 0,
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
    six: null,
    seven: null
}

// Updates userChord with chord components
function userChordHandler(chordComponent) {
    switch (chordComponent) {
        case "Major": {
            userChord.two = 4;
            userChord.four = 7;
            break;
        }
        case "minor": {
            userChord.two = 3;
            userChord.four = 7;
            break;
        }
        case "diminished": {
            userChord.two = 3;
            userChord.four = 6;
            break;
        }
        case "augmented": {
            userChord.two = 4;
            userChord.four = 8;
            break;
        }
        case "sus2": {
            userChord.two = 2;
            userChord.four = 7;
            break;
        }
        case "sus4": {
            userChord.two = 5;
            userChord.four = 7;
            break;
        }
        case "maj7": {
            userChord.six = 11;
            break;
        }
        case "maj7": {
            userChord.six = 10;
            break;
        }
        case "maj7": {
            userChord.six = 9;
            break;
        }
        default: {
            console.log("Something went wrong");
            break;
        }
    }
}

// Create triad buttons
function createTriads() {
    let triadDiv = document.getElementById("triads");
    for (let triad of app.triads) {
        triadDiv.innerHTML += `<div class="btn btn-secondary w-50 m-2 triad-btn">${triad}</div>`;
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
        seventhsDiv.innerHTML += `<div class="btn btn-secondary w-50 m-2 seventh-btn">${result}</div>`;
    }
}

// Create extensions buttons
function createExtensions() {
    let extensionsDiv = document.getElementById("extensions");
    for (let extension of app.extensions) {
        extensionsDiv.innerHTML += `<div class="btn btn-secondary w-50 m-2 extension-btn">${extension}</div>`;
    }
}

// checks if passed scale matches userChord
function matches(scale) {
    let matches = false;

    for (let step in userChord) {
        if (userChord[step] === null) {
            continue;
        }

        if (userChord[step] === scale[step]) {
            matches = true;
        }
        else {
            matches = false;
            break;
        }
    }

    return matches;
}

// Update scales
function updateScales(userChord) {
    // Clear userScales
    let userScales = [];

    // Pass each scale into the matches() function to see if it matches userChord.
    scalesResult = scales.filter(scale => matches(scale));

    // Append each matching scale to userScales
    scalesResult.forEach(scale => userScales.push(scale.name));

    // Update the scale div with results.
    let scalesDiv = document.getElementById("scaleFlex");
    for (let scale of userScales) {
        scalesDiv.innerHTML += `<div class="flex-grow-1 btn-secondary rounded p-2 m-2 scales-btn">${scale}</div>`
    }
}

$(document).ready(function(){

    createTriads();

    $("#select-chord").click(function(){
        $("#triads").slideDown("slow");
    });

    $(".triad-btn").click(function(){
        $("#select-chord").text($(this).text());
        $(this).parent().slideUp("slow");

        userChordHandler($(this).text());
        updateScales(userChord);
        
        createSevenths($(this).text());
        $("#sevenths").slideDown("slow");

        $(".seventh-btn").click(function(){
            $("#select-chord").text($("#select-chord").text() + " " + $(this).text());
            $(this).parent().slideUp("slow");

            userChordHandler($(this).text());
            updateScales(userChord);

            createExtensions($(this).text());
            $("#extensions").slideDown("slow");

            $(".extension-btn").click(function(){
                $("#select-chord").text($("#select-chord").text() + " " + $(this).text())
                $("#extensions").slideUp("slow");
                console.log(Object.entries(userChord));
            })
        })
    })
});
