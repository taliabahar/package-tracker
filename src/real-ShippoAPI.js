let api = "http://localhost:4001";
// let api ="https://api.goshippo.com/tracks";
let token = "shippo_live_86a6e7f9c14602f48795458e72c63be61d5dc508";

const queryStringify = (obj, prefix) => {
  var pairs = [];
  for (var key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
      continue;
    }

    var value = obj[key];
    var enkey = encodeURIComponent(key);
    var pair;
    if (typeof value === "object") {
      pair = queryStringify(value, prefix ? prefix + "[" + enkey + "]" : enkey);
    } else {
      pair =
        (prefix ? prefix + "[" + enkey + "]" : enkey) +
        "=" +
        encodeURIComponent(value);
    }
    pairs.push(pair);
  }
  return pairs.join("&");
};

const apiHost = host => {
  api = host;
};

const urlFor = resource => `${api}${resource}`;

const HTTP_OK = 200;
const HTTP_CREATED = 201;

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

const postPackageWebhooks = (carrierData, trackingNumberData) =>
  fetch(`${api}/`, {
    method: "POST",
    headers: POSTheaders,
    body: queryStringify({
      carrier: `${carrierData}`,
      tracking_number: `${trackingNumberData}`
    })
  })
    .then(statusCheck([HTTP_CREATED]), emitNativeError)
    .then(response => response.json());

const GETheaders = {
  // "Content-Type": "application/json",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  // "Access-Control-Allow-Headers":
  //   'Content-Type, Access-Control-Allow-Headers, Authorization,  "Content-Type": "application/json"',
  "Access-Control-Allow-Headers": "*",
  Authorization: `ShippoToken ${token}`
};

const queryGET = resource =>
  fetch(`${urlFor(resource)}`, {
    method: "GET",
    headers: GETheaders
  })
    .then(okCheck, emitNativeError)
    .then(response => response.json());

const getTrackingStatus = (carrier, trackingNumber) =>
  queryGET(`/${carrier}/${trackingNumber}`);

export { apiHost, getTrackingStatus, postPackageWebhooks };

// POST
// https://api.goshippo.com/tracks/
// GET
// https://api.goshippo.com/tracks/<CARRIER>/<TRACKING NUMBER>/
