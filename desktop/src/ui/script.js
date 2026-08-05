// CursorMouse Desktop UI




const statusElement = document.getElementById("status");

const pairCodeElement = document.getElementById("pair-code");

const deviceElement = document.getElementById("device");

// Generate Random 6 Digit Pair Code

function generatePairCode() {
  return Math.floor(100000 + Math.random() * 900000).toString();

}

// Update Pair Code


function updatePairCode() {
  const code = generatePairCode();
  pairCodeElement.textContent = code;
}

// Update Status

function updateStatus(status) {
  statusElement.textContent = status;
}


// Update Connected Device

function updateDevice(deviceName) {

    deviceElement.textContent = deviceName;
}


// Initialize UI
function initializeApp() {

    updatePairCode();
  updateStatus("🟢 Running");

  updateDevice("No Device Connected");
}

// Start App


initializeApp();