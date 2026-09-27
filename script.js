//your JS code here. If required.
  const speedInput = document.getElementById("speed");
        const text = document.getElementById("text");
        const message = "We love Programming!";
        function runText() {
            // Clear old text
            text.innerText = "";
            // Get speed value
            const speed = Number(speedInput.value);
            // Calculate delay
            const delay = 500 / speed;
            let index = 0;
            const interval = setInterval(function () {
               text.innerText += message[index];
                index++;
               // Stop when all characters are displayed
                if (index === message.length) {
                    clearInterval(interval);
                }

            }, delay);
        }
        // Run when page loads
        runText();
        // Run again when speed changes
        speedInput.addEventListener("input", runText);