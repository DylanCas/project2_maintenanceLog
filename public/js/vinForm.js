const newFormHandler = async (event) => {
    event.preventDefault();
  
    const make = document.querySelector('#vehicle-make').value.trim();
    const model = document.querySelector('#vehicle-model').value.trim();
    const year = document.querySelector('#vehicle-year').value.trim();
    const mileage = document.querySelector('#vehicle-mileage').value.trim();
  
    if (make && model && year && mileage) {
      const response = await fetch(`/api/vehicles`, {
        method: 'POST',
        body: JSON.stringify({ make, model, year, mileage }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create vehicle');
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/vehicles/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/homepage');
      } else {
        alert('Failed to delete project');
      }
    }
  };
  

  
  document
    .querySelector('.new-vehicle-form')
    .addEventListener('submit', newFormHandler);
    document
    .querySelector('.vehicle-list')
    .addEventListener('click', delButtonHandler);
  