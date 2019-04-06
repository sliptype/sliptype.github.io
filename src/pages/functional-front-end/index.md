---
title: Functional Front-End with Vue and Purescript
data: "2019-04-06"
---

Have you ever found yourself in a situation where you are hesitant to make a change because it is impossible to tell what will break?

I know I have. I have been burned by unnecessarily complex state, where an arbitrary number of things all depend on one another. It's one of the initial reasons I went down the rabbit hole of using functional programming to build modern web apps.

Rich Hickey (the creator of Clojure) gave [a really great talk][1] in which he points out that there are two types of complexity we deal with when building apps:
> _Inherent complexity_ exists in any domain. It is the complexity which is inherent to the business logic.

> _Incidental complexity_ is the complexity introduced by design decisions.

It is incidental complexity that we can avoid and should strive to minimize.

## Shared Mutability

In my experience, one of the primary contributors to incidental complexity is shared mutable state. To understand shared mutable state let's first define mutability:

> _Mutability_ is the idea that a value can be changed.

For example in javascript, if we have a variable containing a number we can assign a different number to it. This is mutability.

Now, if multiple places in the code reference that variable, they will all be using the new number. This is _shared mutability_ - multiple entities referencing a shared bit of state that can be changed.

When working in an environment with lots of shared mutability, the burden falls on the programmer to map the relationships between different entitites and processes. It is no longer explicit what depends on what, or which order things need to occur.

## Simplicity

How do we reduce complexity in our applications?

A good place to start is to separate your business logic from your view logic. In theory you should be able to take your business logic and layer any kind of UI on top of it.

The next step to reducing complexity is reducing the amount of shared mutability. There are popular tools in the javascript ecosystem that strive to do just this.

[Flux][2] is a convention for structuring state updates put forward by Facebook. It prescribes that the state of an application can only be updated in a single place. This makes it much easier to reason about a given state.

Flux is just a design pattern though, popular implementations of Flux include [Redux][3] and [Vuex][4]. Both of these tools simplify state logic by leverage functional programming ideas. They also prioritize the separation of business logic and view logic. However, they are mainly convention based because javascript as a language does not enfore their ideals.

If we could enforce the concepts be sc

To actually enforce he concepts behind Redux and Vuex at a language level, while using a 

TODO: transition

## Functional Programming
Functional programming, or FP for short, is a programming paradigm that takes a very different approach from Object Oriented programming.

Everything in OO is an object and mutability is widespread. Everything in FP is a Function and all values are immutable. FP actively avoids mutable state and therefore reduces incidental complexity. FP also prioritizes the use of pure functions:

> _Pure functions_ always return the same output for a given input and do not have any side effects.

This gives rise to the idea of _referential transparency_, which says a function call could theoretically be replaced with it's output and the program would not be affected in any way. Pure functions are highly testable because nothing outside of the function needs to be considered. The inputs must simply be matched with the expected outputs.

Most functional languages also have a strong static type system. Types are checked at compile time, and a whole class of run time bugs are eliminated.

If every function in a program were pure, there would be no way to tell that the program ever ran because there would be no side-effects. While FP prioritizes purity, it does allow for side effects. However, these side effects are controlled in that they are encoded directly into the type system. So when a function does affect something outside of itself, you can immediately tell by the function signature.

As a whole, these features lead to programs that are easier to reason about.

## Purescript

You can get most of the benefits of functional programming in modern web applications by using things like Redux, Typescript, and Immutable.js. It is possible to augment javascript in such a way to reap the benefits of the paradigm. However, javascript was never designed to be a functional language. The tools we layer on top of it never solve 100% of the problem and are never quite as ergonomic as using something with these ideals baked in.

I began using [Purescript][5] to apply fp techniques to front end applications. Purescript compiles to javascript meaning you get 100% of the cross platform support with 100% of the benefits of a pure functional language.

There are alternatives to Purescript such as ReasonML, Elm, or even compiling Haskell to Javascript, but I have found Purescript to be easy to work with while still being extremely powerful.

## Language Features

Purescript has some amazing features that make writing business logic very straightforward.

### Pattern Matching

```haskell
f :: Boolean -> String
f true = "It's true"
f false = "It's not :("
```

Here we see a function `f` that has the type `Boolean -> String`. This means that it accepts a Boolean argument and returns a String. This first line is the type annotation.

