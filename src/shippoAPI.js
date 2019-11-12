const apiHost = () => {}; // No-op in our mock version.

const trackPackage = () =>
  Promise.resolve({
    data: [
      {
        carrier: "usps",
        tracking_number: "9205590164917312751089",
        address_from: {
          city: "Las Vegas",
          state: "NV",
          zip: "89101",
          country: "US"
        },
        address_to: {
          city: "Spotsylvania",
          state: "VA",
          zip: "22551",
          country: "US"
        },
        transaction: "1275c67d754f45bf9d6e4d7a3e205314",
        eta: "2016-07-23T00:00:00Z",
        original_eta: "2016-07-23T00:00:00Z",
        servicelevel: {
          token: "usps_priority",
          name: "Priority Mail"
        },
        metadata: null,
        tracking_status: {
          object_created: "2016-07-23T20:35:26.129Z",
          object_updated: "2016-07-23T20:35:26.129Z",
          object_id: "ce48ff3d52a34e91b77aa98370182624",
          status: "DELIVERED",
          status_details:
            "Your shipment has been delivered at the destination mailbox.",
          status_date: "2016-07-23T13:03:00Z",
          location: {
            city: "Spotsylvania",
            state: "VA",
            zip: "22551",
            country: "US"
          }
        },
        tracking_history: [
          {
            object_created: "2016-07-22T14:36:50.943Z",
            object_id: "265c7a7c23354da5b87b2bf52656c625",
            status: "TRANSIT",
            status_details: "Your shipment has been accepted.",
            status_date: "2016-07-21T15:33:00Z",
            location: {
              city: "Las Vegas",
              state: "NV",
              zip: "89101",
              country: "US"
            }
          },
          {
            object_created: "2016-07-23T20:35:26.129Z",
            object_id: "aab1d7c0559d43ccbba4ff8603089e56",
            status: "DELIVERED",
            status_details:
              "Your shipment has been delivered at the destination mailbox.",
            status_date: "2016-07-23T13:03:00Z",
            location: {
              city: "Spotsylvania",
              state: "VA",
              zip: "22551",
              country: "US"
            }
          }
        ]
      }
    ]
  });

export { apiHost, trackPackage };
