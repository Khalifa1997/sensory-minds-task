# Sensory Minds task

## Link to the repo could be found [here](https://sparkly-pixie-c5720f.netlify.app/)


## Used Packages
`React-confetti` for the confetti effect if game was won

`framer-motion` was used to animate a button.. more on this in the expected improvements part

`Redux` or any other global state management library was not needed due to the small size of this application

## Future Improvements

* `framer-motion` is a very fun library to use, however it does take time and alot of testing for things to work as you want them too, I wanted to have a modal element that would appear in case of winning but time had ran out.. you can see parts of it being implemented in the **Modal.js** and **Backdrop.js** file

* Furthermore, I wanted to improve the performance of the for-loops I tried my best using `useMemo` and `useEffect` Hooks, however the for loops themselves could be implemented in a far better way in my opinion.

* `KeyFrames` work good for basic CSS animation, but it could be vastly improved with `frame-motion` in the future

* A small edit would be showing *You won one Bingo* instead of *You won one Bingo**s***

* Using a random array each time, so that if multiple users are playing then you get a different board everytime... this function could be used for it *my eyes totally skipped this part on the task..*

```
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
```


## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
