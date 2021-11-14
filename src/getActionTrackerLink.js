export const getActionTrackerLink = (action) => {
  const actionName = action.replace(/\s+/g, '+')

  return `https://docs.google.com/forms/d/e/1FAIpQLSf0yGns66LOCBZBA56uR25BbtgyFc_hd8WZWz14CF0wrw7Ihw/formResponse?entry.879728656=${actionName}&submit=Submit`
}
