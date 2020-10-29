const url = `https://wagon-garage-api.herokuapp.com/vin-diesel-import/cars`;

const list = document.querySelector('.cars-list');
const brand = document.querySelector("#brand");
const model = document.querySelector("#model");
const plate = document.querySelector("#plate");
const owner = document.querySelector("#owner");

const displayCars = (data) => {
  list.innerHTML = "";
  data.forEach((car) => {
    list.insertAdjacentHTML('beforeend',
      `<div class="car">
        <div class="car-image">
          <img src="http://loremflickr.com/280/280/${car.brand} ${car.model}" />
        </div>
        <div class="car-info">
          <h4>${car.brand} ${car.model}</h4>
          <p><strong>Owner:</strong> ${car.owner}</p>
          <p><strong>Plate:</strong> ${car.plate}</p>
        </div>
      </div>`
    );
  });
};


const getCars = () => {
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      displayCars(data);
      console.log(data);
    });
};

const postCar = (event) => {
  event.preventDefault();
  // 3. POST car info on the API
  console.log(brand.value);
  fetch(url, {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      brand: brand.value,
      model: model.value,
      owner: owner.value,
      plate: plate.value
    })
  })
    .then(response => response.json())
    .then(data => console.log(data));
  // 4. Call getCars!
  getCars();
};

export { postCar, getCars };
