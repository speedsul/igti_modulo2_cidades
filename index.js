import { promises as fs } from 'fs';
init();
function init() {
  const estado = './data/Estados.json';
  const cidade = './data/Cidades.json';
  const estados = async () => {
    try {
      const dataEstado = JSON.parse(await fs.readFile(estado, 'utf-8'));
      const dataCidade = JSON.parse(await fs.readFile(cidade, 'utf-8'));
      console.log('1. Criar uma função que irá criar um arquivo JSON');
      dataEstado.map((estado) => {
        const data = filterCity(dataCidade, estado);
        const { Sigla } = estado;
        criaJson(Sigla, data).then(() =>
          console.log(
            'Arquivos criados com sucesso na pasta:',
            `./dataCity/${estado.Sigla}.json`
          )
        );
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
    const quantCity = result.length;

    // console.log(obj);
    array.push({ Estado: [state], Quantidade: quantCity });
    return array;
  };
  // Parte 02

  const cicoEstadosMaisCidades = async () => {
    try {
      const dataEstado = JSON.parse(await fs.readFile(estado, 'utf-8'));
      async function pegaCidade() {
        dataEstado.map((estado) => {
          getCityOfState(estado.Sigla);
        });
        // console.log(array.sort((a, b) => a[1] - b[1]));
        console.log(array);
      }
      await pegaCidade();
    } catch (err) {
      console.log(err);
    }
  };

  estados();
  //quantidades de cidades do estado

  // getCityOfState('SP');
  cicoEstadosMaisCidades();
}

const array = [];

setTimeout(() => {
  const quantidade = array.length;

  let teste = array.sort((a, b) => b.Quantidade - a.Quantidade).slice(0, 5);
  console.log('\nOs estados que mais Possuem cidades no Brasil:');
  console.log(teste);
  let cincoMenores = array
    .sort((a, b) => b.Quantidade - a.Quantidade)
    .slice(22, quantidade);
  console.log('\nOs estados que menos Possuem cidades no Brasil:');
  console.log(cincoMenores);
}, 2000);
