import { describe, beforeAll, test, expect, expectTypeOf } from 'vitest'

const BEFORE_ALL_TIMEOUT = 10000

describe('Request the api', () => {
  let response: Response
  let body: Array<{ [key: string]: unknown }>

  beforeAll(async () => {
    response = await fetch('http://localhost:3000/products')
    body = await response.json()
  }, BEFORE_ALL_TIMEOUT)

  test('Should be 200', () => {
    expect(response.status).toBe(200)
  })

  test('Should have this fields', () => {
    expect(body.total).toBe(8)
    expect(body.pageSize).toBe(8)
    expect(body.totalPages).toBe(1)
    expect(body.products).not.toBe([])
  })
})
