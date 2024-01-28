import ViewCl from "./view";

class keyViewCl extends ViewCl {
  _parentElement = document.querySelector(".key__input__container");
  _generateMarkup(key) {
    return `
        <input
          type="text"
          class="p-1 w-full bg-[#2D283E]"
          value="${key}"
        />
    `;
  }
}

export default new keyViewCl();
