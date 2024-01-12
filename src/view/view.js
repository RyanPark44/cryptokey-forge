export default class ViewCl {
  _data;

  render(data) {
    const markup = this._generateMarkup(data);
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = ``;
  }
}
