---
title: Functional Front-End with Vue and Purescript
date: "2019-04-06"
---

I often find myself in situations where I am hesitant to make a change because it's impossible to tell what will break.

When a number of things implicitly depend on one another, there is no risk-free change.

Rich Hickey (the creator of Clojure) gave [a really great talk][1]. He points out that there are two types of complexity:
> _Inherent complexity_ is fundamental to business logic and exists in any domain.

> _Incidental complexity_ is introduced by design decisions.

It is incidental complexity we can avoid and should strive to minimize.

## Shared Mutability

In my experience, one of the primary contributors to incidental complexity is shared mutable state. To understand shared mutable state let's first define mutability:

> _Mutability_ is the idea that a value can change.

In Javascript for example, if we have a variable containing a number we can assign a different number to it.

If multiple places reference that variable, they will all implicitly depend on any process that changes the value.
> _Shared mutability_ is when multiple entities reference some mutable state.

When working in an environment with lots of shared mutability, the burden falls on the programmer to map the relationships between different entitites and processes. It is no longer explicit what depends on what, or which order things need to occur.

## Simplicity

Luckily, there are powerful tools available in the Javascript ecosystem to reduce shared mutability and in turn, complexity.

[Flux][2] is a convention for structuring state updates popularized by Facebook. It prescribes that the state of an application can only be updated in a single place, making it much easier to reason about.

Popular implementations of Flux include [Redux][3] and [Vuex][4]. Redux is fully immutable, and Vuex is fully mutable, but both follow the principles of Flux. They also prioritize the separation of business logic and view logic.

Using these libraries is a step in the right direction, but I wanted to take the reduction of shared mutability to it's logical conclusion.

## Functional Programming
Functional programming, or FP for short, is a programming paradigm that actively avoids shared mutability. It is a very different approach from Object Oriented programming.

In FP, all values are immutable. The primary building blocks are functions, and most importantly pure functions:

> _Pure functions_ always return the same output for a given input and do not have any side effects.

Pure functions are highly testable because nothing outside of the function needs to be considered. The inputs must simply be matched with the expected outputs.

Most functional languages also have a strong static type system. Types are checked at compile time and a whole class of run time bugs are eliminated.

While FP prioritizes purity, it does allow for side effects. The side effects are controlled and encoded directly into the type system. When a function does affect something outside of itself, you can tell by the function signature.

As a whole, these features lead to programs that are easier to reason about.

## Purescript

You can get some of the benefits of functional programming by using things like Redux, Typescript, and Immutable.js.

However, Javascript was not designed to be a functional language. The tools we layer on top never solve 100% of the problem and are never quite as ergonomic as using something with these ideals baked in.

I began using [Purescript][5] to apply FP techniques to front end applications. Purescript compiles to Javascript meaning you get 100% of the cross platform support with 100% of the benefits of a pure functional language.

There are alternatives to Purescript such as ReasonML, Elm, or even compiling Haskell to Javascript. However, I have found Purescript to be easy to work with while still being extremely powerful.

## Language Features

Purescript has some interesting features that make writing business logic very straightforward.

### Pattern Matching

```haskell
f :: Boolean -> String
f true = "It's true"
f false = "It's not :("
```

Here we see a function `f` with the type `Boolean -> String`. The type annotation tells us `f` accepts a Boolean argument and returns a String.

The two lines below the type annotation are pattern matching cases. When this function is evaluated, Purescript will run through these cases to find the first pattern which matches the arguments. If `f` is passed true it will return `It's true`. Otherwise, if `f` is passed false, it will return `It's not :(`.

The compiler also ensures that all possible cases are accounted for, meaning that it will alert you when you forget to handle a possible variation of the arguments.

Pattern matching is a declarative way to write logic that would look quite different in Javascript. In Javascript you would presumably write a conditional to check the value of the argument:

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

This function takes an array of `Number` and returns a `Number` by pattern matches the following cases:
1. An empty array is provided - returns 0
2. An array with only one element is provied - returns 0 (by convention the underscore denotes that the actual value is not going to be used)
3. An array pattern is used to split the array into three pieces:
    * `n` being the first element
    * `m` being the second element
    * `ns` being the array of remaining elements.

    These three pieces are then used to recursively calculate the sum of each product of pairs.

Something like this in Javascript would be more verbose and less declarative.

### Tagged Unions

One of my favorite things about Purescript is that there is no concept of null or undefined.

The inventor of the null reference called it a billion-dollar mistake. Who hasn't run into `cannot read property x of undefined`?

Purescript explicitly calls out the possibility of the lack of a value in it's type system. The way this is done is using tagged unions:

```haskell
data Maybe a = Just a | Nothing
```

Here we see the definition for a data type `Maybe` with a type parameter `a`. `Maybe a` can be constructed using either a `Just a` constuctor or a `Nothing` constructor.

To see it in action let's look at a function that sets a default value for a string:

```haskell
defaultName :: (Maybe String) -> String
defaultName (Just name) = name
defaultName Nothing = "My Default Name"
```

