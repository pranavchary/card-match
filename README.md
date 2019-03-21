# Card Match
#### Developer: Pranav Chary
#### Last Updated: March 21, 2019

## Overview
> This application is designed to mimic a memory building game which is popular all over the world. Users can select one of the four card suits (spades, clubs, hearts, or diamonds) to play with.
> The goal is to flip different cards continuously until two matching cards are found. When a new match is discovered, the user is given a number of points based on how quickly they were able to find the match.

## Technology

 - HTML5
 - CSS3
 - JavaScript (React)

## Features
> When the application initially loads, users are given the option to choose one of the card suits to play the game with, or to play with all 4 suits.
> After a selection has been made, the cards are rendered according to the selection. At the top, there are two buttons and a label to keep track of the user's score.
> One button allows the user to reset the current game and shuffle the placement of the cards (labeled **Reset**). The other allows the user to return to the deck selection screen (labeled **New Deck**)
> When a user first clicks on a card to flip it, the timer begins. From that point forward, the quicker they are able to find a pair of matching cards, the more points they receive for that match. Once a match has been made, those cards change in opacity to indicate that they have already been matched. The timer also resets for the next match at this time.
> When a user has found all the matching pairs in their selected deck, the game is over. The user can choose to play again with the same deck, or select a new deck.

## Future Plans
Some plans for improvement to the application in the future include:

 - Allowing users to play with 2 or 3 suits as well
 - Create a Node.js backend that can store the scores of players, as well as show the highest scores for each suit
 - Integrate the Card Match game into a suite of fun games appropriate for all ages

## References
> A few ideas for improving my initial design were found in [this video](https://youtu.be/MLNLT_-mBA0) from *React University*'s YouTube channel.
