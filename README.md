# ClockClock24

A browser-based tribute to [Human Since 1982's CC24](https://www.humanssince1982.com/the-clock-clock-24) — a kinetic art piece that displays time using a 4×6 grid of analog clock faces, where the hands rotate together to form each digit.

**[Live Demo →](#)**

---

## Overview

The original CC24 is a physical installation sold at MoMA. Each digit of the time (HH:MM) is rendered by a 2×3 cluster of analog clocks. The hands of all 24 clocks move in choreographed unison to transition between digits every minute.

This project replicates that mechanic in the browser using only HTML, CSS, and vanilla JavaScript — no libraries, no canvas, no SVG.

---

## How it works

Every digit (0–9) is encoded as a set of rotation values for 6 clock faces arranged in a 2-column, 3-row grid. Each clock has two hands (hour and minute), giving 12 degrees of freedom per digit.

```
[ clock_one  ]  [ clock_two  ]
[ clock_three]  [ clock_four ]
[ clock_five ]  [ clock_six  ]
```

At runtime, JavaScript reads the current time, maps each of the 4 digits (H, H, M, M) to its hand configuration, and applies `transform: rotate(Xdeg)` to every hand. A `setInterval` running at 500ms keeps the display in sync.

**Example — rendering the digit `0`:**
```js
setClockHands(clockOne,   90,   0);   // top-left
setClockHands(clockThree, 90, 270);   // middle-left
setClockHands(clockFive, 270,   0);   // bottom-left
setClockHands(clockTwo,   90, 180);   // top-right
setClockHands(clockFour,  90, 270);   // middle-right
setClockHands(clockSix,  270, 180);   // bottom-right
```

Each digit required manually plotting which angles, across which clocks, produce a recognizable numeral silhouette — an exercise in spatial reasoning and CSS transform coordinates.

---

## Technical highlights

- **CSS `transform-origin`** — clock hands rotate from a fixed pivot point offset from center, replicating the look of a real clock hand pinned at the face center
- **CSS grid layout** — the 4-column digit layout and each 2×3 clock cluster are both built with `display: grid`, no absolute positioning
- **`box-shadow: inset`** — gives each clock face depth without images or gradients
- **Vanilla JS coordinate system** — all 10 digit configurations (0–9) hand-coded as degree pairs; no external animation library
- **Live time sync** — reads `new Date()` every 500ms, separates HH:MM into 4 individual digits, and dispatches to the correct column

---

## Stack

`HTML` `CSS` `Vanilla JavaScript`

No frameworks. No dependencies. No build step — just open `index.html`.

---

## Running locally

```bash
git clone https://github.com/jinhoyon/clockclock24.git
cd clockclock24
open index.html
```

---

## What I learned

This was a deliberate exercise in pushing pure CSS further than I usually would. A few things that came out of it:

- **`transform-origin` is non-intuitive.** Getting hands to rotate from their pin point (not their center) required understanding how the origin interacts with absolute positioning and `left` offsets.
- **Coordinate system design.** Encoding each digit as 12 hand angles required thinking spatially about what the human eye reads as a numeral — not just what's technically correct.
- **Grid as a layout primitive.** Using nested CSS grids (outer 4-column for digits, inner 2×3 for each clock cluster) kept the HTML clean and the layout math predictable.

---

## Inspiration

[Human Since 1982 — The Clock Clock 24](https://www.humanssince1982.com/the-clock-clock-24)
