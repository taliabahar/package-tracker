// function that specifies what API call to make get or post
// export that function to where I want to show the queries
// make async

// post vs get
// need to pass in carrier and tracking number here or when i call it?
// token

let api = "https://api.goshippo.com/tracks";
let token = "shippo_live_86a6e7f9c14602f48795458e72c63be61d5dc508";

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

const POSTheaders = {
  "Content-Type": "application/x-www-form-urlencoded",
  Authorization: `ShippoToken ${token}`
};

// const postPackageWebhooks = (resource, params) =>
//   fetch(`${api/}`, {
//     method: "POST",
//     POSTheaders
//   })
//     .then(okCheck, emitNativeError)
//     .then(response => response.json());

const GETheaders = {
  "Content-Type": "application/json",
  Authorization: `ShippoToken ${token}`
};

const query = resource =>
  fetch(`${urlFor(resource)}`, {
    method: "GET",
    GETheaders
  })
    .then(okCheck, emitNativeError)
    .then(response => response.json());

const getTrackingStatus = (carrier, trackingNumber) =>
  query(`/${carrier}/${trackingNumber}`);

export { apiHost, getTrackingStatus };

// IS THIS OKAY? ALSO IS IT HOST OR API?
// function getPackageTrackingStatus(carrier, trackingNumber) {
//   const url = `${api}/${encodeURIComponent(carrier)}/${encodeURIComponent(
//     trackingNumber
//   )}`;
//   fetch(url, {
//     method: "GET",
//     GETheaders
//   })
//     .then(okCheck, emitNativeError)
//     .then(response => response.json());
// }

// POST
// https://api.goshippo.com/tracks/
// GET
// https://api.goshippo.com/tracks/<CARRIER>/<TRACKING NUMBER>/
