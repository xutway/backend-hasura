require('dotenv').config();

module.exports = {
  overwrite: true,
  schema: [
    {
      [process.env.HASURA_GRAPHQL_GRAPHQL_URL]: {
        headers: {
          'x-hasura-admin-secret': process.env.HASURA_GRAPHQL_ADMIN_SECRET,
        },
      },
    },
  ],

  documents: 'src/gql/**/*.graphql',
  generates: {
    'src/utils/__generated__/graphql-request.ts': {
      plugins: [
        {
          add: {
            content: [
              '/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */',
            ],
          },
        },
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
    },
  },
};
