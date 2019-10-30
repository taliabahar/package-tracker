const apiHost = () => {}; // No-op in our mock version.

const getPackageCoordinates = () =>
  Promise.resolve({
    features: [
      {
        relevance: 1,
        id: "place.13221763293930070",
        type: "Feature",
        geometry: {
          coordinates: [-77.6742, 38.1881],
          type: "Point"
        },
        place_name: "Spotsylvania, Virginia, United States",
        context: [
          {
            short_code: "US-VA",
            id: "region.16625906770758790",
            text: "Virginia",
            wikidata: "Q1370"
          },
          {
            short_code: "us",
            text: "United States",
            id: "country.9053006287256050",
            wikidata: "Q30"
          }
        ],
        place_type: ["place"],
        text: "Spotsylvania",
        bbox: [
          -77.8897306561107,
          38.0338122765862,
          -77.5060290771109,
          38.3606000197431
        ],
        center: [-77.6742, 38.1881],
        properties: {
          wikidata: "Q506202"
        }
      },
      {
        context: [
          {
            id: "postcode.16019047676823160",
            text: "22408"
          },
          {
            text: "Fredericksburg",
            id: "place.16544611768116090",
            wikidata: "Q492342"
          },
          {
            short_code: "US-VA",
            wikidata: "Q1370",
            text: "Virginia",
            id: "region.16625906770758790"
          },
          {
            short_code: "us",
            id: "country.9053006287256050",
            text: "United States",
            wikidata: "Q30"
          }
        ],
        place_type: ["poi"],
        relevance: 1,
        type: "Feature",
        id: "poi.2138893740698",
        place_name:
          "Spotsylvania Regional Medical Center, 4600 Spotsylvania Pkwy, Fredericksburg, Virginia 22408, United States",
        geometry: {
          type: "Point",
          coordinates: [-77.495776, 38.2172315]
        },
        properties: {
          wikidata: "Q7580104",
          address: "4600 Spotsylvania Pkwy",
          maki: "hospital",
          landmark: true,
          category: "hospital, clinic, medical center"
        },
        center: [-77.495776, 38.2172315],
        text: "Spotsylvania Regional Medical Center"
      },
      {
        context: [
          {
            text: "Central Park",
            id: "neighborhood.2106793"
          },
          {
            text: "22407",
            id: "postcode.6298719251457770"
          },
          {
            wikidata: "Q492342",
            id: "place.16544611768116090",
            text: "Fredericksburg"
          },
          {
            wikidata: "Q1370",
            text: "Virginia",
            id: "region.16625906770758790",
            short_code: "US-VA"
          },
          {
            id: "country.9053006287256050",
            text: "United States",
            wikidata: "Q30",
            short_code: "us"
          }
        ],
        place_type: ["poi"],
        id: "poi.2851858311822",
        relevance: 1,
        type: "Feature",
        geometry: {
          coordinates: [-77.513251, 38.2923415],
          type: "Point"
        },
        place_name:
          "Spotsylvania Towne Centre, 137 Spotsylvania Mall, Fredericksburg, Virginia 22407, United States",
        center: [-77.513251, 38.2923415],
        properties: {
          category: "mall, shop",
          landmark: true,
          address: "137 Spotsylvania Mall",
          wikidata: "Q7580106"
        },
        text: "Spotsylvania Towne Centre"
      },
      {
        properties: {
          address: "6915 Courthouse Rd",
          landmark: true,
          category:
            "college football stadium, football, college, college football, stadium, leisure",
          wikidata: "Q7580103"
        },
        center: [-77.653257, 38.1600665],
        text: "Spotsylvania High School",
        context: [
          {
            text: "22551",
            id: "postcode.11203577791022970"
          },
          {
            id: "place.13221763293930070",
            text: "Spotsylvania",
            wikidata: "Q506202"
          },
          {
            text: "Virginia",
            id: "region.16625906770758790",
            wikidata: "Q1370",
            short_code: "US-VA"
          },
          {
            text: "United States",
            id: "country.9053006287256050",
            wikidata: "Q30",
            short_code: "us"
          }
        ],
        place_type: ["poi"],
        id: "poi.2637109946806",
        type: "Feature",
        relevance: 1,
        place_name:
          "Spotsylvania High School, 6915 Courthouse Rd, Spotsylvania, Virginia 22551, United States",
        geometry: {
          coordinates: [-77.653257, 38.1600665],
          type: "Point"
        }
      },
      {
        place_type: ["poi"],
        context: [
          {
            id: "postcode.7747569549960250",
            text: "22553"
          },
          {
            id: "place.13221763293930070",
            text: "Spotsylvania",
            wikidata: "Q506202"
          },
          {
            short_code: "US-VA",
            wikidata: "Q1370",
            text: "Virginia",
            id: "region.16625906770758790"
          },
          {
            short_code: "us",
            text: "United States",
            id: "country.9053006287256050",
            wikidata: "Q30"
          }
        ],
        geometry: {
          coordinates: [-77.602615, 38.219537],
          type: "Point"
        },
        place_name:
          "Spotsylvania Courthouse Battlefield, 9550 West Grant Dr, Spotsylvania, Virginia 22553, United States",
        id: "poi.1520418423248",
        type: "Feature",
        relevance: 1,
        center: [-77.602615, 38.219537],
        properties: {
          address: "9550 West Grant Dr",
          landmark: true,
          category: "historic site, historic"
        },
        text: "Spotsylvania Courthouse Battlefield"
      }
    ]
  });

export { apiHost, getPackageCoordinates };
