1. What problem does the context API help solve?
Allows us to provide data(state) across our app with the need to 'prop-drill'

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
store- is the single source of truth as it is immutable state, maning we cant accidently change it causeing bugs across the app
reducers- a pure function that takes in two arguments, the current state from the Redux store, and the action object
actions-information that contain an action type and associated data, always needs a type, often gets a payload as well

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
component state is for things like forms, where the info you want to use is located only in that component, application state is for global state and is best for state we want to work with in many components

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
it allows us to make async actions in redux, which is a syncronus system, middleware intercepts the normal Redux flow, and can make a call before actions make it to the reducer

1. What is your favorite state management system you've learned and this sprint? Please explain why!
Context as it's pretty simple and easy to grasp, also easy to move the provider if you decide to use the state outside of current context tree
