const buttons = document.querySelectorAll('.btn');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});


function addMessage() {
    var hostingTypeButtons = document.querySelectorAll('#hosting-type button.active');
    var missionTypeButtons = document.querySelectorAll('#mission-type button.active');
    var missionLevelButtons = document.querySelectorAll('#mission-level button.active');
  
    var hostingType = "";
    for (var i = 0; i < hostingTypeButtons.length; i++) {
      hostingType += hostingTypeButtons[i].value + "";
    }
  
    var missionType = "";
    for (var i = 0; i < missionTypeButtons.length; i++) {
      missionType += missionTypeButtons[i].value + "|";
    }
  
    var missionLevel = "";
    for (var i = 0; i < missionLevelButtons.length; i++) {
      missionLevel += missionLevelButtons[i].value + "|";
    }
  
    var additionalMessage = document.getElementById("additional-message").value;
    var playersNeeded = document.getElementById("players-needed").value;
  
    var message = hostingType + missionLevel + " " + missionType + " " + additionalMessage + " " + playersNeeded + "/4\n";
  
    var messageBox = document.getElementById("recruitment-messages");
    messageBox.value += message;
  }

  function copyToClipboard() {
    var messageBox = document.getElementById("recruitment-messages");
    var messages = messageBox.value.split('\n');
    var lastMessage = messages[messages.length - 2]; // Get the second last element, as the last element is an empty line

    // Create a temporary textarea to copy the last message
    var tempTextArea = document.createElement("textarea");
    tempTextArea.value = lastMessage;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);

  }