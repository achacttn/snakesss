Snake in react!

[Demo link](https://achacttn.github.io/snakesss)

Changes:
- snake body length grow
    = look at food funciton first maybe
    = storing body state
- pause function
    = clearinterval of the tick
    = css to darken screen
    = pause binary in parent state component
- direction change
    = should be fine at length 1
    = restriction only when length > 1
    = that is, snake cant turn into its own body and die
- death function
    = collision with snakebody
    = use tick to check what to enter in state object