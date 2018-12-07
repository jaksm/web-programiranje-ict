const API = "https://min-api.cryptocompare.com/data";
const API_KEY =
  "&api_key=9003fd5d6c34ac3309b6f48961bdf30b6fe461bfe1bb74b4803a1c4645f68915";

/**

{
  "id": "719379",
  "guid": "https://www.livebitcoinnews.com/?p=52014",
  "published_on": 1544140838,
  "imageurl": "https://images.cryptocompare.com/news/livebitcoinnews/a2g090gg02g.jpeg",
  "title": "Cryptocurrency Still a Minute Portion of Money Laundering Crimes, Says Police in Japan",
  "url": "https://www.livebitcoinnews.com/cryptocurrency-still-a-minute-portion-of-money-laundering-crimes-says-police-in-japan/",
  "source": "livebitcoinnews",
  "body": "Law enforcement in Japan says cryptocurrency money laundering constitutes only a minor portion of the total cases of money laundering in the country. This assertion comes even as police authorities say instances of virtual currency-related money laundering are on the rise. Two Percent According to the Japan Times, the country’s National Police Agency (NPA) announced...The post Cryptocurrency Still a Minute Portion of Money Laundering Crimes, Says Police in Japan appeared first on Live Bitcoin News.",
  "tags": "Altcoin News|Bitcoin News|News|cryptocurrency money laundering|FSA|Japan|Money Laundering|NPA",
  "categories": "Asia|BTC|Regulation",
  "upvotes": "0",
  "downvotes": "0",
  "lang": "EN",
  "source_info": {
    "name": "Live Bitcoin News",
    "lang": "EN",
    "img": "https://images.cryptocompare.com/news/default/livebitcoinnews.png"
  }
}

*/

const fetchData = fetch(`${API}/v2/news/?lang=EN${API_KEY}`)
  .then(res => res.json())
  .then(data => {
    if (!data.HasWarning) {
      return data.Data;
    } else {
      return new Error(data.Message);
    }
  });

$(document).ready(async () => {
  // try {
  //   const posts = await fetchData;
  //   console.log(JSON.stringify(posts[0], null, 2));
  // } catch (error) {
  //   console.log(error);
  // }
});
