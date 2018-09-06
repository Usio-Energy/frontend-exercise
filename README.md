# Todo app

## About me
Russ Hall  
russ@2tap.com  
07708 804580  

## Libraries used

* Create React App (all defaults)
* React Sortable (HOC)
* Enzyme (DOM utility methods for testing)

## Commands
Clone repo and run `npm install`

### Running
`npm start`

### Test
`npm test`

## Improvements

I used Create React App boilerplate for a quick start. These are fine defaults for a small project but wouldn't nessarily be what I'd use on something larger.

### Styling
I prioritised testing and React implementation over styling etc. I'm not necessarily a fan of the default CRA CSS setup (at least not without extending it with SASS or similar) but it's fine for this quick demo. Depending on the project I might use styled-jsx for component-based namespaced styling etc.

### Testing
I implemented a basic set of unit tests but these could be made more robust and/or extensive.

### React achitecture
This is a tiny app so using any kind of Flux-esque architecture seemed overkill. However, in a larger application it wouldn't be much fun passing through the props down to child components that needed the data so I'd use something like Redux or the React Context API depending on the situation and requirements.

### Compatibility
I've made no effort on browser testing here. CRA has a sensible set of defaults but I suspect I'd need some polyfills for IE < Edge. This would be evaulated based on the project needs.

