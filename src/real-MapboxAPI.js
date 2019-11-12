// https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoidGFsaWFiYWhhciIsImEiOiJjazBpdDlvd3gwM2xwM2VzYm44amlzMW9yIn0.lmHtTTHzPH5uaejyDcn_1A"
// token
// pass in city and country from the Shippo Api to here

let api = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
let access_token =
  "pk.eyJ1IjoidGFsaWFiYWhhciIsImEiOiJjazBpdDlvd3gwM2xwM2VzYm44amlzMW9yIn0.lmHtTTHzPH5uaejyDcn_1A";

const apiHost = host => {
  api = host;
};

const urlFor = resource => `${api}${resource}`;

const HTTP_OK = 200;

const throwResponseError = response => {
  const error = new Error(response.statusText);
  error.response = response;
  throw error;
};

const emitNativeError = error => {
  throw error;
};

const statusCheck = successStatuses => response => {
  if (successStatuses.includes(response.status)) {
    return response;
  } else {
    throwResponseError(response);
  }
};

const okCheck = statusCheck([HTTP_OK]);

const headers = {
  "Content-Type": "application/json",
  Authorization: `ShippoToken ${access_token}`
};

// GET
const query = resource =>
  fetch(`${urlFor(resource)}`, {
    headers
  })
    .then(okCheck, emitNativeError)
    .then(response => response.json());

function replaceSpacesInCity(packageCityName) {
  packageCityName.replace(/ /g, "%20");
}

const getPackageCoordinates = (packageCity, packageCountry) =>
  query(
    `${replaceSpacesInCity(
      packageCity
    )}.json?country=${packageCountry}&access_token=${access_token}`
  );

// const searchGifs = params => query("gifs/search", params);

export { apiHost, getPackageCoordinates };
