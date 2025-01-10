import crypto from 'crypto'

/**
 * SLUGIFY STRING
 * @param value
 */
export const slugify = (value: string) => {
  if (!value) {
    return ''
  }

  let slug: string

  slug = value.replace(/^\s+|\s+$/g, '')
  slug = slug.toLowerCase()

  const from = 'ãàáäâèéëêìíïîòóöôõùúüûñç·/_,:;'
  const to = 'aaaaaeeeeiiiiooooouuuunc------'

  for (let i = 0, l = from.length; i < l; i++) {
    slug = slug.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i))
  }

  slug = slug
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')

  return slug
}

/**
 * STRING TO MD5
 * @param value
 */
export const stringToMd5 = (value: string): string => {
  return crypto.createHash('md5').update(value).digest('hex')
}
