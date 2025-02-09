#!/usr/bin/env node
import {readFile} from 'fs/promises'
import isEqual from 'lodash/isEqual.js'
import mapValues from 'lodash/mapValues.js'
import {load} from 'js-yaml'

const apis = [
  './spec/public-api/platform.yaml',
  './spec/public-api/platform-tags.yaml',
  './spec/public-api/platform-experimental.yaml',
  './spec/public-api/platform-containers.yaml',
  './spec/public-api/platform-containers-experimental.yaml',
  './spec/public-api/platform-items-bulk.yaml',
  './spec/enterprise/enterprise-teams.yaml',
  './spec/enterprise/enterprise-organizations.yaml',
  './spec/enterprise/enterprise-board-classification.yaml',
  './spec/enterprise/enterprise-board-export.yaml',
  './spec/enterprise/enterprise-projects.yaml',
]

const baseSpecification = {
  openapi: '3.0.1',
  info: {
    description: 'Miro API',
    title: 'Miro API',
    version: '0.1',
  },
  servers: [{url: 'https://api.miro.com/'}],
  paths: {
    // revoke endpoint is missing from openapi specification generated by backend,
    // we might want to add this to backend in the future
    '/v1/oauth/revoke': {
      post: {
        tags: ['tokens'],
        summary: 'Revoke token',
        description:
          'Revoke the current access token. Revoking an access token means that the access token will no longer work. When an access token is revoked, the refresh token is also revoked and no longer valid. This does not uninstall the application for the user.',

        operationId: 'revoke-token',
        parameters: [
          {
            description: 'Access token that you want to revoke',
            in: 'query',
            name: 'access_token',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          204: {
            description: 'Token revoked',
          },
          400: {
            description: 'Failed to revoke token',
          },
        },
      },
    },

    '/v1/oauth-token': {
      get: {
        tags: ['tokens'],
        summary: 'Get access token information',
        description:
          'Get information about an access token, such as the token type, scopes, team, user, token creation date and time, and the user who created the token.',

        operationId: 'token-info',
        responses: {
          200: {
            description: 'Token information',
            content: {
              'application/json': {
                schema: {
                  title: 'Token information',
                  type: 'object',
                  required: ['type', 'team', 'createdBy', 'user'],
                  properties: {
                    type: {type: 'string'},
                    organization: {
                      title: 'Organization information',
                      type: 'object',
                      properties: {
                        type: {type: 'string'},
                        name: {type: 'string'},
                        id: {type: 'string'},
                      },
                      required: ['type', 'name', 'id'],
                    },
                    team: {
                      title: 'Team information',
                      type: 'object',
                      properties: {
                        type: {type: 'string'},
                        name: {type: 'string'},
                        id: {type: 'string'},
                      },
                      required: ['type', 'name', 'id'],
                    },
                    createdBy: {
                      type: 'object',
                      title: 'User information',
                      properties: {
                        type: {type: 'string'},
                        name: {type: 'string'},
                        id: {type: 'string'},
                      },
                      required: ['type', 'name', 'id'],
                    },
                    user: {
                      type: 'object',
                      title: 'User information',
                      properties: {
                        type: {type: 'string'},
                        name: {type: 'string'},
                        id: {type: 'string'},
                      },
                      required: ['type', 'name', 'id'],
                    },
                    scopes: {
                      type: 'array',
                      items: {
                        type: 'string',
                      },
                    },
                  },
                },
              },
            },
          },
          400: {
            description: 'Invalid token provided',
          },
        },
      },
    },
  },
  components: {
    schemas: {},
    parameters: {},
    securitySchemes: {
      // define standard OAuth2 endpoints and scopes
      oAuth2AuthCode: {
        type: 'oauth2',
        description:
          'For more information, see https://developers.miro.com/reference/authorization-flow-for-expiring-tokens',
        flows: {
          authorizationCode: {
            authorizationUrl: 'https://miro.com/oauth/authorize',
            tokenUrl: 'https://api.miro.com/v1/oauth/token',
            scopes: {
              'boards:read': 'Retrieve information about boards, board members, or items',
              'boards:write': 'Create, update, or delete boards, board members, or items',
              'microphone:listen': "Access a user's microphone to record audio in an iFrame",
              'screen:record': "Access a user's screen to record it in an iFrame",
              'webcam:record': "Allows an iFrame to access a user's camera to record video",
              'organizations:read':
                'Read information about the organization, such as name, plan, number of licenses, organization settings, or organization members.',
              'organizations:teams:read':
                'Read team information, such as the list of teams, team settings, team members, for an organization.',
              'organizations:teams:write':
                'Create or delete teams, update team information, team settings, team members, for an organization.',
            },
          },
        },
      },
    },
  },
}

async function getSpecsForApi(fileName) {
  return load(await readFile(fileName, {encoding: 'utf8'}))
}

const specs = (await Promise.all(apis.map(getSpecsForApi))).flat()

function mergeWithoutConflict(first, second) {
  for (const key of Object.keys(first)) {
    if (second[key] && !isEqual(first[key], second[key])) throw new Error('Conflict: ' + key)
  }
  return {
    ...first,
    ...second,
  }
}

function fixDescriptionLinks(spec) {
  spec.paths = mapValues(spec.paths, (path) => {
    return mapValues(path, (method) => {
      if (!method.description) return method
      // correct
      method.description = method.description
        .replace(/target="_?blank"/gi, 'target=_blank')
        .replace(/href="([a-z/]+)"/gi, 'href=https://developers.miro.com$1')
      return method
    })
  })
  return spec
}

const mergedSpec = fixDescriptionLinks(
  specs.reduce((acc, spec) => {
    const specTitle = spec.info?.title?.replace(/ |\(|\)/g, '')
    const specSchemasDef = spec.components?.schemas || {}
    const specParametersDef = spec.components?.parameters || {}

    let specPathsDef = spec.paths

    for (const key of Object.keys(specSchemasDef)) {
      const existingDefinition = acc.components.schemas[key]
      delete acc.components.schemas[key]
      let newSchema = specSchemasDef[key]
      let newKey = key
      if (existingDefinition && isEqual(existingDefinition, newSchema)) {
        newKey = `${key}${specTitle}`
        specPathsDef = JSON.parse(
          JSON.stringify(specPathsDef).replaceAll(`"#/components/schemas/${key}"`, `"#/components/schemas/${newKey}"`),
        )
      }
      acc.components.schemas[newKey] = newSchema
    }

    for (const key of Object.keys(specParametersDef)) {
      const existingDefinition = acc.components.parameters[key]
      delete acc.components.parameters[key]
      let newSchema = specParametersDef[key]
      let newKey = key
      if (existingDefinition && isEqual(existingDefinition, newSchema)) {
        newKey = `${key}${specTitle}`
        specPathsDef = JSON.parse(
          JSON.stringify(specPathsDef).replaceAll(`"#/components/parameters/${key}"`, `"#/components/parameters/${newKey}"`),
        )
      }
      acc.components.parameters[newKey] = newSchema
    }

    for (const key of Object.keys(spec.paths)) {
      if (acc.paths[key]) {
        const newKey = key.replace('boards/{board_id', 'boards/{board_id_' + specTitle)
        const pathConfig = JSON.parse(JSON.stringify(spec.paths[key]).replaceAll('board_id', 'board_id_' + specTitle))
        delete spec.paths[key]
        spec.paths[newKey] = pathConfig
      }
    }

    return {
      ...acc,
      paths: mergeWithoutConflict(acc.paths, spec.paths),
      components: {
        ...acc.components,
        schemas: mergeWithoutConflict(acc.components.schemas, specSchemasDef),
        parameters: {...acc.components.parameters, ...specParametersDef},
      },
    }
  }, baseSpecification),
)

console.log(JSON.stringify(mergedSpec, null, 2))
