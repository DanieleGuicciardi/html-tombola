# Tombola App

## What is Tombola?

Tombola is a traditional Italian game, similar to bingo. In this game, players use a card with numbered cells, and a caller draws random numbers from a set. Players mark the numbers on their cards as they are called, aiming to complete a specific pattern (such as a full row or all numbers on the card). The first player to complete the pattern shouts "Tombola!" and wins the game.

## Features and Implementation

### 1. Game Table
When the page loads, a table is displayed. This table shows the numbers that have been called during the game. It helps players track the numbers that have already been drawn.

### 2. Random Number Generator Button
Below the table, there is a button that generates random numbers. When clicked, the app randomly selects a number from the set of possible Tombola numbers (typically 1 to 90) and displays it in the table. The generated number is also marked on the player's card.

### 3. Marking the Number on the Card
Once a number is generated, it is highlighted or marked both on the game table and on the player's own card, helping them keep track of their progress.

### 4. Generate Tombola Card Button
There is another button that generates a new Tombola card with 34 random numbers. This card is designed with a typical Tombola layout, and each time it is generated, it will show a unique combination of numbers from the full set (1-90). The numbers are randomly placed in a grid to create the player's unique card.

## How It Works

- **HTML**: Provides the structure for the game, including the table and buttons.
- **CSS**: Used to style the page and ensure that elements like the numbers, buttons, and card layout are visually appealing and functional.
- **JavaScript**: Powers the logic behind the game. It handles:
  - Random number generation.
  - Marking numbers on the table and the player's card.
  - Generating the Tombola card with 34 random numbers.

## How to Play

1. Open the Tombola app.
2. A table will appear showing the numbers that have been called.
3. Click on the "Generate Number" button to randomly pick a number.
4. As each number is drawn, it will be marked on both the table and your Tombola card.
5. To generate a new Tombola card, click the "Generate Card" button. This will create a new card with 34 randomly chosen numbers.
6. Keep playing until you complete a row or all numbers on your card!

Enjoy the game and good luck with your Tombola!

