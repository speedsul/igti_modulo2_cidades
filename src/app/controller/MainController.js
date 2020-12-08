import ApiCidades from '../../../data/Cidades.json';

class MainController {
  async create(req, res) {
    // res = ApiCidades;
    // return res.json();
    console.log('TESTE');
  }
  async find(req, res) {
    res = ApiCidades;
    return res.json();
  }
  async store(req, res) {
    res = ApiCidades;
    return res.json();
  }
}

export default new MainController();
