export default function decorate(block) {
  const form = document.createElement('form');
  form.classList.add('custom');
  const nameLabel = document.createElement('label');
  nameLabel.textContent = 'First Name:';
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.name = 'firstName';
  nameInput.required = true;

  const surnameLabel = document.createElement('label');
  surnameLabel.textContent = 'Last Name:';
  const surnameInput = document.createElement('input');
  surnameInput.type = 'text';
  surnameInput.name = 'lastName';
  surnameInput.required = true;

  const dateLabel = document.createElement('label');
  dateLabel.textContent = 'Date:';
  const dateInput = document.createElement('input');
  dateInput.type = 'date';
  dateInput.name = 'date';
  dateInput.required = true;

  const submitButton = document.createElement('button');
  submitButton.type = 'submit';
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

  console.log('FORM ');
  // Add event listener to the form submit event
  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());
    console.log(formValues);

    // Send the form data to the API endpoint
    fetch('https://main--franklin--stjepanb.hlx.page/form-test.json', {
      mode: 'no-cors',
      method: 'POST',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: formValues }),
    }).then((response) => response.json())
      .then((data) => {
        // Handle the response from the API
        console.log(data);
        // Additional code to handle the response as needed
      })
      .catch((error) => {
        // Handle any errors that occur during the request
        console.error(error);
        // Additional error handling code
      });
  });
}

function constructPayload(form) {
  const payload = {};
  [...form.elements].forEach((fe) => {
    if (fe.type === 'checkbox') {
      if (fe.checked) payload[fe.id] = fe.value;
    } else if (fe.id) {
      payload[fe.id] = fe.value;
    }
  });
  return payload;
}

async function submitForm(form) {
  const payload = constructPayload(form);
  const resp = await fetch(form.dataset.action, {
    method: 'POST',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ data: payload }),
  });
  await resp.text();
  return payload;
}


