const BASEURL = " http://ws.audioscrobbler.com/2.0/"
const COUNTRY = "colombia"
const APIKEY = "99f3a24cbc0dbbacf1cbeaed3cc45291"

const api = {
  getTopTracks: async () => {
    const res = await fetch(`${BASEURL}?method=geo.gettoptracks&country=${COUNTRY}&api_key=${APIKEY}&format=json`)
    const data = await res.json()
    return data.tracks
  }
}

export default api