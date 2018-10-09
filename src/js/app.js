import apiService from './helpers/apiService';
// Remove the next line after adding actual api url
import jenkinsResponse from '../../mockData/sampleResponse';
import view from './view';

const View = view();

let jenkinsData;

// Hide loader once the content has been loaded
const hideLoader = () => {
  const loader = document.querySelector('#loader');
  loader.classList.add('hide');
};

// Show main container
const showMainContainer = () => {
  const mainContainer = document.querySelector('#mainContainer');
  mainContainer.classList.remove('hide');
};

const renderView = (data) => {
  const containerEl = document.querySelector('#content-container');
  const tableBodyEl = document.querySelector('#tableBodyContainer');
  containerEl.innerHTML = View.renderCardView(data);
  tableBodyEl.innerHTML = View.renderTableView(data);
};

const fetchData = async () => {
  const response = await apiService('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22');
  return response;
};

const loadData = () => {
  fetchData()
    .then((resp) => {
      console.log(resp);
      // uncomment the next line after adding actual api url
      // jenkinsData = resp;
      // Comment / Remove the next line after adding actual api url
      jenkinsData = jenkinsResponse;
      renderView(jenkinsData);
      hideLoader();
      showMainContainer();
    })
    .catch((err) => {
      console.log(err);
    });
};

const init = () => ({
  init: () => {
    loadData();
  },
});

export default function app() {
  return init();
}
