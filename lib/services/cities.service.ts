import { CitiesEndpoints, CitiesHost, CitiesUrl } from "../constants/endpoints";
import { apiCaller } from "./api.service";

export class CitiesService {
  public async getCities() {
    const api = new apiCaller();
    const response = await api.get({
      url: `${CitiesUrl}/${CitiesEndpoints.citiesNearby}`,
      headers: {
        "X-RapidAPI-Host": CitiesHost,
      },
      params: { page: "2", per_page: "20", population: "1501" },
    });
    return response;
  }
}