`defaultName` accepts a `Maybe String`. It pattern matches on the two possible cases of `Just String` and `Nothing` to return the appropriate value. And of course, the compiler will complain if a possible case is left out.

Encoding the lack of values into the type system means that you will be hard pressed to run into a runtime situation where something is undefined.

### Partial Application

In Purescript, every function is automatically curried. If a function is invoked with fewer than it's specified number of arguments, a new function is returned accepting the remaining arguments. This allows you to make a specific function out of a general one. For example:

```haskell
add x y = x + y
add1 = add 1
add1 2 -- returns 3
```

I've left the type annotation off in this case, but `add` is a function taking two arguments `x` and `y`. `add` can be specialized by calling it with only one argument. When it's called with `1` we end up with a new function `add1`.

The same thing can be achieved in Javascript, and arrow functions make it especially nice:

```javascript
const add = x => y => x + y;

const add1 = add(1);

add1(2); // returns 3
```

But in Purescript _every_ function behaves like this. Even libraries and third party dependencies can be used in this powerful way.

### Composition

Composition is the idea of taking multiple functions and chaining them together or _composing_ them. The output of the first function becomes the input to the second function. In Javascript it can be done as follows:

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

Purescript also supports a forward composition operator which makes the whole thing more legible since our minds read things from left to right:

```haskell
add1 x = x + 1
multiply2 x = x * 2
add1Multiply2 = add1 >>> multiply2
```

Notice that we can forego declaring the argument for `add1Multiply2` and passing it into `add1`.

Not having to worry about wiring together the arguments allows us to think about the function at a higher level, as simply the composition of `add1` and `multiply2`.

## Using Purescript with Vue

Purescript is built to interop with Javascript. The webpack plugin [purs-loader][6] will bundle your modules and allow you to import them into your project.

Vue supports custom build configuration in `vue.config.js` meaning we don't have to eject our app like we would in React:

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

```javascript
import { reducer as counter } from './Counter/Reducer.purs'
import { reducer as board } from './Board/Reducer.purs'
import { initialAction } from './App/Reducer.purs'
```

You can find the source code for an example vue application built with Purescript [here][7].

## Vuex vs Redux

Vuex is not a good candidate for Purescript interop because it depends on mutability.

Purescript has no concept of mutability and using it with Vuex would require mapping immutable state updates to the mutable Vuex state. Although not impossible, it does present a performance concern as well as hindering reducer composition.

Fortunately, Redux is fully immutable and has bindings that work well with Vue. In particular I used [vuejs-redux][8].

## Canonical Counter Example

The Counter Vue component is a "dumb" component. It merely expects `props` and `actions`, without access to how the state is being handled. The Counter displays a value and buttons for dispatching `increment` and `decrement` actions:

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

The actions for this component are defined  using a tagged union. Notice we don't use a `type` string like we normally would on a Redux action:

```haskell
module State.Counter.Action where

-- Action is a tagged union
-- with a constructor for each type of action
data Action
  = Increment Int
  | Decrement Int
```

`Action` is a data type that can be either an `Increment` or a `Decrement` containing an `Int`;

Purescript really shines when writing reducers:

```haskell
counterReducer :: Action -> State -> State
counterReducer (Increment x) state = state + x
counterReducer (Decrement x) state = state - x
counterReducer _ state = state
```

The counter reducer is a function taking an `Action`, a `State`, and returning a `State`. It pattern matches the incoming action, pulls out the payload, and performs the business logic.
There is also a base case which handles Actions not matching those specified.

A corresponding reducer in Javascript is more verbose:

```javascript
const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INCREMENT:
      return state + payload
    case DECREMENT:
      return state - payload
    default:
      return state
  }
}
```

To tie the Counter component to it's reducer we use the `Provider` component provided by `vuejs-redux` and pass it 2 functions:
* `mapStateToProps` takes a State and returns the props to be passed to the component
* `mapDispatchToProps` takes a Dispatch function and returns the props (actions) to be passed to the component

If you have used Redux before these will be familiar. In this case we defined them in Purescript. For example:

```haskell
type CounterProps = { value :: State }

mapStateToProps :: forall a. { counter :: State | a } -> CounterProps
mapStateToProps { counter } = { value: counter }
```

This function accepts any record type that contains a `counter` field of type `State` and returns a record of type `CounterProps`. Our state for the counter is just an `Int` and this function is minimal.

## Conclusion

Purescript is especially easy to integrate into an existing project. It can be used in conjuction with modern javascript tools to make business logic more robust and testable.

If you have complex business logic slowing your productivity I recommend looking into functional programming. It can go a long way towards code clarity.

[1]: https://www.infoq.com/presentations/Simple-Made-Easy
[2]: https://facebook.github.io/flux/
[3]: https://redux.js.org/
[4]: https://vuex.vuejs.org/
[5]: http://www.purescript.org/
[6]: https://github.com/ethul/purs-loader
[7]: https://github.com/sliptype/vue-pure
[8]: https://github.com/titouancreach/vuejs-redux
