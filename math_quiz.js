player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ": ";
document.getElementById("player2_name").innerHTML = player2_name + ": ";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn= " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn= " + player2_name;

function send() {
    n1 = document.getElementById("n1").value;
    n2 = document.getElementById("n2").value;

    actual_answer = parseInt(n1) * parseInt(n2);

    question_word = "<h4 id='word_display'>Q." + n1 + "X" + n2 + "</h4>";
    input_box = "<br>Answer:<input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}

question_turn = "player_1";
answer_turn = "player_2";

function check() {
    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        correct_answer = document.getElementById("blank").innerHTML = "That is the correct Answer!!";
        document.getElementById("blank").style.display = "inline-block";
        document.getElementById("blank").style.color = "green";
        if (answer_turn == "player_1") {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    else {
        wrong_answer = document.getElementById("blank").innerHTML = "That is not the correct Answer!!";
        document.getElementById("blank").style.display = "inline-block";
        document.getElementById("blank").style.color = "red";
        if (answer_turn == "player_1") {
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
        else {
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
    }
    if (question_turn == "player_1") {
        question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player2_name;
    }
    else {
        question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question Turn: " + player1_name;
    }
    if (answer_turn == "player_1") {
        answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player2_name;
    }
    else {
        answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer Turn: " + player1_name;
    }
}