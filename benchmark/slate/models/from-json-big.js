/* eslint-disable react/jsx-key */

const { Value } = require('@gitbook/slate')

module.exports.default = function(json) {
  Value.fromJS(json)
}

const input = {
  document: {
    nodes: Array.from(Array(100)).map(() => ({
      type: 'list',
      object: 'block',
      isVoid: false,
      data: {},
      nodes: Array.from(Array(10)).map(() => ({
        type: 'list-item',
        object: 'block',
        isVoid: false,
        data: {},
        nodes: [
          {
            leaves: [
              {
                object: 'leaf',
                marks: [],
                text: '',
              },
            ],
            object: 'text',
          },
          {
            type: 'link',
            object: 'inline',
            isVoid: false,
            data: {
              id: 1,
            },
            nodes: [
              {
                leaves: [
                  {
                    object: 'leaf',
                    marks: [],
                    text: 'Some text for a link',
                  },
                ],
                object: 'text',
              },
            ],
          },
          {
            leaves: [
              {
                object: 'leaf',
                marks: [],
                text: '',
              },
            ],
            object: 'text',
          },
        ],
      })),
    })),
  },
}

module.exports.input = function() {
  return input
}
