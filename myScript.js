// rock paper scissors game
// 1. get computer to choose a random choice of the 3, rock, paper or scissors and store it into a varible called comChoice
    // determine how to get a random selection of given inputs, in this case, rock paper or scissors. 
    // 1a. make a list/array of our 3 choices, then use random number to generate between 0 to 2, and then use the random number to assign it to the list element
    // 1b. need to figure out how to make a RNG of 0 to 2. math.random() gives a random decimeal between 0 and 1.
// 2. do not reveal comChoice until we have made our own selection
// 3. create a function to input our choice, and store it into a variable myChoice
    // 3a. make sure our input is not case sensitive, we can address this by toLowercase() all our inputs so it matches those in our fixed choices
// 4. once myChoice is not empty, reveal comChoice
// 5. evaluate the results, if it is a draw, repeat steps 1 to 4
// 6. if not a draw, reveal winner and loser
    // 6a. how to determine the winner? 

// 1a.
const choices = ["rock", "paper", "scissors"];

// 1b. 
//ceil min roundns up the min number to the nearest integer
//floor max rounds down the max numbe rto the nearest integer
// (max - min + 1) is the range, the +1 is to make the range inclusive of max
// math.random() * (max - min + 1) is to create a random number within the range (eg 50 to 70 has a range of 20, but now our random number is between 0 and 20, not 50 and 70, hence we do the next step)
// we add min to make sure that this random number falls within the range defined by min and max (ie to make it 50 and 70)
// floor rounds down the value to the nearest integer. we have to use floor instead of round or ceiling so that our result doesnt go above our max value. 
    // imagine our 50 to 70. our range to be inclusive will be 70-50+1 = 21. with random, it could be a case where it is 0.99*21 = 20.79, which once added to min of 50, gives you 70.79. hence our floor works to keep it within min-max) 
    // now imagine without the +1, the max possible will be 0.99 * 20 + 50 = 69.8 which does not include 70
    // we cannot omit the +1 in range and use ceil in the return as this will always round up, which means, it can possible omit our min value. eg 50.01 becomes 51
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// 1
let comChoice = 'iniVal';

function getComputerChoice() {
    let randomInteger = getRandomIntInclusive(0, 2);
    comChoice = choices[randomInteger];
    return comChoice;
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    //console.log(playerSelection);
    console.log('The Computer chose ' + computerSelection);

        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            return 'Please choose a selection from the following: rock, paper or scissors.'
        }
        else if (playerSelection == computerSelection) { 
            return `You both chose ${playerSelection}, it's a draw! Try again!`
        }
        else if (playerSelection == 'rock') {
            if (computerSelection == 'paper') {
                return 'You Lose! Paper beats Rock'
            }
            else {
                return 'You Win! Rock beats Scissors'
            }
        }
        else if (playerSelection == 'paper') {
            if (computerSelection == 'scissors') {
                return 'You Lose! Scissors beats Paper'
            }
            else {
                return 'You Win! Paper beats Rock'
            }
        }
        else {                      //player selection here would have to be scissors alr
            if (computerSelection == 'rock') {
                return 'You Lose! Rock beats Scissors'
            }
            else {
                return 'You Win! Scissors beats Paper'
            }
        }
}

//let playerSelection = 'Paper';
//console.log('Your selection is ' + playerSelection);
//console.log(playRound(playerSelection));
//console.log('break')


// making this without loops first as we have not learnt loops in JS???
// run game the number of times that is inputted
// after each round, determine outcome and update score, if draw, no score is updated. increase round counter by 1
// after all rounds, determine winner by seeing who has the higher score
function game(numberOfRounds) {
    // this just plays the numner of rounds, draws are allowed. it is not a "best of" match
    let myScore = 0;
    let aiScore = 0;
    let currentRound = 1;

    while (currentRound <= numberOfRounds) {
        let playerSelection = prompt("Please input one selection from the following: Rock, Paper or scissors");
        //playerSelection = playerSelection.toLowerCase();
        console.log('');
        console.log('Round ' + currentRound);
        console.log(playerSelection)
        let result = playRound2(playerSelection);
        console.log('The result is ' + '\" ' + result + '\"');

        if (result == `You both chose ${playerSelection}, it's a draw! Try again!`) {
            console.log(`You both chose ${playerSelection}, it's a draw! Try again!`);
            console.log('');
            currentRound++;
        
        }
        else if (result == 'You Lose! Paper beats Rock' || result == 'You Lose! Scissors beats Paper' || result == 'You Lose! Rock beats Scissors') {
            aiScore += 1;
            console.log('Computer wins this round');
            console.log('');
            currentRound++;
        }
        else if (result == 'You Win! Rock beats Scissors' || result == 'You Win! Paper beats Rock' || result == 'You Win! Scissors beats Paper') {
            myScore += 1;   
            console.log('You win this round');
            console.log('');
            currentRound++;
        }
        else if (playerSelection == null) {
            break;
        }
        else {
            //console.log('Please choose a selection from the following: rock, paper or scissors.');
            currentRound = currentRound;
        }
    }
    console.log('');
    console.log('My score is ' + myScore);
    console.log('The computer\'s score is ' + aiScore);

    if (myScore == aiScore) {
        return 'It is a draw'
    } else if (myScore < aiScore) {
        return 'The Computer wins'
    } else {
        return 'You win!'
    }
}

// this fuction of playRound just has extra condition to not fail when a null is outputed when user cancels the prompt box
function playRound2(playerSelection) {
    if (playerSelection !== null) {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = getComputerChoice();
    } else {
        playerSelection = 'null'
    }
    //console.log(playerSelection);
    console.log('The Computer chose ' + computerSelection);

        if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
            return 'Please choose a selection from the following: rock, paper or scissors.'
        }
        else if (playerSelection == computerSelection) { 
            return `You both chose ${playerSelection}, it's a draw! Try again!`
        }
        else if (playerSelection == 'rock') {
            if (computerSelection == 'paper') {
                return 'You Lose! Paper beats Rock'
            }
            else {
                return 'You Win! Rock beats Scissors'
            }
        }
        else if (playerSelection == 'paper') {
            if (computerSelection == 'scissors') {
                return 'You Lose! Scissors beats Paper'
            }
            else {
                return 'You Win! Paper beats Rock'
            }
        }
        else if (playerSelection == 'scissors') {                      //player selection here would have to be scissors alr
            if (computerSelection == 'rock') {
                return 'You Lose! Rock beats Scissors'
            }
            else {
                return 'You Win! Scissors beats Paper'
            }
        }
}
