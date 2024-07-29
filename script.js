const jobForm = document.getElementById('job-form');
const successMessage = document.getElementById('success-message');

jobForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if(!validateName()){
    return;
  }
  if(!validatePhoneNumber()){
    return;
  }

  const formData = new FormData(jobForm);
  fetch('your-server-side-script.php', {
    method: 'POST',
    body: formData
  })

  .then(response => {
    if (response.ok) {
      // Display the success message
      successMessage.style.display = 'block';
      // You might want to clear the form or redirect the user here
    } else {
      // Handle errors (e.g., display an error message)
      console.error('Error submitting data:', response.status);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
});

function validateName(){
  const nameInput = document.getElementById('name');
  if(nameInput.nodeValue.trim()==''){
    alert("Please enter your name.");
    return false;
  }
  return true;
}

function validatePhoneNumber() {
  const phoneNumberInput = document.getElementById('phonenumber');
  const phoneNumber = phoneNumberInput.value.trim();

  // Regular expression to validate phone numbers
  const phoneNumberRegex = /^[0-9]{10}$/;

  if (!phoneNumberRegex.test(phoneNumber)) {
    alert("Please enter a valid 10-digit phone number.");
    return false;
  }

  return true;
}