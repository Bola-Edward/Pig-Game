# Pig Game

Pig Game is a two-player browser game where players race to reach 100 points. Players must balance the reward of adding more dice rolls to their current score against the risk of rolling a 1 and losing that round's progress.

## Gameplay Rules

1. Players take turns rolling a six-sided die.
2. A roll from 2 to 6 adds the dice value to the active player's current score.
3. Rolling a 1 resets the active player's current score and passes the turn to the other player.
4. Holding adds the current score to the player's total score and passes the turn.
5. The first player to reach a total score of 100 wins.
6. Select **New game** to reset all scores and begin again.

## Key Features

- Active player highlighting
- Current and total score tracking
- Random dice rolls with images for values 1 through 6
- Automatic player switching
- Winner state with a highlighted winner panel
- Dice visibility toggling
- Complete game reset through the New game button

## DOM State Handling

The JavaScript maintains the total scores, current score, active player, and playing state. It updates the score elements on roll and hold actions, toggles the `player--active` class for turn indicators, adds `player--winner` to the winning player, toggles the `hidden` class for the dice, and restores the initial state with `resetGame()`.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- Prettier

## Project Structure

```text
index.html
style.css
script.js
.prettierrc
dice-1.png
dice-2.png
dice-3.png
dice-4.png
dice-5.png
dice-6.png
pig-game-flowchart.png
```

## Run Locally

Open `index.html` directly in a browser, or run the project through the **Live Server** extension in Visual Studio Code.
