---
title: Functional Front-End with Vue and Purescript
data: "2019-04-06"
---

Have you ever found yourself in a situation where you are hesitant to make a change because it is impossible to tell what will break?

I know I have. I have been burned by unnecessarily complex state, where an arbitrary number of things all depend on one another. It's one of the initial reasons I went down the rabbit hole of using functional programming to build modern web apps.

Rich Hickey (the creator of Clojure) gave [a really great talk][1] in which he points out that there are two types of complexity we deal with when building apps:
> _Inherent complexity_ exists in any domain. It is the complexity which is inherent to the business logic.

> _Incidental complexity_ is the complexity introduced by design decisions.

It is incidental complexity that can be avoided and we should strive to minimize.

## Shared Mutability

In my experience, one of the primary contributors to incidental complexity is shared mutable state. To understand shared mutable state let's first define mutability:

> _Mutability_ is the idea that a value can be changed.

For example in javascript, if we have a variable containing a number we can assign a different number to it. This is mutability.

Now, if multiple places in the code reference that variable, they will all be using the new number. This is _shared mutability_ - multiple entities referencing a shared bit of state that can be changed.

When working in an environment with lots of shared mutability, the burden falls on the programmer to map the relationships between different entitites and processes. It is no longer explicit what depends on what, or which order things need to occur in.

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

In OO, everything is an object and mutability is widespread while in FP everything is a Function and all values are immutable. This means that FP actively avoids mutable state and therefore reduces incidental complexity. It also prioritizes the use of pure functions:

> _Pure functions_ always return the same output for a given input and do not have any side effects.

This gives rise to the idea of _referential transparency_, which says that a functional call could theoretically be replaced with it's output and the program would not be affected in any way. This means functional programs are highly testable, because nothing outside of the function needs to be considered. The inputs must simply be matched with the expected outputs.

Most functional languages also have a strong static type system. This means that types are checked at compile time, and a huge amount of run time bugs are eliminated.

Now if every function in a program were pure, there would be no way to tell that the program ever ran because there would be no sideeffects. So, while FP prioritizes purity, it does allow for side effects. However, these side effects are controlled in that they are encoded directly into the type system. So when a function does affect something outside of itself, you can immediately tell by the function signature.

As a whole, these features lead to programs that are easy to reason about.

## Purescript

Couldn't we get most of the benefits of functional programming in modern web applications by using things like Redux, Typescript, and Immutable.js?

Yes, it is possible to augment javascript in such a way to reap the benefits of the paradigm. But in my opionion, because javascript was never designed to be a functional language, the tools we layer on top of it never solve 100% of the problem and are never quite as ergonomic as using something with these ideals baked in.

In my attempt to apply more fp techniques to front end applications I began using [Purescript][5]. Because Purescript compiles to javascript, you can get 100% of the cross platform support with 100% of the benefits of a pure functional language.

There are of course alternatives to Purescript such as ReasonML, Elm, or even compiling Haskell to Javascrip but I have found Purescript to be very easy to work with while still being extremely powerful.

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



[1]: https://www.infoq.com/presentations/Simple-Made-Easy
[2]: https://facebook.github.io/flux/
[3]: https://redux.js.org/
[4]: https://vuex.vuejs.org/
[5]: http://www.purescript.org/
