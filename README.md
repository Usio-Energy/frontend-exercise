## What's this
This is a technical test that makes (a very ugly and basic) todo app in React. I've used native React state instead of Redux because it would be an overkill. For larger applications I tend to follow the ducks/re-ducks pattern, but this is such a small app that this folder structure is sufficient.

## How to run
Open your command line and follow these steps:
- `git clone git@github.com:muhanad40/frontend-exercise.git`
- `cd frontend-exercise`
- `yarn`
- `yarn start`
- Point your browser to http://localhost:8080/

## Tests
- `yarn test`

## Things I did not do:
- Implement the task re-ordering. Was going to use https://github.com/clauderic/react-sortable-hoc, but didn't want to spend more time on this
- Add styles to make it look better. I didn't get time to design something in Sketch, but I suggest you look at this responsive app which I quickly designed previously: https://dummy-url-shortener.herokuapp.com/

## Improvements:
- Use a `setup` method in all the tests that renders a new instance for each test case so I don't get any unexpected changes/errors from previous tests
- Add `propTypes` to all components
- Add `eslint` to keep a consistent styleguide throughout
