function reverseString() {
    let userWord = document.getElementById("tacoCat").value;
    userWord = userWord.replace(/\W/g, "").toLowerCase();
    let outputWord = "";
    //alert(userWord);

    //Flips the userWord to reversed
    for (let i = userWord.length - 1; i >= 0; i--) {
        outputWord = outputWord + userWord[i];
    }

    let output = document.getElementById("tacoOutput");

    if (userWord == outputWord) {
        output.innerText = "This is a palindrome!";
    } else {
        output.innerText = "This is NOT a palindrome.";
    }
    //Before Loop - reverseWord = "" []
    //Loop 1 - i = 4; userWord[4] = k reverseWord [] + k = [k]
    //Loop 2 - i = 3; userWord[4] = n reverseWord [k] + n = [k, n]
    //Loop 3 - i = 2; userWord[4] = a
    //Loop 4 - i = 1; userWord[4] = r
    //Loop 5 - i = 4; userWord[4] = F

}