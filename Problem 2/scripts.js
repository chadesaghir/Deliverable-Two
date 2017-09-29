function myWordGamFunction() {
    var startGame = "";
    var userWord = "";


    startGame = prompt("Do you want to play? - Yes or No").toUpperCase();

    if (startGame != "YES" && startGame != "NO") {
        alert("Invalid choice. Please say, Yes or No");
    }

    do {

        {
            userWord += ' ' + prompt("Enter a word");
        }

        {
            console.log(userWord);
        }

        startGame = prompt("Do you want to play again? - Yes or No").toUpperCase();

        if (startGame != "YES" && startGame != "NO") {
            alert("Invalid choice. Please say, Yes or No");
        }


    } while (startGame === "YES");

    document.write(userWord);
}
