import { API_KEY, API_URL } from "../consts";

export const getOperations = (successCallback, id) => {
    fetch(`${API_URL}/tasks/${id}/operations`, {
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