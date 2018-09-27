# FACEBOARD

## Let's connect

![](https://media.giphy.com/media/3ofT5J5ESXh8NTDcpG/giphy.gif)

We wanted to make a game with React...

... that also called an API via GraphQL
... that we could also deploy on Netlify
... that we could bundle with Parcel (*New & Shiny:tm:*)
... that used loads of awesome modular components
... that had integration tests with Jest

Like with everything in our lives, we looked back to our childhoods for simple games we could create in two days - and then remembered [those little slidey puzzle things that jumbled up a picture.](https://en.wikipedia.org/wiki/15_puzzle)

## Some of our favourite bits

:tada: React
:heart_eyes_cat: GraphQL fetch request 
:8ball: The shuffle algorithm (Fisher Yates) is really cool and straightforward 
:art: Using clip paths to create each square of the slider (perhaps not the most performant solution, but we figure at least the image gets cached)
:necktie: Our valid moves mapping table is a really neat and tidy solution that makes sure players can't make an invalid move - we actually spent a while trying to create an algorithm that would handle this, but then realised this is actually a way easier to read solution that is no less performant. 

## Day 1

* We whiteboarded a lot of our game logic for a solid chunk of the afternoon (the whiteboard was the third member of the team)
* Quiet team reading of React's [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html) article, which really helped us & also meant we had the Lighthouse Family [on loop for two days](https://youtu.be/qPZ6CXuiHdQ) (also, you're welcome).
* Coding! We set a lofty goal of having some playable game logic by the end of day 1, but we managed to reach it. Which was great.

Here's how our whiteboards looked at the end of day 1:

![our day 1 progress](https://i.imgur.com/fneNRaL.jpg =250x)![more day 1 progress](https://i.imgur.com/oc0x8Sm.jpg =250x)

## Day 2

![](https://media.giphy.com/media/SYAVOTBeux3JS/giphy.gif)

* We both went to LNUG on Wednesday night where we were :sparkles: dazzled :sparkles: by two awesome talks on GraphQL. We felt that our project was in a good spot so we... decided.... *to implement a GraphQL query on Thursday morning*.
* We learnt just how badly Node doesn't natively support either ES Modules or the Fetch, which made debugging something with Jest quite tricky. But we persevered!
* Our Netlify deploy was relatively straightforward (this.props to the Netlify team) **BUT** trying to hide an API key sort of was hard work. Looks like we'll still need a server for the time being...

## What would we like to do next?

* Storing the current player data locally so they can go away and come back to finish off their scramble.
* Replay each move at high speed for the player when they manage to complete the game - we've kept a full list of all moves in our logic for a reason :sunglasses: 


## Go forth and play

[faceboard](https://goofy-boyd-5ce2c8.netlify.com/)
