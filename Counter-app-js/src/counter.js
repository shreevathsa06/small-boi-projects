// closure-based counter

function createCounter() {
    let count = 0; // private variable

    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => (count = 0),
        getValue: () => count
    };
}

// counter instance

const counter = createCounter();

// UI elements

const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decremetnBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

// update UI functions

function updateDisplay() {
    counterDisplay.textContent = counter.getValue();
}

incrementBtn.addEventListener("click", () => {
    counter.increment();
    updateDisplay();
});

decremetnBtn.addEventListener("click", () => {
    counter.decrement();
    updateDisplay();
});

resetBtn.addEventListener("click", () => {
    counter.reset();
    updateDisplay();
});


