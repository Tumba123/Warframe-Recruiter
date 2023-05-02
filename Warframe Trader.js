const wtbBtn = document.querySelector('#wtb-btn');
const wtsBtn = document.querySelector('#wts-btn');
const gunTypeSelect = document.querySelector('#gun-type');
const generateBtn = document.querySelector('#generate-btn');
const previewArea = document.querySelector('#preview-area');
const copyBtn = document.querySelector('#copy-btn');

wtbBtn.addEventListener('click', () => {
  const message = generateMessage('WTB');
  previewArea.value = message;
});

wtsBtn.addEventListener('click', () => {
  const message = generateMessage('WTS');
  previewArea.value = message;
});

gunTypeSelect.addEventListener('change', () => {
  const selectedOption = gunTypeSelect.value;
  if (selectedOption) {
    const message = generateMessage(selectedOption);
    previewArea.value = message;
  }
});

generateBtn.addEventListener('click', () => {
  const message = previewArea.value;
  copyBtn.dataset.clipboardText = message;
});

function copyToClipboard() {
  const preview = document.querySelector('#preview');
  const textarea = document.createElement('textarea');
  
  // Set the value of the new textarea to the content of the preview element
  textarea.value = preview.textContent;
  
  document.body.appendChild(textarea);
  
  // Select and copy the contents of textarea
  textarea.select();
  document.execCommand('copy');
  
  document.body.removeChild(textarea);
}

const preview = document.querySelector('#preview');

preview.addEventListener('click', copyToClipboard);

function generateMessage(action) {
  const gunType = gunTypeSelect.value;
  const additionalInfo = document.querySelector('#additional-info').value.trim();
  let message = `${action} | ${gunType}`;
  if (additionalInfo) {
    message += ` ${additionalInfo}`;
  }
  return message;
}