The two lines below the type annotation are pattern matching cases. When this function is evaluated, purescript will run through these cases top to bottom to find the first pattern which the arguments match. In this case, if `f` is passed true it will return `It's true`. Otherwise, if `f` is passed false, it will return `It's not :(`.

The compiler also ensures that you covere all the possible cases, meaning that you will never forget to handle possible variation of the arguments. This is a very declarative way to write a common piece of logic that would look quite different in javascript. In javascript you would presumably write a conditional to check the value of the argument:

```javascript
function checkTrue(flag) {
  if (flag) {
    return "It's true";
  }
  return "It's not :(";
}
```

Or perhaps a more terse ES6 version with an arrow function:

```javascript
const checkTrue = flag => flag ? "It's true" : "It's not :(";
```

But pattern matching is much more powerful than simple booleans. For example:

```haskell
sumOfProducts :: [Number] -> Number
sumOfProducts [] = 0
sumOfProducts [_] = 0
sumOfProducts (n : m : ns) = n * m + sumOfProducts (m : ns)
```

This function taks an array of Numbers and returns a Number by pattern matches the following cases:
1. An empty array is provided - returns 0
2. An array with only one element is provied - returns 0 (by convention the underscore denotes that the actual value is not going to be used)
3. An array pattern is used to split the array into three pieces:
    * `n` being the first element
    * `m` being the second element
    * `ns` being the array of remaining elements.

    These three pieces are then used to recursively calculate the sum of each pair of products.

Something like this in javascript would be much more verbose and less declarative.

### Tagged Unions

One of my favorite things about Purescript is that there is not concept of null or undefined.

Who hasn't run into `cannot read property x of undefined`? In fact, the inventor of the null reference caslled it a billion-dollar mistake.

Purescript explicitly calls out the possibility of the lack of a value in it's type system. The way this is done is using something called tagged unions.

```haskell
data Maybe a = Just a | Nothing
```

Here we see the definition for a tagged union data type that states that `Maybe` has a type parameter `a` and can be constructed using either a `Just a` constuctor or a `Nothing` constructor.

To see this in action let's look at a function that sets the default value for a string if it doesn't exist:

```haskell
defaultName :: (Maybe String) -> String
defaultName (Just name) = name
defaultName Nothing = "My Default Name"
```

`defaultName` accepts a `Maybe String` meaning that it can accept either a `Just String` or a `Nothing`. We can then pattern match on these cases to return the appropriate value. And of course, the compiler will complain if you leave out a possible case.

Encoding the lack of values into the type system like this means that you will never run into a situation in runtime where something is undefined, effectively eliminating a whole class of bugs.

### Partial Application

In Purescript, every function is automatically curried. This means that if a function is invoked with fewer than it's specified number of arguments, a new function is returned accepting the remaining arguments. This allows you to make a more specific function out of a more general one. For example:

```haskell
add x y = x + y
add1 = add 1
add1 2 -- returns 3
```

I've left the type annotation off in this case, but `add` is a function taking two arguments `x` & `y`. `add` can be specialized by calling it with only one argument. When it's called with `1` in this case we end up with a new function `add1` that only takes one argument.

This same things can be achieved in javascript, and arrow functions make this especially nice:

```javascript
const add = x => y => x + y;

const add1 = x => add(1)(x);

add1(2); // returns 3
```

But because in Purescript _every_ function behaves like this, it means that even libraries and third party dependencies can be used in the powerful way.

### Composition

Composition is the idea of taking multiple functions and chaining them together or _composing_ them. The output of the first function becomse the input to the second function. In javascript this is done as follows:

```javascript
const add1 = x => x + 1;
const mutiply2 = x => x + 2;

const add1Multiply2 = x => multiply2(add1(x));
```

Here we have two functions that perform calculations and a third function that is the composition of the two. In Purescript, functions can be composed using the composition operator `<<<`:

```haskell
add1 x = x + 1
multiply2 x = x * 2
add1Multiply2 = multiply2 <<< add1
```

It also supports a forward composition operator which makes the whole thing a little more legible to our minds that read things from left to right:

```haskell
add1 x = x + 1
multiply2 x = x * 2
add1Multiply2 = add1 >>> multiply2
```

