const adsData = [
  {
    title: 'Ad 1',
    description: 'This is the first ad',
    image: 'https://via.placeholder.com/150',
    contact: 'contact1@example.se'
  },
  {
    title: 'Ad 2',
    description: 'This is the second ad',
    image: 'https://via.placeholder.com/150',
    contact: 'contact2@example.se'
  },
  {
    title: 'Ad 3',
    description: 'This is the third ad',
    image: 'https://via.placeholder.com/150',
    contact: 'contact3@example.se'
  },
  {
    title: 'Ad 4',
    description: 'This is the fourth ad',
    image: 'https://via.placeholder.com/150',
    contact: 'contact4@example.se'
  },
  {
    title: 'Ad 5',
    description: 'This is the fifth ad',
    image: 'https://via.placeholder.com/150',
    contact: 'contact5@example.se'
  },
  {
    title: 'Ad 6',
    description: 'This is the sixth ad',
    image: 'https://via.placeholder.com/150',
    contact: 'contact6@example.se'
  }

]

// Generate the header for the advertisements page
function generateHeader() {
  const body = document.getElementsByTagName('body')[0];
  const globalContainer = document.createElement('div');
  globalContainer.classList.add('container', 'mt-5');
  // Attach the header to the body
  body.appendChild(globalContainer);

  const h2 = document.createElement('h2');
  h2.classList.add('mb-4');
  h2.textContent = 'Advertisement List';
  // Attach the h2 to the global container
  globalContainer.appendChild(h2);

  const filter = document.createElement('div');
  filter.classList.add('md-3');
  filter.innerHTML = `
  <label for="filterTitle"> Filter by Title: </label>
  <input type="text" class="form-control" id="filterTitle" placeholder="Enter title">
  `
  // Attach the filter to the golbal container
  globalContainer.appendChild(filter);

}

// Call the function to generate the header
generateHeader();

// Generate an ad card
function generateAdCards(adsData) {
  const globalContainer = document.getElementsByClassName('container')[0];
  // Create a div row for the ads.
  const row = document.createElement('div');
  row.classList.add('row');
  row.id = 'advertisements';

  for(const ad of adsData) {
    const adCard = document.createElement('div');

    adCard.classList.add('card', 'mb-4', 'col-md-4');
    adCard.innerHTML = `
    <img class="card-img-top" src="${ad.image}" alt="${ad.title}">
    <div class="card-body">
      <h5 class="card-title"> ${ad.title} </h5>
      <p class="card-text"> ${ad.description} </p>
      <p class="card-text" onclick="alert('Contact: ${ad.contact}')">Contact: ***</p>
    </div>
    <div class="card-footer text-center">
      <button class="btn btn-info btn-block" onclick="alert('Details: Some details about ${ad.title}')"> Details </button>
    </div>
    `
    // Attach the ad card to the row
    row.appendChild(adCard);
  }
  
  // Attach the row to the global container
  globalContainer.appendChild(row);
}

// Call the function to generate the ad cards
generateAdCards(adsData);
