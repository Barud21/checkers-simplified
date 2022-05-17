# Warcaby

## Zadanie

Stwórz planszę 10x10 dla gry warcaby oraz umieść na niej jednego
pionka. Pionek (kółko) powinien móc poruszać się za pomocą strzałek na klawiaturze. Dane gry powinny być przechowywane w kontekście reactowym.
Do wykonania zadania proszę użyć reactjs. Gra nie musi być responsywna oraz nie są wymagane jakiekolwiek grafiki.

## Opis działania aplikacji

Naciśnięcie którejkolwiek strzałki spowoduje pokazanie opcji ruchu w tym kierunku, następne naciśnięcie strzałki wybiera konkretną pozycję, np. naciśnięcie strzałki w górę pokaże opcje ruchu do góra-lewo i góra-prawo, naciśnięcie strzałki w lewo lub w prawo spowoduje wybranie odpowiedniej opcji.
Jeśli użytkownik naciśnie 2 razy pod rząd tę samą strzałkę spowoduje to pokazanie oraz a następnie ukrycie opcji ruchu. Taki sam efekt będzie miało naciśnięcie strzałki a po niej wciśnięcie strzałki w przeciwnym kierunku bądź klawisza Escape.

## Testy integracyjne

Napisano testy integracyjne sprawdzające poprawność działania aplikacji przy wciskaniu kombinacji klawiszy, przycisku Reset, itp.

## Hostowanie

Aplikację zahostowano na platformie heroku (https://checkers-simplified.herokuapp.com).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches cypress tests.

### `npm test:watch`

Launches cypress test interface with watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