Notice that in purescript we can forego manually declaring the argument for `add1Multiply2` and passing it into `add1`. Not having to worry about wiring together the arguments allows us to think about the function at a higher level, as simply the composition of `add1` and `multiply2`.

## Using Purescript with Vue

Ok, so purescript looks pretty cool, how do I go about using it?

Because purescript is built to interop with javascript, there is a webpack plugin call [purs-loader][6] that will automatically bundle your purescript code and allow you to import it into your project.

And because Vue supports custom build configuration in `vue.config.js` using webpack chaining, we don't have to eject our app like we would in React:

```javascript
// vue.config.js
module.exports = {
  chainWebpack: config => {

    config.module
      .rule('purescript')
      .test(/\.purs$/)
      .use('purs-loader')
  }
}
```

After that bit of configuration, you'll be able to import Purescript modules just like you would import regular ES Modules:

```
import { reducer as counter } from './Counter/Reducer.purs'
import { reducer as board } from './Board/Reducer.purs'
import { initialAction } from './App/Reducer.purs'
```

You can find the source code for an example vue application built with Purescript [here][7].

## Vuex vs Redux

In my first attempt at using Purescript in a Vue application I used Vuex to handle state management. I soon realized that unfortunately, Vuex is not a good candidate for purescript interop because it depends on mutability.

Purescript has no concept of mutability and using it with Vuex would require mapping immutable state updates to the mutable Vuex state. Although not impossible, it does present a performance concern as well as hindering reducer composition.

Luckily, Redux is fully immutable and has nice bindings to work with vue. In particular I used [vuejs-redux][8].

## Canonical Counter Example

The Counter vue component is a "dumb" component in that it has no idea how the state is being handled. It merely expects `props`, and `actions`, displays the value of the counter and displays 2 buttons for dispatching `increment` and `decrement` actions:

```html
<template>
  <div>
    <h1>Counter: {{ props.value }}</h1>
    <button @click="actions.increment(1)">Increment</button>
    <button @click="actions.decrement(1)">Decrement</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: ['actions', 'props'],
}
</script>
```

The actions for this component are defined in purescript, using a tagged union. Notice that we don't have to use a `type` string like we would normally have on a redux action:

```haskell
module State.Counter.Action where

-- Action is a tagged union
-- with a constructor for each type of action
data Action
  = Increment Int
  | Decrement Int
```

This is declaring our action as a data type that can either be an `Increment` or a `Decrement` containing an `Int`;

Then our reducer really let's purescript shine:

```haskell
counterReducer :: Action -> State -> State
counterReducer (Increment x) state = state + x
counterReducer (Decrement x) state = state - x
counterReducer _ state = state
```

Here we define our counter reducer as a function taking an `Action`, a `State`, and returning a `State`. Then we can pattern match on the incoming action, pull out the payload, and use it to perform our business logic.
We also have a base case at the bottom which handles Actions not matching the ones specified.

A corresponding reducer in javascript is much more verbose and less declarative:

TODO: javascript reducer

Now, to tie the Counter component to it's reducer we use the `Provider` component provided by `vuejs-redux` and pass it 2 functions:
* `mapStateToProps` which takes a State and returns the props to be passed to the component
* `mapDispatchToProps` which takes a Dispatch function and returns the props (actions) to be passed to the components

If you have used Redux before these will be familiar. In this case we defined them in purescript. For example:

```haskell
type CounterProps = { value :: State }

mapStateToProps :: forall a. { counter :: State | a } -> CounterProps
mapStateToProps { counter } = { value: counter }
```

This function accepts any type that has a `counter` field of type `State` and returns a record of type `CounterProps`. Because our state for the counter it just an int this function is very minimal.

## Conclusion

Separating your business logic from your view logic is critical to reducing complexity in modern web apps. Tools like Redux and Vuex reduce complexity further by utilizing functional programming principles. Purescript can be used in conjuction with these tools to make business logic more robust and testable.

[1]: https://www.infoq.com/presentations/Simple-Made-Easy
[2]: https://facebook.github.io/flux/
[3]: https://redux.js.org/
[4]: https://vuex.vuejs.org/
[5]: http://www.purescript.org/
[6]: https://github.com/ethul/purs-loader
[7]: https://github.com/sliptype/vue-pure
[8]: https://github.com/titouancreach/vuejs-redux
