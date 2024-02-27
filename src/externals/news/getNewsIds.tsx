
export const getNewsIds = async (): Promise<string[]> => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`)
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`)
  }
  return response.json()
}
