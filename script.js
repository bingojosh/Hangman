var wordList = [
    ['pencil', 'writing'],
    ['crayon', 'writing'],
    ['pen', 'writing'],
    ['paper', 'base'],
    ['grid paper', 'base'],
    ['glossy', 'base'],
    ['stickman', 'subject'],
    ['model', 'subject'],
    ['diagram', 'subject'],
];

console.log(wordList);

$(document).ready(function(){

    $("#q").click(function(){
        $("#hangman").attr("src", "assets/Hangman-1.png");
    });

    function random(){
        return Math.floor((Math.random() * 9))    
    }

    function wordSelect(){
        return wordList[random()];
    }

    function start(){
        $("#underline").text("_ ");
        var arr = wordSelect();
        for(var i=0; i<arr[0].length, i++;){
            $("#underline").append("<p>_ </p>");
        }
        $("#clue").text("Clue: " + arr[1]);
    }

    $("#start").click(function(){
        $(this).hide();
        start();
    })
});