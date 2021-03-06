# Project Euler 012 - Highly Divisible Triangular Numbers

The sequence of triangle numbers is generated by adding the natural numbers.  So the 7th triangle number would be `1 + 2 + 3 + 4 + 5 + 6 + 7 = 28`.

The first ten terms would be:

`1, 3, 6, 10, 15, 21, 28, 36, 45. 55, ...`

Let us list the factors of the first seven triangle numbers:

      1: 1
      3: 1,3
      6: 1,2,3,6
     10: 1,2,5,10
     15: 1,3,5,15
     21: 1,3,7,21
     28: 1,2,4,7,14,28

We can see that 28 is the first triangle number to have over 5 divisors.

What is the value of the first triangle number to have over n divisors (e.g. 500)?  The aim is to answer this question using HTML Forms and JavaScript.

Information at [Project Euler 012](https://projecteuler.net/problem=12)

## UX

**Getting Started**

Enter a whole number between 1 and 1000 in the input field and click on the Submit Button.  You will see the number you have entered as well as the first triangle number to have over n divisors, unless you have made an invalid input.  For example, if you entered 5, you should get 28 as the first triangle number to have over n divisors.  Click on the Reset Button to clear that information or to start again.

**User Stories**

As a user, I expect to get an invalid input if I do any of:

* Not enter anything in the input field
* Entering text that is not a number (e.g. bus)
* Entering a number less than 1 or greater than 1000
* Entering a number, but it is not an integer

As a user, I expect the function `divisibleTriangleNumber(5)` to return a number.

As a user, I expect the function `divisibleTriangleNumber(5)` to return 28.

As a user, I expect the function `divisibleTriangleNumber(23)` to return 630.

As a user, I expect the function `divisibleTriangleNumber(167)` to return 1385280.

As a user, I expect the function `divisibleTriangleNumber(374)` to return 17907120.

As a user, I expect the function `divisibleTriangleNumber(500)` to return 76576500.

**Information Architecture**

The function `divisibleTriangleNumber(n)` returns a number, where `n` is the number of divisors between 1 and 1000.

## Features

Allows the user to enter the number of divisors, as well as getting the first triangle number to have over that number of divisors.  Performs checks to see if the input is valid.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.1.3 and Google Fonts.

## Testing

Ensure all user stories have been met.

## Deployment

Deployed on [GitHub Pages](https://derektypist.github.io/project-euler-012) at the main branch.

## Credits

### Content

Written by me.

### Acknowledgements

- [Project Euler](https://projecteuler.net)
- [FreeCodeCamp](https://www.freecodecamp.org)
