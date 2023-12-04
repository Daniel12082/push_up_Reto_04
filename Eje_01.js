// CONFECH, in its effort to streamline the vote counting process, has entrusted you with the development of a university voting registration program. First, the program must prompt the user to enter the number of universities participating in the process. Then, for each university, the user must enter the university name and the votes of its students, which can be: accept (A), reject (R), null (N), or blank (B). The end of the voting is indicated by entering an X, after which the program should display the total votes for the university, in the format shown in the example. Finally, the program should display the voting result, indicating the number of universities that accept, reject, and have a tie between these two options.
function Voting() {
    var n1 = parseInt(prompt("Enter the number of universities participating in the process"));
    console.log(`Number of universities: ${n1}`);
    var universityA = 0;
    var universityR = 0;
    var tie = 0;
    for (var i = 0; i < n1; i++) {
        var votes = 0;
        var votesA = 0;
        var votesR = 0;
        var accept = 0;
        var reject = 0;
        var nullVotes = 0;
        var blankVotes = 0;
        var tie = 0;
        let uni = prompt("Enter the name of the university");
        console.log(`University: ${uni}`);
        while (votes != "X") {
            let vote = prompt("Enter the votes of the students, which can be: accept (A), reject (R), null (N), or blank (B). Enter X to end the voting");
            if (vote === "A") {
                accept++;
                votesA++;
            } else if (vote === "R") {
                reject++;
                votesR++;
            } else if (vote === "N") {
                nullVotes++;
            } else if (vote === "B") {
                blankVotes++;
            }
            console.log(`Vote: ${vote}`);
        }
        if (votesA > votesR) {
            universityA++;
        } else if (votesR > votesA) {
            universityR++;
        } else if (accept === reject) {
            tie++;
        }
    }
    console.log(`Universities that accept: ${universityA}`);
    console.log(`Universities that reject: ${universityR}`);
    console.log(`Universities with a tie: ${tie}`);
}
Voting();
