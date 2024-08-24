// Simulated environment for stopwatch testing

// Import the stopwatch functions from script.js
// (Note: This is pseudocode for testing purposes, assuming script.js is modular)

let testPassed = true;

function assert(condition, message) {
    if (!condition) {
        console.error("Test failed:", message);
        testPassed = false;
    } else {
        console.log("Test passed:", message);
    }
}

function runTests() {
    // Test 1: Start Stopwatch
    startStopwatch();
    assert(isRunning === true, "Stopwatch should be running after start");
    assert(startBtn.textContent === "PAUSE", "Start button should display 'PAUSE'");

    // Simulate 2 seconds passing
    setTimeout(() => {
        assert(time === 2, "Time should increment to 2 seconds after 2 seconds");

        // Test 2: Pause Stopwatch
        startStopwatch();
        assert(isRunning === false, "Stopwatch should be paused");
        assert(startBtn.textContent === "CONTINUE", "Start button should display 'CONTINUE'");

        // Test 3: Continue Stopwatch
        startStopwatch();
        assert(isRunning === true, "Stopwatch should continue running");
        assert(startBtn.textContent === "PAUSE", "Start button should display 'PAUSE'");

        // Simulate 2 more seconds passing
        setTimeout(() => {
            assert(time === 4, "Time should increment to 4 seconds after 4 total seconds");

            // Test 4: Clear Stopwatch
            clearStopwatch();
            assert(time === 0, "Time should reset to 0");
            assert(startBtn.textContent === "START", "Start button should display 'START'");
            assert(isRunning === false, "Stopwatch should not be running");

            // Final Output
            if (testPassed) {
                console.log("All tests passed successfully!");
            } else {
                console.error("Some tests failed. Please review the errors above.");
            }
        }, 2000);
    }, 2000);
}

// Run the tests
runTests();
