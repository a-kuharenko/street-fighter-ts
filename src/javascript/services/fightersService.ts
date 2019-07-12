import { callApi } from '../helpers/apiHelper';

interface IFighterService {
    getFighters: () => Promise<any>;
    getFighterDetails: (id: number) => Promise<any>;
}

class FighterService implements IFighterService {
  async getFighters() {
    try {
      const endpoint: string = 'fighters.json';
      const apiResult = await callApi(endpoint, 'GET');

      return JSON.parse(atob(apiResult.content));
    } catch (error) {
      throw error;
    }
  }

  async getFighterDetails(_id) {
    try{
      const endpoint: string = `details/fighter/${_id}.json`;
      const apiResult = await callApi(endpoint, 'GET');

      return JSON.parse(atob(apiResult.content));
    } catch(error) {
      throw error;
    }
  }
}

export const fighterService = new FighterService();
