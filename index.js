import { promises as fs } from 'fs';
init();
function init() {
  const estado = './data/Estados.json';
  const cidade = './data/Cidades.json';
  const estados = async () => {
    try {
      const dataEstado = JSON.parse(await fs.readFile(estado, 'utf-8'));
      const dataCidade = JSON.parse(await fs.readFile(cidade, 'utf-8'));

      dataEstado.map((estado) => {
        const data = filterCity(dataCidade, estado);
        const { Sigla } = estado;
        criaJson(Sigla, data);
      });
    } catch (erro) {
      console.log(erro);
    }
  };

  const filterCity = (city, state) =>
    city.filter((data) => data.Estado === state.ID);

  const criaJson = async (nome, data) => {
    const dir = `./dataCity/${nome}`;
    await fs.writeFile(dir, JSON.stringify(data));
  };
  const readJson = async (nome) => {
    const dir = `./dataCity/${nome}`;
    return JSON.parse(await fs.readFile(dir));
  };

  const getCityOfState = async (state) => {
    const result = await readJson(state);
    const cidadesPorEstado = `Cidades por estado: ${state} = ${result.length}`;
    // console.log(cidadesPorEstado);
    return result.length;
  };

  const cicoEstadosMaisCidades = async () => {
    const dataEstado = JSON.parse(await fs.readFile(estado, 'utf-8'));
    const estadoOrder = [];
    const dat = dataEstado.map((estado) => {
      getCityOfState(estado.Sigla).then((resp) => console.log([resp]));

      // return estadoOrder;
    });
  };

  estados();
  getCityOfState('SP'); //quantidades de cidades do estado
  cicoEstadosMaisCidades();
}
