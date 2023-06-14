export default function decorate(block) {


  const form = document.createElement('form');

  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'Name:';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'name';
  nameInput.required = true;

  const surnameLabel = document.createElement('label');
  surnameLabel.textContent = 'Surname:';
  const surnameInput = document.createElement('input');
  surnameInput.type = 'text';
  surnameInput.name = 'surname';
  surnameInput.required = true;

  const dateLabel = document.createElement('label');
  dateLabel.textContent = 'Date:';
  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.name = 'date';
  dateInput.required = true;

  const submitButton = document.createElement('button');
  submitButton.type = 'button';
  submitButton.textContent = 'Submit';

  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(surnameLabel);
  form.appendChild(surnameInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(dateLabel);
  form.appendChild(dateInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(submitButton);

  block.appendChild(form);

  // Add event listener to the form submit event
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    // Send the form data to the API endpoint
    fetch('https://admin.hlx.page/form/stjepanb/franklin/color/form-test.json', {
      method: 'POST',
      body: JSON.stringify(formValues),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle the response from the API
        console.log(data);
        // Additional code to handle the response as needed
      })
      .catch(error => {
        // Handle any errors that occur during the request
        console.error(error);
        // Additional error handling code
      });
  });


}
