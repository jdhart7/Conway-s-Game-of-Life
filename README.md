# Conway's Game of Life

Conway's Game of Life is a 0 player game conceptualized by mathematician John Horton Conway in 1970. Inspired by the mathematical questions behind John von Neumann's work on self-replicating systems (the idea of a machine building another machine), Conway began working on a variety of automation rules to simulate how such a system may look. The game's rules were first published in Scientific American in October 1970 and quickly gained popularity due to the interesting patterns the game can generate.

The game of life is undecidable, meaning that no algorithm currently exists that can predict whether a pattern remain alive or die, how long the pattern will survive, or whether a specific pattern will later appear in the system given the starting conditions.

The board consists of an infinite, two dimensional grid of cells. Each cell has two states: populated or unpopulated (or alive and dead). The player starts the game by inputting a starting condition (the seed). This can be done in this program by clicking squares, toggling them between dead or alive. Once the player has a starting condition they think may be interesting, then can click 'Start Life' to see how the pattern plays out and how long it will survive. The player can also pause the game with the 'Pause Life' button, then step forward with the 'Step Forward' button for a more fine-grained view of what's happening. If the board dies or the player wants to enter a new starting condition, they can press 'Reset Board' at any point.

The rules for Conway's Game of Life are as follows:
1. Any live cell with two or three neighbors survives (the cell has the means to reproduce to the next generation)
2. Any dead cell with three live neighbors becomes a live cell (the cells can reproduce and spread to this cell)
3. Any live cells with more than three live neighbors dies (the cell dies of overpopulation)
4. Any cell with less than two neighbors will die (the cell dies off due to underpopulation)

[Link to Dr. Conway explaining the origin and rules of the game](https://www.youtube.com/watch?v=R9Plq-D1gEk)

Dedicated to John Conway (1937-2020)
