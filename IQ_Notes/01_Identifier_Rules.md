# JavaScript Identifier Rules — Complete Reference

## What is an Identifier?

An **identifier** is a name you give to variables, functions, classes, object properties, labels, and parameters. It's how you label things in your code so you can refer back to them. The JavaScript engine uses identifiers to look up values in scopes during execution.

---

## Comparison Table — Valid vs Invalid Identifiers

| Example | Valid? | Why |
|---------|--------|-----|
| `name` | ✅ | Starts with a letter, all valid chars |
| `firstName` | ✅ | camelCase — recommended convention |
| `_private` | ✅ | Underscore allowed as first character |
| `$element` | ✅ | Dollar sign allowed as first character |
| `camelCase123` | ✅ | Digits allowed after the first character |
| `π` | ✅ | Unicode letter (U+03C0) — valid since ES5 |
| `résumé` | ✅ | Unicode letters with accents are allowed |
| `vishnusVariable` | ✅ | Any length, descriptive name |
| `123abc` | ❌ | Cannot start with a digit |
| `my-variable` | ❌ | Hyphen is a minus operator, not valid |
| `my variable` | ❌ | Space is a separator, not valid |
| `break` | ❌ | Reserved keyword |
| `class` | ❌ | Reserved keyword |
| `if` | ❌ | Reserved keyword |
| `null` | ❌ | Literal keyword |
| `true` | ❌ | Literal keyword |
| `let` | ❌ (strict mode) | Reserved in strict mode |
| `static` | ❌ (strict mode) | Reserved in strict mode |
| `enum` | ❌ | Future reserved keyword |
| `@name` | ❌ | `@` is not a valid identifier character |
| `#name` | ❌ (usually) | `#` is only valid for private class fields (`#name` inside a class body is allowed) |
| `_` | ✅ | Valid but not meaningful |
| `$` | ✅ | Valid — jQuery uses this convention |

---

## The 5 Identifier Rules

### Rule 1 — Must Start With: Letter, `_`, or `$`

An identifier's first character must be:
- A Unicode letter (`A–Z`, `a–z`, plus letters from other languages like `é`, `ñ`, `π`, `日`)
- An underscore (`_`)
- A dollar sign (`$`)

```js
// ✅ Valid first characters
let name = "Vishnu";
let _count = 0;
let $price = 99;
let π = 3.14159;
let año = 2026;

// ❌ Invalid first characters
let 1stPlace = "gold";    // starts with digit → SyntaxError
let @name = "test";       // starts with @ → SyntaxError
let -score = 10;          // starts with - → SyntaxError
```

### Rule 2 — Subsequent Characters: Letter, Digit, `_`, or `$`

After the first character, you can use:
- Unicode letters
- Unicode digits (`0–9`)
- Underscore (`_`)
- Dollar sign (`$`)

```js
// ✅ Valid
let user123 = "ok";
let data_v2 = {};
let $super$long$name = true;
let _temp_42_ = null;

// ❌ Invalid
let my name = "no";       // space → SyntaxError
let first-name = "no";    // hyphen → SyntaxError (parser sees: first - name)
let user@domain = "no";   // @ → SyntaxError
let a.b = "no";           // dot → property access, not identifier
```

### Rule 3 — Cannot Be a Reserved Keyword

Identifiers cannot match any JavaScript reserved keyword (see [`02_Keyword_Notes.md`](./02_Keyword_Notes.md)).

```js
// ❌ SyntaxError — these are all reserved
let break = 1;
let class = "Math";
let function = () => {};
let if = true;
let null = "nothing";
let true = false;
let let = "confusing";   // SyntaxError in strict mode / modules
```

### Rule 4 — Case Sensitive

JavaScript identifiers are **case-sensitive**. `Name`, `name`, and `NAME` are three different identifiers.

```js
let name = "vishnu";
let Name = "VISHNU";
let NAME = "UPPER";

console.log(name);  // "vishnu"
console.log(Name);  // "VISHNU"
console.log(NAME);  // "UPPER"
```

### Rule 5 — No Length Limit (practical)

There is no hard limit on identifier length, but extremely long names hurt readability. Keep them meaningful but concise.

