import { API_KEY, API_URL } from "../consts";

export const getTasks = successCallback => {
  fetch(`${API_URL}/tasks`, {
    headers: {
      "Authorization": API_KEY
    }
  })
    .then(r => r.json())
    .then(data => {
      if (data.error === false && typeof successCallback === "function") {
        successCallback(data.data);
      }
    })
    .catch(err => console.log(err));
};

const fetchAllCars = () => {
  fetch('http://localhost:3000/cars')
    .then(resp => resp.json())
    .then(allcars => setCar(allcars))
}

const addCar = (addnewcar) => {
  fetch(`http://localhost:3000/cars/`, {
    method: "POST",
    body: JSON.stringify(addnewcar),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(fetchAllCars)
}

const deleteCar = (id) => {
  fetch(`http://localhost:3000/cars/${id}`, {
    method: "DELETE"
  }).then(fetchAllCars)
}