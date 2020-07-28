const app = {
    triads: ["Major", "minor", "diminished", "augmented", "sus2", "sus4"],
    alterations: ["#5", "♭5", "#9", "♭9", "#11", "♭13"]
}

const scales = [
    // Major
    {name: "Ionian", intervals: [0, 2, 4, 5, 7, 9, 11]},
    {name: "Dorian", intervals: [0, 2, 3, 5, 7, 9, 10]},
    {name: "Phrygian", intervals: [0, 1, 3, 5, 7, 8, 10]},
    {name: "Lydian", intervals: [0, 2, 4, 6, 7, 9, 11]},
    {name: "Mixolydian", intervals: [0, 2, 4, 5, 7, 9, 10]},
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
        case "Maj7":
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
        case "Maj9":
        case "9":
        case "m9":
        case "mMaj9":
        case "9 (no 3)":
        case "9sus4":
        case "Maj11 (no 3)":
        case "11 (no 3)": {
            userChord.push(2);
            break;
        }
        case "Maj11":
        case "11":
        case "m11": 
        case "mMaj11": {
            userChord.push(2, 5);
            break;
        }
        case "Maj13":
        case "13":
        case "m13":
        case "mMaj13": {
            userChord.push(2, 5, 9);
            break;
        }
        case "Maj9sus4": 
        case "Maj11sus2": 
        case "11sus2": {
            userChord.push(5);
            break;
        }
        case "Maj13sus2":
        case "13sus2": {
            userChord.push(5, 9)
        }
        case "Maj13sus4":
        case "13sus4": {
            userChord.push(2, 9)
        }
        case "#5": {
            userChord[userChord.indexOf(7)] = 8;
            break;
        }
        case "♭5": {
            userChord[userChord.indexOf(7)] = 6;
            break;
        }
        case "#9": {
            if (userChord[userChord.indexOf(2)] > -1) {
                userChord[userChord.indexOf(2)] = 3;
            }
            else {
                userChord.push(3);
            }
            break;
        }
        case "♭9": {
            if (userChord[userChord.indexOf(2)] > -1) {
                userChord[userChord.indexOf(2)] = 1;
            }
            else {
                userChord.push(1);
            }
            break;
        }
        case "#11": {
            userChord.push(6);
            break;
        }
        case "♭13": {
            userChord.push(8);
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
    const triadDiv = document.getElementById("triads");
    for (let triad of app.triads) {
        triadDiv.innerHTML += `<div class="btn btn-secondary w-50 m-2 triad-btn">${triad}</div>`;
    }
}


// Create possible seventh buttons using passed triad
function createSevenths(triad) {

    // Grab div and clear it
    const seventhsDiv = document.getElementById("sevenths");
    seventhsDiv.innerHTML = null;

    let results = [];

    switch (triad) {
        case "Major": {
            results = ["Maj7", "7", "6"];
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
    // Grab div and clear it
    const extensionsDiv = document.getElementById("extensions");
    extensionsDiv.innerHTML = null;

    console.log(typeof(seventh));
    let results = [];

    switch (seventh) {
        case "Maj7": {
            results = ["Maj9", "Maj11", "Maj13"];
            break;
        }
        case "7": {
            results = ["9", "11", "13"];
            break;
        }
        case "m7": {
            results = ["m9", "m11", "m13"];
            break;
        }
        case "mMaj7": {
            results = ["mMaj9", "mMaj11", "mMaj13"];
            break;
        }
        case "Maj7sus2": {
            results = ["Maj9 (no 3)", "Maj11sus2", "Maj13sus2"];
            break;
        }
        case "7sus2": {
            results = ["9 (no 3)", "11sus2", "13sus2"];
            break;
        }
        case "Maj7sus4": {
            results = ["Maj9sus4", "Maj11 (no 3)", "Maj13sus4"];
            break;
        }
        case "7sus4": {
            results = ["9sus4", "11 (no 3)", "13sus4"];
            break;
        }
        default: {
            console.log("Something went wrong when creating the extensions");
        }
    }

    // Load div
    for (let result of results) {
        extensionsDiv.innerHTML += `<div class="btn btn-secondary w-50 m-2 extension-btn">${result}</div>`;
    }
}

function createAlterations() {
    const alterationDiv = document.getElementById("alterationFlex");

    for (let alteration of app.alterations) {
        alterationDiv.innerHTML += `<div class="btn btn-secondary w-50 m-2 alteration-btn">${alteration}</div`;
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

// JQuery
$(document).ready(function(){

    createTriads();

    $(".triad-btn").click(function(){
        $("#select-chord").text($(this).text());
        $(this).parent().slideUp("slow");

        userChordHandler($(this).text());
        updateScales(userChord);
        
        createSevenths($(this).text());
        $("#sevenths").slideDown("slow");

        $(".seventh-btn").click(function(){
            $("#select-chord").text($(this).text());
            $(this).parent().slideUp("slow");

            userChordHandler($(this).text());
            updateScales(userChord);

            createAlterations();
            $(".alteration-btn").click(function(){
                $("#select-chord").text($("#select-chord").text() + $(this).text());
                $(this).addClass("disabled");

                userChordHandler($(this).text());
                updateScales(userChord);
            })

            createExtensions($(this).text());
            $("#extensions").slideDown("slow");

            $(".extension-btn").click(function(){
                $("#select-chord").text($(this).text())

                userChordHandler($(this).text());
                updateScales(userChord);

            })
        })
    })
});
