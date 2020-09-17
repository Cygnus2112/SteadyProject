# Steady Project

I spent way too much time digging around the Redux Sagas docs to determine how to prepare items in the Barista Queue sequentially (typically I've just handled API calls in parallel with `takeEvery` and used a front-end solution like disabling the button to avoid overloading the server) when I should have just employed the `useEffect` workaround at the start and tried for the Redux Saga optimization only if there was time remaining.

It definitely works with the `useEffect` solution, but since I ran out of time, styling is minimal and things like naming conventions are inconsistent. I did some cleanup, added this ReadMe, and made some (very) minor styling fixes after the time limit elapsed.

UPDATE: I wanted to understand how to create a solution using Sagas, and it's suprisingly straightforward! That solution is on the `saga-solution` branch, if you are interested. Unlike the previous version, which started the timer only when the `Barista` and `Counter` components are mounted, this one started the timer immediate when the drinks are ordered and made, respectively.
