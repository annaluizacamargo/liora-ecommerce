import { IProduct } from '@/components/Cards/HomeProductCard/types'
import { slugify } from '@/lib/helpers/String.helper'
import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/products-pagination
 * @param request
 * @returns
 */
export async function POST(request: NextRequest) {
  try {
    const { limit, page, category } = await request.json()

    if (!limit || !page || limit <= 0 || page <= 0) {
      return NextResponse.json({ error: 'Invalid limit or page parameters' }, { status: 400 })
    }

    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}products`
    const response = await fetch(apiUrl, { method: 'GET' })

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch data from the API' }, { status: response.status })
    }

    let data = await response.json()

    if (category && category !== 'nossos-produtos') {
      const filteredData = data.filter((product: IProduct) => slugify(product?.category) === slugify(category))
      data = filteredData
    }

    // MANUAL PAGINATION LOGIC
    const totalItems = data.length
    const startIndex = (page - 1) * limit
    const endIndex = Math.min(startIndex + limit, totalItems)

    if (startIndex >= totalItems) {
      return NextResponse.json({ data: [], finished: true })
    }

    const paginatedData = data.slice(startIndex, endIndex)
    const hasMore = endIndex < totalItems

    return NextResponse.json({ data: paginatedData, finished: !hasMore })
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
