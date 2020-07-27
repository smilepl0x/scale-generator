const app = {
    triads: ["Major", "minor", "diminished", "augmented", "sus2", "sus4"],
}

const scales = [
    // Major
    {name: "Ionian", intervals: [0, 2, 4, 5, 7, 8, 11]},
    {name: "Dorian", intervals: [0, 2, 3, 5, 7, 9, 10]},
    {name: "Phrygian", intervals: [0, 1, 3, 5, 7, 8, 10]},
    {name: "Lydian", intervals: [0, 2, 4, 6, 7, 9, 11]},
    {name: "Mixolydian", intervals: [0, 2, 4, 5, 7, 9, 11]},
    {name: "Aeolian", intervals: [0, 2, 3, 5, 7, 8, 10]},
    {name: "Locrian", intervals: [0, 1, 3, 5, 6, 8, 10]},

    // Harmonic Minor
    {name: "Harmonic Minor", intervals: [0, 2, 3, 5, 7, 8, 11]},
    {name: "Locrian #6", intervals: [0, 2, 3, 5, 7, 8, 11]},
    {name: "Ionian #5", intervals: [0, 2, 4, 5, 8, 9, 11]},
    {name: "Dorian #4", intervals: [0, 2, 3, 6, 7, 9, 10]},
    {name: "Phrygian #3", intervals: [0, 1, 4, 5, 7, 8, 10]},
    {name: "Lydian #2", intervals: [0, 3, 4, 6, 7, 9, 11]},
    {name: "Ultralocrian", intervals: [0, 1, 3, 4, 6, 8, 9]},

    // Melodic Minor
    {name: "Melodic Minor", intervals: [0, 2, 3, 5, 7, 9, 11]},
    {name: "Dorian b2", intervals: [0, 1, 3, 5, 7, 9, 10]},
    {name: "Lydian Augmented", intervals: [0, 2, 4, 6, 8, 9, 11]},
    {name: "Lydian Dominant", intervals: [0, 2, 4, 6, 7, 9, 10]},
    {name: "Mixolydian b6", intervals: [0, 2, 4, 6, 7, 9, 10]},
    {name: "Locrian ♮2", intervals: [0, 2, 3, 5, 6, 8, 10]},
    {name: "Altered", intervals: [0, 1, 3, 4, 6, 8, 10]},

    // Harmonic Major
    {name: "Harmonic Major", intervals: [0, 2, 4, 5, 7, 8, 11]},
    {name: "Dorian b5", intervals: [0, 2, 3, 5, 6, 9, 10]},
    {name: "Phrygian b4", intervals: [0, 1, 3, 4, 7, 8, 10]},
    {name: "Lydian Minor", intervals: [0, 2, 3, 6, 7, 9, 11]},
    {name: "Mixolydian b9", intervals: [0, 1, 4, 5, 7, 9, 10]},
    {name: "Lydian Augmented #2", intervals: [0, 3, 4, 6, 8, 9, 11]},
    {name: "Locrian bb7", intervals: [0, 1, 3, 5, 6, 8, 9]},

    // Diminished
    {name: "WH (fully diminished)", intervals: [0, 2, 3, 5, 6, 8, 9, 11]},
    {name: "HW (dominant diminished)", intervals: [0, 1, 3, 4, 6, 7, 9, 10]},

    // Hexatonic
    {name: "Whole Tone", intervals: [0, 2, 4, 6, 8, 10]},
    {name: "Augmented", intervals: [0, 3, 4, 7, 8, 11]},
    {name: "Major Blues", intervals: [0, 2, 3, 4, 7, 9]},
    {name: "Minor Blues", intervals: [0, 3, 5, 6, 7, 10]}
]

// The array the user builds
let userChord = [0];

// Updates userChord with chord components
function userChordHandler(chordComponent) {
    switch (chordComponent) {
        case "Major": {
            userChord.push(4, 7);
            break;
        }
        case "minor": {
            userChord.push(3, 7)
            break;
        }
        case "diminished": {
            userChord.push(3, 6);
            break;
        }
        case "augmented": {
            userChord.push(4, 8);
            break;
        }
        case "sus2": {
            userChord.push(2, 7);
            break;
        }
        case "sus4": {
            userChord.push(5, 7);
            break;
        }
        case "maj7":
        case "mMaj7": 
        case "augmented Maj7": 
        case "Maj7sus2":
        case "Maj7sus4": {
            userChord.push(11);
            break;
        }
        case "7":
        case "m7":
        case "half diminshed":
        case "augmented 7":
        case "7sus2":
        case "7sus4": {
            userChord.push(10);
            break;
        }
        case "6":
        case "m6":
        case "full diminished": {
            userChord.push(9);
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


// Create possible seventh buttons using passed triad
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

// Create possible extension buttons using passed seventh
function createExtensions(seventh) {
    let extensionsDiv = document.getElementById("extensions");
    for (let extension of app.extensions) {
        extensionsDiv.innerHTML += `<div class="btn btn-secondary w-50 m-2 extension-btn">${extension}</div>`;
    }
}

// checks if passed scale matches userChord
function matches(scale) {
    return userChord.every(i => scale.intervals.includes(i))
}

// Update scales
function updateScales(userChord) {
    // Grab scales div and clear it
    let scalesDiv = document.getElementById("scaleFlex");
    scalesDiv.innerHTML = null;

    // Create array
    let userScales = [];

    // Pass each scale into the matches() function to see if it matches userChord.
    scalesResult = scales.filter(scale => matches(scale));

    // Append each matching scale to userScales
    scalesResult.forEach(scale => userScales.push(scale.name));

    // Update the scale div with results.
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
            })
        })
    })
});
