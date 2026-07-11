# JavaScript Keywords — Complete Reference

## What is a Keyword?

A **keyword** is a reserved word in JavaScript that has a predefined, special meaning to the language engine. Keywords cannot be used as **identifiers** — meaning you cannot name your variables, functions, classes, or labels with them, because the parser already knows what these words mean.

---

## Example: `01_HelloWorld.js`

**Source File:** `01_chapter_Javascript/01_HelloWorld.js`

```js
console.log("Hello, this is vishnu's PC");
```

Even in this one-liner, the V8 parser sees `console` as a property of the **global object** (`globalThis`), and `log` as a method call. None of these are keywords — but they live in the same namespace that keywords protect. Keywords like `function`, `var`, `let`, `const`, and `this` carve out the grammar rules that govern how this line is eventually interpreted.

---

## Comparison Table

| Category | Keywords | Count | Can Be Used as Identifier? |
|----------|----------|-------|----------------------------|
| **Reserved Keywords** (always reserved) | `break`, `case`, `catch`, `class`, `const`, `continue`, `debugger`, `default`, `delete`, `do`, `else`, `export`, `extends`, `finally`, `for`, `function`, `if`, `import`, `in`, `instanceof`, `new`, `return`, `super`, `switch`, `this`, `throw`, `try`, `typeof`, `var`, `void`, `while`, `with`, `yield` | 33 | ❌ Never |
| **Reserved in Strict Mode** | `let`, `static`, `implements`, `interface`, `package`, `private`, `protected`, `public` | 8 | ❌ In strict mode / modules |
| **Future Reserved** (always) | `enum` | 1 | ❌ Never (reserved for future use) |
| **Literals (reserved keywords)** | `true`, `false`, `null` | 3 | ❌ Never |
| **Contextual Keywords** (reserved only in specific positions) | `async`, `await`, `of`, `from`, `get`, `set`, `as`, `target` | 8 | ⚠️ Sometimes (can be used as identifiers outside their special context) |

**Total: 53 keywords across all categories**

---

## Detailed Keyword Reference

### 1. Control Flow (`break`, `case`, `continue`, `default`, `do`, `else`, `for`, `if`, `switch`, `while`)

| Keyword | Purpose |
|---------|---------|
| `if` | Conditional branch |
| `else` | Alternative branch for `if` |
| `switch` | Multi-way branch |
| `case` | A branch inside `switch` |
| `default` | Fallback branch in `switch` |
| `for` | Loop construct |
| `while` | Pre-test loop |
| `do` | Post-test loop (with `while`) |
| `break` | Exit a loop or switch |
| `continue` | Skip to next loop iteration |

### 2. Declaration (`class`, `const`, `function`, `let`, `var`, `static`)

| Keyword | Purpose |
|---------|---------|
| `var` | Declare a function-scoped variable |
| `let` | Declare a block-scoped variable |
| `const` | Declare a block-scoped constant |
| `function` | Declare a function |
| `class` | Declare a class |
| `static` | Declare a static method/property inside a class |

### 3. Exception Handling (`catch`, `finally`, `throw`, `try`)

| Keyword | Purpose |
|---------|---------|
| `try` | Define a block to test for errors |
| `catch` | Handle the error thrown in `try` |
| `finally` | Execute code regardless of error |
| `throw` | Throw a custom error |

### 4. Modules & Imports (`export`, `extends`, `import`, `super`)

| Keyword | Purpose |
|---------|---------|
| `import` | Import bindings from another module |
| `export` | Export bindings to other modules |
| `extends` | Create a subclass |
| `super` | Call parent class constructor or method |

### 5. Special Operators/Expressions (`debugger`, `delete`, `in`, `instanceof`, `new`, `return`, `this`, `typeof`, `void`, `with`, `yield`)

| Keyword | Purpose |
|---------|---------|
| `this` | Reference to the current execution context |
| `new` | Create an instance of a constructor/class |
| `return` | Return a value from a function |
| `typeof` | Get the type of an expression as a string |
| `delete` | Remove a property from an object |
| `in` | Check if a property exists in an object |
| `instanceof` | Check if an object is an instance of a class |
| `void` | Evaluate an expression and return `undefined` |
| `yield` | Pause/resume a generator function |
| `debugger` | Trigger a breakpoint (if devtools are attached) |
| `with` | Extend scope chain (forbidden in strict mode) |

### 6. Literal Keywords (`true`, `false`, `null`)

