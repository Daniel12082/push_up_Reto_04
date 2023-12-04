<div align="center" id="top"> 
</div>

<h1 align="center">Reto_03</h1>

## :dart: About ##

<p align="center">CONFECH, in its effort to streamline the vote counting process, has entrusted you with the development of a university voting registration program. First, the program must prompt the user to enter the number of universities participating in the process. Then, for each university, the user must enter the university name and the votes of its students, which can be: accept (A), reject (R), null (N), or blank (B). The end of the voting is indicated by entering an X, after which the program should display the total votes for the university, in the format shown in the example. Finally, the program should display the voting result, indicating the number of universities that accept, reject, and have a tie between these two options.</p>

## :rocket: Technologies ##

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)

## :white_check_mark: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone https://github.com/daniel12082/push_up_Reto_04

# Access
$ cd push_up_Reto_04

#Open Terminal

# Run the project
$ run code start

function friendlyNumbers(n1,n2){
    function sumDivisors(num){
        let sum = 0;
        for ( let i=0; i < num; i++){
            if (num % i == 0){
                sum += i
            }
        }
        return sum
    }
    const sum1 = sumDivisors(n1)
    const sum2 = sumDivisors(n2)
    if (sum1 == n2 && sum2 == n1){
        console.log(`The numbers ${n1} and ${n2} are friendly numbers`)
    }
    else{
        console.log(`The numbers ${n1} and ${n2} are not friendly numbers`)
    }
}
const result = friendlyNumbers(1000,1500)
```

## :open_book: Explain ##

-----------------------------------------------------------------------
| Nr.  | Step                                                         |
| ---- | ------------------------------------------------------------ |
| 1    | The Voting function is declared. It starts by asking for the number of universities participating in the process. This number is stored in the variable n1.|
| 2    | The function initializes several variables to keep track of the voting results: universityA for universities that accept, universityR for universities that reject, and tie for universities where the votes are equal. |
| 3    | A for loop is started to iterate over each university. For each university, several variables are initialized to keep track of the votes: votesA for accept votes, votesR for reject votes, nullVotes for null votes, and blankVotes for blank votes. |
| 4    | The name of the university is asked and stored in the uni variable.|
| 5    | A while loop is started to collect the votes. The loop continues until "X" is entered. For each vote, the corresponding counter is incremented. |
| 6    | After all votes are collected, the function checks which type of vote has the majority. If accept votes are more, universityA is incremented. If reject votes are more, universityR is incremented. If the number of accept and reject votes are equal, tie is incremented. |
| 7    | The for loop continues with the next university until all universities have been processed.|
| 8    | Finally, the function prints out the results: the number of universities that accept, reject, and where the votes are tied. |

## :memo: License ##

Made with :heart: by <a href="https://github.com/{daniel12082}" target="_blank">{daniel12082}</a>