var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch(
  "https://api.checkcardetails.co.uk/vehicledata/vehicleregistration?apikey=157be19933d191db7628a7a7afa10bc9&vrm=EA67AMX",
  requestOptions
)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
console.log(result);
