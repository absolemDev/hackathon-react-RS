import httpService from "./http.service";
const teamEndpoint = "team/";

const teamService = {
  fetchAll: async () => {
    const { data } = await httpService.get(teamEndpoint);
    return data;
  }
};
export default teamService;
