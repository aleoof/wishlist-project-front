import { describe, beforeAll, test, expect, expectTypeOf } from 'vitest'

const BEFORE_ALL_TIMEOUT = 10000

describe('Request the api', () => {
  let response: Response
  let body: { [key: string]: unknown }

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

  test('Products fields are filled', () => {
    body.products.forEach((product) => {
      expect(product.code).not.toBe('')
      expect(product.name).not.toBe('')
      expect(product.available).not.toBe(null)
      expect(product.visible).not.toBe(null)
      expect(product.details.name).not.toBe('')
      expect(product.details.description).not.toBe('')
      expect(product.fullPriceCents).not.toBe('')
      expect(product.salesPriceCents).not.toBe('')
      expect(product.rating).not.toBe(null)
      expect(product.image).not.toBe('')
      expect(product.stockAvailable).not.toBe(null)
    })
  })
})