```js
// ✅ Valid but ridiculous — don't do this
let thisVariableNameIsRidiculouslyLongAndShouldNeverBeUsed = 42;
```

---

## Identifier Categories in JavaScript

| Category | Example | Notes |
|----------|---------|-------|
| **Variable** | `let count = 5;` | `var`, `let`, `const` declarations |
| **Function** | `function greet() {}` | Function declarations and expressions |
| **Class** | `class User {}` | Class name is an identifier |
| **Parameter** | `(firstName, lastName)` | Function parameters |
| **Property** | `obj.firstName` | Object properties (can be any string, but identifiers as shorthand) |
| **Label** | `outerLoop: for(...)` | Loop and statement labels |
| **Module binding** | `import { sum } from './math'` | Named imports/exports |

---

## Naming Conventions (Community Standards)

| Convention | Use Case | Example |
|------------|----------|---------|
| **camelCase** | Variables, functions, parameters, properties | `firstName`, `getUserById`, `isActive` |
| **PascalCase** | Classes, constructor functions, React components | `User`, `UserProfile`, `HTMLElement` |
| **UPPER_SNAKE_CASE** | Constants, environment variables | `MAX_SIZE`, `API_BASE_URL`, `PI` |
| **\_private** (underscore prefix) | Convention for "private" properties | `_internalState`, `_cache` |
| **$\_name** | jQuery-wrapped elements or observables | `$button`, `$state` |
| **kebab-case** | NOT valid in JS — used in CSS/HTML/filenames | `my-component` (can't use in JS) |

---

## Visual Summary

```
┌─────────────────────────────────────────────────────────────┐
│                  IDENTIFIER RULES                            │
│                                                              │
│  ┌─ RULE 1 ──────────────────────────────────────────────┐  │
│  │  First character: letter (a-zA-Z), _, or $            │  │
│  │  myVar ✅    _private ✅    $el ✅    123abc ❌        │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌─ RULE 2 ──────────────────────────────────────────────┐  │
│  │  Rest of chars: letters, digits (0-9), _, $           │  │
│  │  user123 ✅    data_v2 ✅     my-var ❌    a.b ❌      │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌─ RULE 3 ──────────────────────────────────────────────┐  │
│  │  Cannot be a reserved keyword                          │  │
│  │  break ❌    class ❌    if ❌    null ❌    let ❌      │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌─ RULE 4 ──────────────────────────────────────────────┐  │
│  │  Case sensitive                                        │  │
│  │  name ≠ Name ≠ NAME                                    │  │
│  └───────────────────────────────────────────────────────┘  │
│                                                              │
│  ┌─ RULE 5 ──────────────────────────────────────────────┐  │
│  │  No length limit — keep them meaningful & concise      │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## Flow — How JS Parses an Identifier

```
Source Code
    │
    │  let firstName = "Vishnu";
    │       ▲──────── identifier
    ▼
   Lexer / Tokenizer
    │
    │  Reads character-by-character
    │  'f' → is it a letter? → yes → start building identifier token
    │  'i', 'r', 's', 't', 'N', 'a', 'm', 'e' → letters → continue
    │  ' ' (space) → token boundary → emit TOKEN_IDENTIFIER("firstName")
    │
    │  If lexer hits an invalid char mid-identifier, it throws early:
    │  'm', 'y', '-', 'v' → '-' is not allowed → SyntaxError
    ▼
   Parser
    │
    │  Checks: Is this token a reserved keyword?
    │  YES → SyntaxError ("Unexpected token 'break'")
    │  NO  → Treat as identifier, create binding in current scope
    ▼
   Scope Resolution
    │
    │  Identifier is registered in the appropriate scope:
    │  · var → function scope (hoisted, initialized to undefined)
    │  · let / const → block scope (hoisted but uninitialized — TDZ)
    │  · function → function scope (hoisted with definition)
    ▼
   Runtime Lookup
    │
    │  When code references the identifier:
    │  Engine walks scope chain to find the binding
    │  Returns the stored value (or throws ReferenceError if not found)
```

---

## One-Liner Summary

- **Identifiers** name variables, functions, classes, and parameters — must start with a **letter, `_`, or `$`**, cannot be a **reserved keyword**, are **case-sensitive**, and may contain **letters, digits, `_`, and `$`** after the first character.
