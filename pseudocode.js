/* 
starting screen with menu elements revealed, character and path elements hidden

menu 
    if click new game, take to character choice
    hide menu elements, reveal character elements 

character choices
    if click prepper take to prepper scenarios 
    if click normie take to normie scenarios 
    hide character elements, reveal path elements

scenarios 
    if click left path {
        if click acceptable left path move to next scenario
        else if click unacceptable left path show death
    }

    if click right path {
        if click acceptable right path move to next scenario
        else if click unacceptable right path show death
    } 

    use inner.html(?) to push new scenarios to the path elements

win 
    if they reach the end of the path show Level 1 Complete message
    show move to next level button 
*/ 