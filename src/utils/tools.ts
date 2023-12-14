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
export { getUrlParams }
