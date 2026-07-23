# Learn Playwright 3x — JavaScript Foundations

A structured learning repository covering JavaScript fundamentals before diving into Playwright automation. Organized chapter-wise with hands-on exercises and detailed IQ (concept-explanation) notes.

---

## Project Structure

```
LearnPlaywright3x/
├── 01_chapter_Javascript/     # JS Basics: Hello World, HTML/CSS/JS intro
├── 02_chapter_Javascript/     # Variable declarations: let
├── 03_chapter_Identifier/     # Identifiers, rules, comments, IQ exercises
├── 04_chapter_Literal/        # Literals, null vs undefined, numbers
├── 05_chapter_Operator/       # Data types, operators, increment/decrement, null coalescing
├── 06_chapter_Statement/      # If-else, multiple conditions, nested conditions
├── 07_chapter_switch/         # Switch-case, fall-through, switch with booleans, browser grouping
├── 08_UserInputs/             # prompt(), readline, prompt-sync, fs.readFileSync
├── 09_chapter_Loops/          # for, while, do-while, nested loops
├── hackerrank_JS_Practice/    # HackerRank problem solutions (if-else, switch)
├── IQ_Notes/                  # Concept deep-dives in markdown
├── D2D_Notes/                 # Day-to-day class notes
└── README.md                  # This file
```

---

## Chapters & Exercises

### 01 — Chapter: JavaScript Basics

| # | File | Topic |
|---|------|-------|
| 1 | `01_HelloWorld.js` | First JS program — `console.log()` |
| — | `july7_class_outline.txt` | Day 1 outline: HTML/CSS/JS, interpreters vs compilers, V8 engine, Node.js, NPM, IDE vs ADE |

**Key Topics Covered:**
- What is HTML, CSS, and JavaScript
- Java vs JavaScript vs TypeScript
- Core features of JavaScript
- Interpreters vs Compilers (Compile-time vs Runtime)
- JavaScript — both interpreted and compiled (JIT)
- Browser engines (V8)
- Node.js — making JS a full-stack language
- NPM
- IDE vs ADE (Agentic Development Environment)

---

### 02 — Chapter: Variable Declarations

| # | File | Topic |
|---|------|-------|
| 2 | `02_letconcept.js` | `let` keyword — block-scoped variable declaration |

---

### 03 — Chapter: Identifiers

| # | File | Topic |
|---|------|-------|
| 3 | `03_Identifier_Rules.js` | Identifier rules in JS |
| 4 | `04_Identifier_Rules_Part2.js` | Identifier rules continued |
| 5 | `05_Comments.js` | Single-line (`//`) and multi-line (`/* */`) comments |
| 6 | `06_Identifier_IQ.js` | IQ-style exercises on identifiers |

---

### 04 — Chapter: Literals

| # | File | Topic |
|---|------|-------|
| 7 | `07_Literal.js` | Literal values in JS |
| 8 | `08_null_undefined.js` | `null` vs `undefined` |
| 9 | `09_Null_IQ.js` | IQ-style exercises on null/undefined |
| 10 | `10_Literal.js` | More on literals |
| 11 | `11_Number.js` | Number type in JS |
| 12 | `12_Number_Part2.js` | Number type — continued |

### 05 — Chapter: Operators & Data Types

