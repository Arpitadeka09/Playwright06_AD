// ============================================
// JavaScript Identifier Rules - Examples
// ============================================
// An "identifier" is the name we give to a variable, function, etc.
// Rules:
//   1. Can contain letters (a-z, A-Z), digits (0-9), _ and $
//   2. Must NOT start with a digit
//   3. Must NOT contain spaces or special characters (-, @, #, !, ...)
//   4. Case-sensitive (name and Name are DIFFERENT variables)
//   5. Must NOT be a reserved keyword (var, let, if, else, ...)
// ============================================

// ---------- Rule 1 & 2: Allowed characters, no leading digit ----------
var $ = 10;        // valid - starts with $
var _a = 12;       // valid - starts with _
var p = 15;        // valid - starts with a letter
var abc123 = 14;   // valid - digits allowed, just not at the start
// var 1abc = 20;  // INVALID - starts with a digit
// var ab c = 30;  // INVALID - contains a space
// var ab-c = 40;  // INVALID - contains a hyphen (would be treated as subtraction)

// ---------- Rule 4: Case-sensitive ----------
var Name = 99;
var name = 100;
console.log(Name);   // 99
console.log(name);   // 100  (different variable!)

// ---------- Rule 5: Reserved keywords cannot be used ----------
var $let = 50;     // valid - not exactly the keyword "let"
// var let = 60;   // INVALID - "let" is a reserved keyword
// var var = 70;   // INVALID - "var" is a reserved keyword

// ---------- camelCase convention (best practice) ----------
var firstName = "Arpita";   // good practice: camelCase for variables
var userAge = 25;

console.log(firstName, userAge, $, _a, p, abc123);
