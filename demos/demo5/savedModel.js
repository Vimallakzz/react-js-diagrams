export const model = {
  'id': 'f0877895-37b6-4173-aa47-9f8e38f4af64',
  'offsetX': 0,
  'offsetY': 0,
  'zoom': 100,
  'links': [
    {
      'id': 'b7177a29-9235-4fec-94a8-95459a8d574f',
      '_class': 'WhiteLinkModel',
      'selected': false,
      'type': 'white',
      'source': 'ddbe387d-e22a-491d-87f6-527d589ec0c3',
      'sourcePort': '185f7794-4745-42d2-97fb-ce28ff731e7a',
      'target': '397b4892-fcf9-4c57-b581-2d5534c76390',
      'targetPort': '599c5b0b-b00d-4596-a8b5-420fa6d231c6',
      'points': [
        {
          'id': 'd9f0d5b3-047a-43cd-9bf5-f08350f117e9',
          '_class': 'PointModel',
          'selected': false,
          'x': 166.53125,
          'y': 175.5
        },
        {
          'id': 'd40f87c7-875f-4d12-a89d-130c081f9504',
          '_class': 'PointModel',
          'selected': false,
          'x': 375.5,
          'y': 126.5
        }
      ],
      'extras': {}
    },
    {
      'id': 'fb8bfe07-d954-4d69-8ea3-0cfd16ba7d62',
      '_class': 'WhiteLinkModel',
      'selected': false,
      'type': 'white',
      'source': 'ddbe387d-e22a-491d-87f6-527d589ec0c3',
      'sourcePort': '185f7794-4745-42d2-97fb-ce28ff731e7a',
      'target': '2c5a73fe-f264-4683-a69a-6920e6ad7396',
      'targetPort': 'b98f22fa-4399-4bab-acfe-7482e040deb7',
      'points': [
        {
          'id': '777e96ec-9d5b-4193-9c9a-96805659bc14',
          '_class': 'PointModel',
          'selected': false,
          'x': 166.53125,
          'y': 175.5
        },
        {
          'id': '07040d60-8382-4c6b-9a0e-34b0d3716d9a',
          '_class': 'PointModel',
          'selected': false,
          'x': 377.5,
          'y': 229.5
        }
      ],
      'extras': {}
    },
    {
      'id': 'ef72b9c4-0996-4b9b-922c-161df38c211e',
      '_class': 'WhiteLinkModel',
      'selected': false,
      'type': 'white',
      'source': '397b4892-fcf9-4c57-b581-2d5534c76390',
      'sourcePort': '7687a311-a277-4e6a-91f8-eb63e8bb0382',
      'target': '7e857cfa-362a-4a54-86a0-0fc7eebe728d',
      'targetPort': 'f9914b30-a3e3-4f92-836e-d57e1e19a300',
      'points': [
        {
          'id': '8b7607f6-fe18-49a4-a16e-5a65c65f3952',
          '_class': 'PointModel',
          'selected': false,
          'x': 474.171875,
          'y': 126.5
        },
        {
          'id': 'a6d62df0-1fdb-46bf-b115-e0c9efde7622',
          '_class': 'PointModel',
          'selected': false,
          'x': 688.5,
          'y': 169.5
        }
      ],
      'extras': {}
    },
    {
      'id': 'fe0e111a-63c2-4c6d-9fd9-6a7ee576a49e',
      '_class': 'WhiteLinkModel',
      'selected': false,
      'type': 'white',
      'source': '2c5a73fe-f264-4683-a69a-6920e6ad7396',
      'sourcePort': '1a110824-e64f-4766-bafb-d2983e5abad9',
      'target': '7e857cfa-362a-4a54-86a0-0fc7eebe728d',
      'targetPort': 'f9914b30-a3e3-4f92-836e-d57e1e19a300',
      'points': [
        {
          'id': '4059965b-d594-47b8-8b6a-4397d6d8267d',
          '_class': 'PointModel',
          'selected': false,
          'x': 476.171875,
          'y': 229.5
        },
        {
          'id': '1b212800-6767-440e-b12e-21095f2d81e2',
          '_class': 'PointModel',
          'selected': false,
          'x': 688.5,
          'y': 169.5
        }
      ],
      'extras': {}
    }
  ],
  'nodes': [
    {
      'id': '397b4892-fcf9-4c57-b581-2d5534c76390',
      '_class': 'ConnectionNodeModel',
      'selected': false,
      'type': 'connection',
      'x': 366,
      'y': 94,
      'extras': {},
      'ports': [
        {
          'id': '7687a311-a277-4e6a-91f8-eb63e8bb0382',
          '_class': 'DefaultPortModel',
          'selected': false,
          'name': 'output',
          'parentNode': '397b4892-fcf9-4c57-b581-2d5534c76390',
          'links': [
            'ef72b9c4-0996-4b9b-922c-161df38c211e'
          ],
          'in': false,
          'label': 'Out'
        },
        {
          'id': '599c5b0b-b00d-4596-a8b5-420fa6d231c6',
          '_class': 'DefaultPortModel',
          'selected': false,
          'name': 'input',
          'parentNode': '397b4892-fcf9-4c57-b581-2d5534c76390',
          'links': [
            'b7177a29-9235-4fec-94a8-95459a8d574f'
          ],
          'in': true,
          'label': 'In'
        }
      ],
      'name': 'Connection Node',
      'color': 'rgb(224, 98, 20)'
    },
    {
      'id': 'ddbe387d-e22a-491d-87f6-527d589ec0c3',
      '_class': 'OutputNodeModel',
      'selected': false,
      'type': 'output',
      'x': 81,
      'y': 143,
      'extras': {},
      'ports': [
        {
          'id': '185f7794-4745-42d2-97fb-ce28ff731e7a',
          '_class': 'DefaultPortModel',
          'selected': false,
          'name': 'output',
          'parentNode': 'ddbe387d-e22a-491d-87f6-527d589ec0c3',
          'links': [
            'b7177a29-9235-4fec-94a8-95459a8d574f',
            'fb8bfe07-d954-4d69-8ea3-0cfd16ba7d62'
          ],
          'in': false,
          'label': 'Out'
        }
      ],
      'name': 'Output Node',
      'color': 'rgb(0, 192, 255)'
    },
    {
      'id': '2c5a73fe-f264-4683-a69a-6920e6ad7396',
      '_class': 'ConnectionNodeModel',
      'selected': false,
      'type': 'connection',
      'x': 368,
      'y': 197,
      'extras': {},
      'ports': [
        {
          'id': '1a110824-e64f-4766-bafb-d2983e5abad9',
          '_class': 'DefaultPortModel',
          'selected': false,
          'name': 'output',
          'parentNode': '2c5a73fe-f264-4683-a69a-6920e6ad7396',
          'links': [
            'fe0e111a-63c2-4c6d-9fd9-6a7ee576a49e'
          ],
          'in': false,
          'label': 'Out'
        },
        {
          'id': 'b98f22fa-4399-4bab-acfe-7482e040deb7',
          '_class': 'DefaultPortModel',
          'selected': false,
          'name': 'input',
          'parentNode': '2c5a73fe-f264-4683-a69a-6920e6ad7396',
          'links': [
            'fb8bfe07-d954-4d69-8ea3-0cfd16ba7d62'
          ],
          'in': true,
          'label': 'In'
        }
      ],
      'name': 'Connection Node',
      'color': 'rgb(157, 13, 193)'
    },
    {
      'id': '7e857cfa-362a-4a54-86a0-0fc7eebe728d',
      '_class': 'InputNodeModel',
      'selected': false,
      'type': 'input',
      'x': 679,
      'y': 137,
      'extras': {},
      'ports': [
        {
          'id': 'f9914b30-a3e3-4f92-836e-d57e1e19a300',
          '_class': 'DefaultPortModel',
          'selected': false,
          'name': 'input',
          'parentNode': '7e857cfa-362a-4a54-86a0-0fc7eebe728d',
          'links': [
            'ef72b9c4-0996-4b9b-922c-161df38c211e',
            'fe0e111a-63c2-4c6d-9fd9-6a7ee576a49e'
          ],
          'in': true,
          'label': 'In'
        }
      ],
      'name': 'Input Node',
      'color': 'rgb(192, 255, 0)'
    }
  ]
};
