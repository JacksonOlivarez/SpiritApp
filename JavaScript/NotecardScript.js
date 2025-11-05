
allNotecardSets = {}; // {"name of deck" : dict{"Card One Front" : "Card One Back"...}}
exampleNotecards = {};
blankNotecards = {};
allNotecardSets["ExampleSet"] = exampleNotecards;
allNotecardSets.push(blankNotecards);


// Test for now, fill out with more useful notecards   
exampleNoteCards["Name"] = "Example Cards"
exampleNotecards["Card One"] = "Response One";
exampleNotecards["Card Two"] = "Response Two";
exampleNotecards["Card Three"] = "Response Three";

// Function to pick a set to focus on, return the dictionary of notecards

document.addEventListener('DOMContentLoaded', () => {
    const addCardBtn = document.getElementById("addCardButton");
    const doneBtn = document.getElementById("doneButton");

    addCard.addEventListener("click", addCard)
    doneBtn.addEventListener("click", finishSet)
})

// Function to create a new Notecard set

let currentSetName = ""; // Set that is currently being worked on

function addCard(){
    const input_setName = document.getElementById("setName");
    const input_sideOne = document.getElementById("sideOne");
    const input_sideTwo = document.getElementById("sideTwo");

    if (currentSetName == ""){
        // First card of the set
        currentSetName = input_setName.value.trim()
        if (currentSetName == ""){
            alert("Please enter the name of the set.")
            return;
        }
        currentSet = {};
    }

    const sideOne = input_sideOne.value.trim();
    const sideTwo = input_sideTwo.value.trim();

    if (sideOne == "" || sideTwo == "") {
        alert("Please fill out BOTH sides of the notecard.")
        return;
    }
    
    currentSet[sideOne] = sideTwo;

    input_sideOne.value = "";
    input_sideTwo.value = "";
}

function finishSet(){
    // Set is all done, finalize it and reset variables for next set.
    if (!currentSetName){
        alert("No set is being created!")
        break;
    }

    allNotecardSets[currentSetName] = currentSet;
    
    alert("Finished creating set: " + currentSetName + " with " + $Object.keys(currentSet).length);

    // Reset Variables
    currentSet = {};
    currentSetName = "";
    document.getElementById("setName").value = "";
}

// Function to remove a notecard set
function removeSet(setToRemoveName){
    delete allNotecardSets[setToRemoveName];
}

function getSet(getSetName){
    if (getSetName in allNotecardSets){
        return allNotecardSets[getSetName];
    }
    console.log("Set Name not found! Searched for " + getSetName);
    return;
}

// Function to edit a notecard set (take input from HTML?)
// Still workingo n this one