| # | File | Topic |
|---|------|-------|
| 13 | `13_DataType.js` | Primitive vs reference types — string, number, boolean, bigInt, undefined, null, symbol; arrays, functions, objects |
| 14 | `14_Assignment_Operator.js` | Assignment (`=`) and compound assignment (`+=`, `-=`) |
| 15 | `15_Arithmetic_Operator.js` | Arithmetic (`+`, `-`, `*`, `/`, `%`, `**`) |
| 16 | `16_Comparison_Operator.js` | Loose (`==`, `!=`) vs strict (`===`, `!==`) comparison |
| 17 | `17_Logical_Operators.js` | Logical (`&&`, `||`, `!`) operators |
| 18 | `18_Confusing_Comparison.js` | Edge cases — `"" == 0`, `"0" == 0`, string comparisons |
| 18-P2 | `18_Confusing_Comparison_P2.js` | Edge cases — `null == undefined`, `null >= 0` paradox |
| 20 | `20_Question.js` | Loose vs strict comparison — `!=` vs `!==` |
| 21 | `21_String_Op.js` | String operators — `+=` concatenation, comma vs `+` |
| 22 | `22_Ternary_Op.js` | Ternary (conditional) operator — `condition ? true : false` |
| 23 | `23_IQ.js` | Ternary IQ — test status PASS/FAIL |
| 24 | `24_IQ2.js` | Ternary IQ — environment-based URL selection |
| 25 | `25_IQ3.js` | Ternary IQ — CI headless/headed browser mode |
| 26 | `26_IQ4.js` | Ternary IQ — SLA breach check with template literals |
| 27 | `27_IQ5.js` | Ternary IQ — simplifying boolean expressions |
| 28 | `28_Nested_Terny_Op.js` | Nested ternary — multi-condition with nesting |
| 29 | `29_IQ_NT.js` | Nested ternary IQ — HTTP status code categorization |
| 30 | `30_NT_IQ2.js` | Nested ternary IQ — temperature feel classification |
| 31 | `31_TypeOf_Op.js` | `typeof` operator — type checking primitive & reference types |
| 32 | `32_In_De_Op.js` | Pre/Post increment — `++a` vs `a++` behavior |
| 32-2 | `32_incr_dcr.js` | Increment/decrement IQ — complex expressions with `++`/`--` |
| 33 | `33_Ad_Incre.js` | Increment with addition — `++a + a` evaluations |
| 34 | `34_Incre_Part2.js` | Increment continued — chained `++` expressions |
| 35 | `35_Decrement.js` | Decrement — `--a` vs `a--` behavior |
| 36 | `36_Null_Coalescing.js` | Nullish coalescing (`??`) — fallback for `null`/`undefined` |

---

### 06 — Chapter: Statements (Conditionals)

| # | File | Topic |
|---|------|-------|
| 37 | `37_IQ.js` | Basic `if-else` — age-based branching |
| 38 | `38_Multiple_Condition.js` | `if-else if-else` ladder — grade classification |
| 38-2 | `38_IQ2.js` | Nested `if` — inner condition inside outer `if` block

**Key Topics Covered:**
- `if`, `else if`, `else` control flow
- Multiple condition branching (ladder)
- Nested conditions

---

### 07 — Chapter: Switch Statements

| # | File | Topic |
|---|------|-------|
| 39 | `39_Switch.js` | Basic `switch-case` — map day number to day name with `break` |
| 40 | `40_IQ.js` | Switch without `break` — fall-through behavior (all cases execute) |
| 41 | `41_IQ2.js` | Switch with `break` — correct day-to-message mapping, default for invalid |
| 42 | `42_REAL_API_Testing.js` | Switch for HTTP response codes — 200 OK, 404 Not Found |
| 43 | `43_Switch_Group.js` | Grouped cases — multiple browsers share Chromium label |
| 44 | `44_IQ.js` | Fall-through IQ — fruit cascade with missing `break` statements |
| 45 | `45_IQ2.js` | Switch on `true` — range-based grading with boolean expression cases |
| 46 | `46_IQ3.js` | Duplicate case IQ — duplicate `case 10` with block-scoped `let` |
| 47 | `47_IQ4.js` | Strict comparison in switch — `case false` vs `case 0`, `===` behavior |

**Key Topics Covered:**
- `switch-case-default` structure
- Fall-through behavior (missing `break`)
- Grouped cases for shared logic
- Switch on `true` for range-based conditions
- Strict comparison (`===`) used by `switch`
- Duplicate cases and block-scoping with `let`

---

### 08 — Chapter: User Input

| # | File | Topic |
|---|------|-------|
| 48 | `48_JS.js` | Browser `prompt()` — interactive user input in the browser |
| 49 | `49_Node_UI.js` | Node.js `readline` — interactive CLI input with `createInterface` |
| 50 | `50_Prompt.js` | `prompt-sync` package — synchronous prompt in Node.js |
| 51 | `51_Fs.js` | `fs.readFileSync(0, 'utf8')` — reading from stdin with EOF signal |

