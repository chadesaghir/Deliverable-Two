function myMealFunction() {
    var timeOfday = ""

    timeOfday = prompt("What time of day is it morning, noon, or evening");

    if (timeOfday === "morning") {
        document.write("Since it is " + timeOfday + ", " + "you should be eating breakfast. We suggest eggs and toast.");
    } else if (timeOfday === "noon") {
        document.write("Since it is " + timeOfday + ", " + "you should be eating lunch. We suggest a salad.");
    } else {
        document.write("Since it is " + timeOfday + ", " + "you should be eating dinner. We suggest chicken and rice");
    }

	console.log(timeOfday)
	
}


