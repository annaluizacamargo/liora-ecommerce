import axios from 'axios'

const axiosConfig = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}

const controller = new AbortController()
const network = axios.create(axiosConfig)

/**
 * POST
 * @param endpoint
 * @param params
 * @param config
 * @param returnType
 */
export const post = async (
  endpoint: string,
  params: object = {},
  config = {},
  returnType: 'data' | 'object' = 'data'
) => {
  try {
    // @ts-expect-error SIGNAL
    params.signal = controller.signal
    const response = await network.post(endpoint, params, config)
    return returnType === 'data' ? response.data : response
  } catch (error) {
    const errorResponse = {
      data: {
        error: error,
        message: 'Network Service Error: POST request',
        endpoint,
        params,
        config,
      },
    }

    console.error(errorResponse.data.message, errorResponse.data)

    return errorResponse
  }
}

/**
 * GET
 * @param endpoint
 * @param config
 * @param returnType
 */
export const get = async (endpoint: string, config: object = {}, returnType: 'data' | 'object' = 'data') => {
  try {
    // @ts-expect-error SIGNAL
    config.signal = controller.signal
    const response = await network.get(endpoint, config)
    return returnType === 'data' ? response.data : response
  } catch (error) {
    const errorResponse = {
      data: {
        error: error,
        message: 'Network Service Error: GET request',
        endpoint,
        config,
      },
    }

    console.error(errorResponse.data.message, errorResponse.data)

    return errorResponse
  }
}

/**
 * PATCH
 * @param endpoint
 * @param params
 */
export const patch = async (endpoint: string, params: object = {}) => {
  try {
    // @ts-expect-error SIGNAL
    params.signal = controller.signal
    const response = await network.patch(endpoint, params)
    return response.data
  } catch (error) {
    const errorResponse = {
      data: {
        error: error,
        message: 'Network Service Error: PATCH request',
        endpoint,
        params,
      },
    }

    console.error(errorResponse.data.message, errorResponse.data)

    return errorResponse
  }
}

/**
 * PUT
 * @param endpoint
 * @param params
 */
export const put = async (endpoint: string, params: object = {}) => {
  try {
    // @ts-expect-error SIGNAL
    params.signal = controller.signal
    const response = await network.put(endpoint, {
      params,
    })
    return response.data
  } catch (error) {
    const errorResponse = {
      data: {
        error: error,
        message: 'Network Service Error: PUT request',
        endpoint,
        params,
      },
    }

    console.error(errorResponse.data.message, errorResponse.data)

    return errorResponse
  }
}

/**
 * DELETE
 * @param endpoint
 * @param params
 */
export const destroy = async (endpoint: string, params: object = {}) => {
  try {
    // @ts-expect-error SIGNAL
    params.signal = controller.signal
    const response = await network.delete(endpoint, {
      params,
    })
    return response.data
  } catch (error) {
    const errorResponse = {
      data: {
        error: error,
        message: 'Network Service Error: DELETE request',
        endpoint,
        params,
      },
    }

    console.error(errorResponse.data.message, errorResponse.data)

    return errorResponse
  }
}

/**
 * ABORT REQUESTS
 */
export const abortRequests = () => {
  //controller.abort()
}
