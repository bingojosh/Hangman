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

// console.log(wordList);

$(document).ready(function(){
    var arr, underline;
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
        underline = [];
        arr = wordSelect();
        console.log(arr[0].length);
        for(var i=0; i<arr[0].length; i++){
            underline.push("_ ");
            console.log(i);
        };
        $("#underline").text(underline.join(" "));
        $("#clue").text("Clue: " + arr[1]);
    }

    $(".key").onclick = function(){
        
    }
    $("#start").click(function(){
        $(this).hide();
        start();
    })
});