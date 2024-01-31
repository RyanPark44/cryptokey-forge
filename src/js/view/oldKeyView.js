import ViewCl from "./view";

class oldKeysCl extends ViewCl {
  _parentElement = document.querySelector(".previous__key__container");

  _generateMarkup(entries) {
    if (entries.length === 0) return;
    // Reversed array so that it would display correctly for user
    const markup = entries
      .map((entry) => {
        return `
      <p class="first-letter:text-[#802BB1]">> ${entry}</p>`;
      })
      .reverse();
    return markup.join("");
  }
}

export default new oldKeysCl();