**Key Topics Covered:**
- Four ways to accept user input in JavaScript
- Browser `prompt()` vs Node.js `readline`
- Third-party `prompt-sync` for synchronous input
- Reading standard input via `fs` module

---

### 09 — Chapter: Loops

| # | File | Topic |
|---|------|-------|
| 52 | `52_Loop.js` | Basic loop introduction |
| 53 | `53_For_Loop.js` | `for` loop — initialization, condition, increment |
| 54 | `54_Increment.js` | Increment behavior inside loops |
| 55 | `55_For_Loops.js` | `for` loop variations and patterns |
| 56 | `56_For_Loops2.js` | More `for` loop exercises |
| 57 | `57_While.js` | `while` loop — condition-first execution |
| 58 | `58_While.js` | `while` loop continued |
| 59 | `59_Modie.js` | Modulus operator inside loops |
| 60 | `60_While_Vs_For.js` | Comparing `while` and `for` loops |
| 61 | `61_Do_While.js` | `do-while` loop — execute-then-check |
| 62 | `62_DoWhile_vs_While.js` | `do-while` vs `while` — at-least-once guarantee |
| 63 | `63_NestedFor_lOOP.js` | Nested `for` loops |

**Key Topics Covered:**
- `for` loop structure and patterns
- `while` loop — condition-first
- `do-while` loop — guaranteed first execution
- Loop increment behavior
- Modulus inside loops
- Nested `for` loops

---

### HackerRank — JavaScript Practice

| # | File | Topic |
|---|------|-------|
| — | `js_If_Else.js` | Grade classification — if-else ladder with 30–100 range |
| — | `js_Switch.js` | Number to word — switch-case mapping 1–9 to ONE–NINE |

---

## IQ Notes (Concept Deep-Dives)

| File | Topic |
|------|-------|
| `Source_Code_ByteCODE_BinaryCode_IQ.md` | Source Code vs Bytecode vs Binary Code — comparison table & flow diagram |
| `02_Keyword_Notes.md` | All 53 JavaScript keywords — categories, rules, reference |
| `01_Identifier_Rules.md` | 5 identifier rules — valid/invalid examples, naming conventions |
| `03_Commands.md` | VS Code commands — Windows & Mac side-by-side |
| `03_Commands_Windows.md` | VS Code shortcuts — Windows only (80 commands) |
| `03_Commands_Mac.md` | VS Code shortcuts — Mac only (80 commands) |
| `PROMPT_TEMPLATE.md` | Template for generating IQ notes |

---

## D2D Notes (Class Notes)

| Date | File |
|------|------|
| 6 July 2026 | `6 July 2026.txt` |
| 7 July 2026 | `7 July 2026.txt` — HTML/CSS/JS, compilers, V8, Node.js, NPM, IDE/ADE |
| 8 July 2026 | `8 July 2026.txt` |
| — | `Tasks-remaining.txt` | Token compression setup (ponytail/caveman) |

---

## Progress Summary

| Chapter | Exercises | Status |
|---------|-----------|--------|
| 01 — JS Basics | 1 exercise | ✅ Complete |
| 02 — Variables | 1 exercise | ✅ Complete |
| 03 — Identifiers | 4 exercises | ✅ Complete |
| 04 — Literals | 6 exercises | ✅ Complete |
| 05 — Operators & Data Types | 25 exercises | ✅ Complete |
| 06 — Statements (Conditionals) | 3 exercises | ✅ Complete |
| 07 — Switch Statements | 9 exercises | ✅ Complete |
| 08 — User Input | 4 exercises | ✅ Complete |
| 09 — Loops | 12 exercises | ✅ Complete |
| HackerRank Practice | 2 solutions | ✅ Complete |
| IQ Notes | 7 concept notes | ✅ Complete |
| D2D Notes | 3 day logs + tasks | In Progress |

**Total: 61 code exercises + 7 IQ notes + 4 D2D items**

---

## Quick Reference

- **Run a file:** `node 01_chapter_Javascript/01_HelloWorld.js`
- **Check Node version:** `node --version`
- **VS Code Command Palette:** `Ctrl+Shift+P` (Win) / `Cmd+Shift+P` (Mac)
