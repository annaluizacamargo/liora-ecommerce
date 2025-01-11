import { NextRequest, NextResponse } from 'next/server'

/**
 * GET /api/products
 * @param request
 * @returns
 */
export async function GET(request: NextRequest) {
  try {
    const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}products`
    const response = await fetch(apiUrl, { method: 'GET' })

    if (!response.ok) {
      return NextResponse.json({ error: 'Failed to fetch data from the API' }, { status: response.status })
    }

    const data = await response.json()

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error processing request:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
