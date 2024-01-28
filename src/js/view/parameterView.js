import ViewCl from "./view";

class paramViewCl extends ViewCl {
  _parentElement = document.querySelector(".key__parameters");

  /**
   * Get key parameters from form checkboxes
   */
  getKeyParameters() {
    const checkboxes = Array.from(
      this._parentElement.querySelectorAll("input")
    );
    return {
      alphabet: checkboxes[0].checked,
      numbers: checkboxes[1].checked,
      symbols: checkboxes[2].checked,
    };
  }

  addHandlerGenerate(handlerFunction) {
    const btn = document.querySelector(".generate--btn");

    btn.addEventListener("click", handlerFunction);
  }
}

export default new paramViewCl();
