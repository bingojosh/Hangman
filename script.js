var wordList = [
    ['pencil', 'writing'],
    ['crayon', 'writing'],
    ['pen', 'writing'],
    ['paper', 'base'],
    ['gridpaper', 'base'],
    ['glossy', 'base'],
    ['stickman', 'subject'],
    ['model', 'subject'],
    ['diagram', 'subject'],
];

var imageList = [
    {image: './assets/Hangman-0.png'},
    {image: './assets/Hangman-1.png'},
    {image: './assets/Hangman-2.png'},
    {image: './assets/Hangman-3.png'},
    {image: './assets/Hangman-4.png'},
    {image: './assets/Hangman-5.png'},
]

$(document).ready(function(){

    var arr, underline, guesses;
    var sound = document.createElement("audio");
    // sound = {
    //     src: "./assets/scribble.wav",
    //     volume: 0.1,
    //     autoPlay: false,
    //     preLoad: true,
    //     controls: true
    // }
    sound.setAttribute("src", "./assets/scribble.wav");
    sound.setAttribute("src", "./assets/scribble.wav");
    sound.setAttribute("src", "./assets/scribble.wav");
    sound.setAttribute("src", "./assets/scribble.wav");

    function random(){
        return Math.floor((Math.random() * 9))    
    }

    function wordSelect(){
        return wordList[random()];
    }

    function start(){
        underline = [];
        arr = wordSelect();
        guesses = 5;
        for(var i=0; i<arr[0].length; i++){
            underline.push("_ ");
        }
        $("#underline").text(underline.join(" "));
        $("#clue").text("Clue: " + arr[1]);
        $("#guesses").text(guesses);
        $("#hangman").attr("src", imageList[0].image)
        enableButtons();
    }

    function enableButtons() {
        $(".btn").attr("disabled", false);
    }

    function checker(guess) {
        var check = arr[0].indexOf(guess);
        if(check === -1){
            guesses--;
            $("#hangman").attr("src", imageList[5-guesses].image);
            sound.play();
        } 
        else{
            for(var i=check;i<arr[0].length;i++){
                if(arr[0][i] === guess){
                    underline[i] = guess;
                    $("#underline").text(underline.join(" "));
                }
            }
        }
        $("#guesses").text(guesses);
        if(guesses === 0){
           $("#underline").text("");
           $("#clue").text("");
           $("#start").show();
           $("#start").text("Retry"); 
        }
        win();
    };

    function win(){
        if(underline.indexOf("_ ") === -1){
            $(".btn-secondary").attr("disabled", true);
            $("#start").show();
            $("#start").text("Play Again");
        }
    }

    $(".key").on("click", function(){
        var guess = $(this).text().toLowerCase();
        this.disabled = true;
        checker(guess);
    }); 

    $(document).keyup(function(e){
        console.log($("#" + e.key).prop("disabled"));
        if($("#" + e.key).prop("disabled") === false){
            $("#" + e.key).click();
        }
    });

    $("#start").click(function(){
        $(this).hide();
        start();
    });
});