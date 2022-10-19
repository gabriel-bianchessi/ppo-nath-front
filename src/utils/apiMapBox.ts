import { ACCES_TOKEN_MAP_BOX } from "./constants"
import FeatureCollection from "geojson"

export const fetchLocalMapBox = async (local: string) => { 
  const request = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${ACCES_TOKEN_MAP_BOX}`)
  const response = await request.json()
  console.log(response)
  return response
}