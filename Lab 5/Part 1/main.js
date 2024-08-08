// functionality for showing/hiding the comments section
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Initially hide the comments section
commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
  if(commentWrapper.style.display === 'none') {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
  }
};
  
// functionality for adding a new comment via the comments form
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.onsubmit = function(e) {
  e.preventDefault();
  
  // Create new list item for comment
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');
  
  // Set content for the new comment
  namePara.textContent = `Author: ${nameField.value}`;
  commentPara.textContent = `Comment: ${commentField.value}`;
  
  // Add the comment to the list
  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);
  
  // Clear the input fields
  nameField.value = '';
  commentField.value = '';
};

// Control transcript display
const transcript = document.querySelector('.transcript');
const transcriptBtn = document.querySelector('.transcript-container button');

transcriptBtn.onclick = function() {
  if(transcript.style.height === '0px' || transcript.style.height === '') {
    transcript.style.height = '150px';
    transcriptBtn.textContent = 'Hide transcript';
  } else {
    transcript.style.height = '0';
    transcriptBtn.textContent = 'Show transcript';
  }
};

// Enable "Show comments" button activation with Enter/Return key
showHideBtn.onkeydown = function(e) {
  if(e.key === "Enter") {
    showHideBtn.click();
  }
};

// Skip to main content link active styling
const skipToContentLink = document.querySelector("#skip-to-content-link");

skipToContentLink.onfocus = function() {
  skipToContentLink.classList.toggle("skip-to-content-link-visible");
};
