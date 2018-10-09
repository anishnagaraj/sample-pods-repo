import {
  cardTemplate,
  tableTemplate,
} from './templates';

const render = () => ({
  renderCardView: data => cardTemplate(data),
  renderTableView: data => tableTemplate(data),
});

const view = () => Object.assign({}, render());

export default view;