| Keyword | Value | Type |
|---------|-------|------|
| `true` | Boolean true | `boolean` |
| `false` | Boolean false | `boolean` |
| `null` | Intentional absence of any value | `object` (historical bug, actually `null`) |

### 7. Async (`async`, `await`)

| Keyword | Purpose |
|---------|---------|
| `async` | Declare an async function (returns a Promise) |
| `await` | Pause execution until a Promise settles (only inside `async`) |

### 8. Future Reserved (`enum`, `implements`, `interface`, `package`, `private`, `protected`, `public`)

These are reserved for potential future language features. `private`, `protected`, `public` were considered for classes but TypeScript uses them. JavaScript may adopt them natively in the future.

### 9. Contextual: `of`, `from`, `get`, `set`, `as`, `target`

| Keyword | Context Where It's Special |
|---------|---------------------------|
| `of` | `for...of` loops |
| `from` | `import ... from` statements |
| `get` | Getter in object literal / class |
| `set` | Setter in object literal / class |
| `as` | Named exports: `export { x as y }` |
| `target` | `new.target` meta property |

---

## Visual Breakdown — Where Keywords Sit in JS Execution

```
┌─────────────────────────────────────────────────┐
│                  JAVASCRIPT KEYWORDS             │
│                                                 │
│  ┌──────────────┐  ┌──────────────┐             │
│  │  RESERVED    │  │  CONTEXTUAL  │             │
│  │  (Always)    │  │  (Sometimes) │             │
│  │              │  │              │             │
│  │ if, else,    │  │ async, await,│             │
│  │ for, while,  │  │ get, set, of,│             │
│  │ function,    │  │ from, as,    │             │
│  │ class, var,  │  │ target       │             │
│  │ const, let,  │  │              │             │
│  │ return, new, │  │ Can be used  │             │
│  │ this, etc... │  │ as variable  │             │
│  │              │  │ names outside│             │
│  │ ❌ Never     │  │ their context│             │
│  │ identifiers  │  │              │             │
│  └──────────────┘  └──────────────┘             │
│                                                 │
│  ┌──────────────────────────────────┐           │
│  │        FUTURE RESERVED           │           │
│  │                                  │           │
│  │ enum, implements, interface,     │           │
│  │ package, private, protected,     │           │
│  │ public                           │           │
│  │                                  │           │
│  │ ❌ Reserved for future versions  │           │
│  └──────────────────────────────────┘           │
│                                                 │
│  ┌──────────────────────────────────┐           │
│  │        LITERAL KEYWORDS          │           │
│  │  true, false, null               │           │
│  │  ❌ Cannot be reassigned         │           │
│  └──────────────────────────────────┘           │
└─────────────────────────────────────────────────┘
```

---

## Summary Flow — How JS Parses Keywords

```
Source Code (.js)
    │
    │  You write: function greet() { return "hi"; }
    ▼
   Lexer / Tokenizer
    │
    │  Scans character-by-character
    │  Identifies: [KEYWORD:function] [IDENTIFIER:greet] [PUNCTUATOR:(] ...
    ▼
   Parser
    │
    │  Matches token stream against grammar rules
    │  Keywords define the grammar structure
    │  "function" → FunctionDeclaration production rule
    ▼
   AST (Abstract Syntax Tree)
    │
    │  Structured representation with keyword-driven nodes
    │  { type: "FunctionDeclaration", id: "greet", body: {...} }
    ▼
   Execution
    │
    │  Engine executes based on keyword semantics:
    │  · function → creates a callable object
    │  · var/let/const → allocates memory in the right scope
    │  · return → pops the call stack with a value
    │  · new → sets up prototype chain and calls constructor
    ▼
   Runtime Behavior
```

---

## Quick Reference — All 53 Keywords

```
break       case        catch       class       const
continue    debugger    default     delete      do
else        enum        export      extends     false
finally     for         function    if          import
in          instanceof  let         new         null
return      super       switch      this        throw
true        try         typeof      var         void
while       with        yield

// Strict-mode reserved:
implements  interface   package     private     protected
public      static

// Contextual:
async       await       of          from        get
set         as          target
```

---

## One-Liner Summary

- **Keywords** = Reserved words that define the grammar and semantics of JavaScript — the parser treats them as instructions, not identifiers.
- **53 total** across 9 categories: control flow, declarations, exceptions, modules, operators, literals, async, future reserved, and contextual.
- **Can't use them as variable/function names** — if you try, the parser throws a `SyntaxError` before the code even runs.
