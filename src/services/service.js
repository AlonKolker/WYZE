export const service = {
  query,
  getBranches,
}

import  regions from "./data/regions.json" assert { type: "json" }
import  townList from "./data/townList.json" assert { type: "json" }
import branches from "./data/branches.json" assert { type: "json" }

function query(dataType) {
  if (dataType === "townList") return JSON.parse(JSON.stringify(townList))
  if (dataType === "regions") return  JSON.parse(JSON.stringify(regions))
}
function getBranches(town = "tel-aviv") {
  return branches.filter((b) => b.town === town)
}
