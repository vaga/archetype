import Ajv from 'ajv'
import faunadb from 'faunadb'
import { App, inject } from 'vue'
import layersSchema from '../schema.json'

export const PROVIDE_KEY = Symbol('__api__')

const COLLECTION = 'profiles'

const ajv = new Ajv({ allErrors: true })
const validateSchema = ajv.compile({
  type: 'object',
  additionalProperties: false,
  properties: {
    name: {
      type: 'string',
      minLength: 2,
    },
    author: {
      type: 'string',
      minLength: 2,
    },
    layers: layersSchema,
  },
})

export function createAPI(secret: string) {
  const client = new faunadb.Client({
    secret,
  })

  const api = {
    client,
    validate: (profile: any) => {
      const valid = validateSchema(profile)
      if (!valid) {
        console.log(validateSchema.errors)
      }
      return valid
    },
    getById: async (id: string) => {
      const response = await client.query(
        faunadb.query.Get(
          faunadb.query.Ref(
           faunadb.query.Collection(COLLECTION),
            id,
          )
        )
      )

      return response.data
    },
    getLatestProfile: async () => {
      const response = await client.query(
        faunadb.query.Map(
          faunadb.query.Paginate(
            faunadb.query.Match(faunadb.query.Index('latest_profiles')),
            { size: 10 },
          ),
          faunadb.query.Lambda(
            ['ts', 'ref'],
            faunadb.query.Get(faunadb.Var('ref')),
          ),
        )
      )

      return response.data
    },
    create: async (profile: any) => {
      const response = await client.query(
        faunadb.query.Create(
          faunadb.query.Collection(COLLECTION),
          { data: profile },
        )
      )

      console.log(response)
      return response
    },
  }

  return {
    install(app: App) {
      app.provide(PROVIDE_KEY, api)
    },
  }
}

export function useAPI() {
  return inject(PROVIDE_KEY)
}
