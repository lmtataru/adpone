// Escribe una función que dado un input "aaaabbbbbcca" devuelva un output:
// [["a", 4], ["b", 5], ["c", 2], ["a", 1]]

function countWords() {
    var word = "aaaabbbbbcca";
    var result = [];
    var counter = 1;
    for (var i = 0; i <= word.length; i++) {
        if (word[i] !== word[i + 1]) {
            result.push([word[i], counter]);
            counter = 1;
        } else {
            counter++;
        }
    }
    console.log(result);
}
countWords()
