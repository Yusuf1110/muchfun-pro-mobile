export const setItem = function (key, value) {
  if (value instanceof Object) {
    value = JSON.stringify(value)
  }
  window.localStorage.setItem(key, value)
}

export const getItem = function (key) {
  const value = window.localStorage.getItem(key)
  try {
    return JSON.parse(value)
  } catch (err) {
    return value
  }
}

export const removeItem = function (key) {
  window.localStorage.removeItem(key)
}
