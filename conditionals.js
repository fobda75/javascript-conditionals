let clickCount = 0;
let birthYear = 0;
let purchAmount = 0;
let taxMultiplier = 0;

$(document).ready(function () {
    // add the functions as event listeners
    // to the forms in the HTML
    $("#clickForm").on("submit", countClick);
    $("#ageForm").on("submit", checkAge);
    $("#taxForm").on("submit", calcSalesTax);
    $("#catForm").on("submit", recommendFood);
    $("#cardForm").on("submit", drawCard);
});

function countClick(event) {
    event.preventDefault();

    // Increment a variable that tracks the
    // number of button clicks
    clickCount ++;

    // Print the current number of clicks to the
    // <p> with ID "clickCountOutput"
    $("#clickCountOutput").text(clickCount);

    // When the count gets to 10, reset it to 0
    if (clickCount >= 10){
        clickCount = 0;
    }


}


function checkAge(event) {
    event.preventDefault();

    // Get the user's birth year from the text
    // box with ID of "birthYear"
        birthYear = $("#birthYear").val();

    // If they are currently under 18, print "Child"
    // to the <p> with ID of "birthYearOutput"
        if(Date().getFullYear() - birthYear < 18){
            $("#birthYearOutput").text("Child");
        }
    // If they are 18 or over, print "Adult" instead
        else{
            $("#birthYearOutput").text("Adult");
        }
}

function calcSalesTax(event) {
    event.preventDefault();

    // Get the purchase amount from the text
    // box with ID of "purchaseAmount"
        purchAmount = $("#purchaseAmount").val();
    // Get the state from the text box with ID "state"

    // Tax rates are: WI 5%, IL 8%, MN 7.5%, MI 5.5%

    // Calculate the sales tax amount and print to
    // the <p> with ID of "salesTaxOutput"
        switch($("#state").val()){
            case "WI":
                taxMultiplier = .05;
                break;

            case "IL":
                taxMultiplier = .08;
                break;

            case "MN":
                taxMultiplier = .075;
                break;

            case "MI":
                taxMultiplier = .055;
                break;

            default:
                taxMultiplier = 1;
                break;
        }

        if(taxMultiplier < 1){
            $("#salesTaxOutput").text(purchAmount*taxMultiplier);
        }
    // If the user enters a state not listed above,
    // print "Error" instead
        else{
            $("#salesTaxOutput").text("Error");
        }


}

function recommendFood(event) {
    event.preventDefault();

    // Get the cat's age from the text box with
    // ID of "catAge"
        let catAge = $("#catAge").val();

    // Cats under 2 get "kitten chow", between 2 and 10
    // get "adult chow", and over 10 get "senior chow"
        let foodRecommendation = "";
        if (catAge < 0) {
            foodRecommendation = "error"
        }
        else if(catAge < 2){
            foodRecommendation = "kitten chow";
        }
        else if (catAge > 10){
            foodRecommendation = "senior chow";
        }
        else {
            foodRecommendation = "adult chow";
        }

    // Print the food recommendation to the <p> with
    // ID of "catAgeOutput"
        $("#catAgeOutput").text(foodRecommendation);

}

function drawCard(event) {
    event.preventDefault();

    // Generate a random card face value (1 - 13)
    let faceValue = Math.floor(Math.random() * 13) + 1;

    // Generate a random suit (1 - 4)
    let suit = Math.floor(Math.random() * 4) + 1;

    // Declare a variable to hold the description
    // of the card, for example "King of Spades"
    // or "2 of Hearts"
    let description;

    // For face values 2 - 10, you can just print the number.
    // Face value 1 is "Ace", 11 is "Jack", 12 is "Queen",
    // and 13 is "King"
        if(faceValue >= 2 && faceValue <=10){
            description += `${faceValue} of `;
        }
        else if (faceValue = 1){
            description += "Ace of ";
        }
        else if (faceValue = 11){
            description += "Jack of ";
        }
        else if (faceValue = 12){
            description += "Queen of ";
        }
        else if (faceValue = 13){
            description += "King of ";
        }
        else{
            description = "Error";
        }
    // For the suits, 1 is "Clubs", 2 is "Spades",
    // 3 is "Hearts", 4 is "Diamonds"
        switch (suit){
            case "1":
                description +="Clubs";
                break;

            case "2":
                description +="Spades";
                break;

            case "3":
                description +="Hearts";
                break;

            case "4":
                description +="Diamonds";
                break;
        }

    // Print the card's description to the <p> with
    // ID of "drawCardOutput"

    $("#drawCardOutput").text(description);
}
