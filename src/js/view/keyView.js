import ViewCl from "./view";

class keyViewCl extends ViewCl {
  _parentElement = document.querySelector(".key__display");
  _generateMarkup(key) {
    return `
        <input type="text" value="${key}"/> 
    `;
  }
}

export default new keyViewCl();
