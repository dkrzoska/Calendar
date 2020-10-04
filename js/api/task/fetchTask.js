export const getTasks = successCallback => {
  fetch(`http://localhost:3000/tasks`)
    .then(r => r.json())
    .then(alltasks => {
      if (alltasks.error === false && typeof successCallback === "function") {
        successCallback(alltasks);
      }
    })
    .catch(err => console.log(err));
};
// const fetchAllCars = () => {
//   fetch('http://localhost:3000/cars')
//     .then(resp => resp.json())
//     .then(allcars => setCar(allcars))
// }

// const addCar = (addnewcar) => {
//   fetch(`http://localhost:3000/cars/`, {
//     method: "POST",
//     body: JSON.stringify(addnewcar),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   }).then(fetchAllCars)
// }

// const deleteCar = (id) => {
//   fetch(`http://localhost:3000/cars/${id}`, {
//     method: "DELETE"
//   }).then(fetchAllCars)
// }