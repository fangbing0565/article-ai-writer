const getUrlParams = () => {
  return (
    location.href
      .split('?')[1]
      ?.split('&')
      .reduce((result: any, item) => {
        const arr = item.split('=')
        result[arr[0]] = decodeURIComponent(arr[1])
        return result
      }, {}) || {}
  )
}
const subIterator = (item: any): string => {
  return item.sub?.map((subItem: any) =>
    !subItem.sub ? subItem.content_original : subIterator(subItem)
  ).join(`

   
  `)
}

const tansferDatatoRickValue = (outline: Record<string, any>) => {
  return outline.map((item: any) => {
    return (
      item.content_original +
      `

   
      ` +
      (!item.sub ? '' : subIterator(item))
    )
  }).join(`

   
  `)
}

export { getUrlParams, tansferDatatoRickValue }
