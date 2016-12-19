Initially I am using a sprite sheet from https://www.spriters-resource.com/ as a base to play with. Conrad, the main character from flashback by Delphine software, has a Prince of Persia like set of movements in his platform environment.

He can walk, run, jump, crouch, roll, climb, hang, shoot and throw, as well as related actions like fall, get shot, die etc.

All animations should run to the end of their loop before the next queued animation is played, so that for example, the queue may consist of START_RUN, RUN, RUN, STOP_RUN_TURN_RUN, RUN, STOP_REBALANCE, STAND_TO_CROUCH, ROLL_TO_CROUCH, CROUCH_GET_GUN_OUT.

These constants represent an array index that points to an array which specifies the length of the particular animation. The Conrad spritesheet is a series of 32px w x 48px h tiles, or 2x3 16x16 blocks. It has 14 colours plus transparent so there is possibly an alternative representation that could be used to manipulate pixels directly, but that sort of early optimization is not really priority, more a matter of interest.


This is just a fun project, to learn about how to build and structure a game in React/Redux.. and any other technology. The flashback part is will be pixel based as the original game. Probably have to include a number of game engine related solutions. Things like how to deal with components which are basically canvas drawn elements with a global canvas.

Basic TODOs
- basic game states (start, playloop, end etc.)
- refactor SpriteCanvas to be the generic container
- system for animatable and static component entities
- sprite mirroring for ltr/rtl
- animation layers to deal with draw order
- state machine to drive animations
- create a walkable, climbable, jumpable level (no artwork)
- collision detection
- handle basic keyboard inputs (refactor as component)
- map inputs to motion on the screen
- sync player motion with animation
- projectiles
- tracking of 'health' (get shot? twice? fall?)
- tracking of game flags
- save state to localStorage?

Semi-ambitious TODOs
- relative coordinates between nested components
- scriptable NPCs
- basic AI
- functional levels with actual goals
- wrap game in electron for desktop

Crazy-ambitious TODOs
- recreate components with react native (possible with canvas?)
- normal mapped spritesheet, dynamic lighting
- strong AI ;)
