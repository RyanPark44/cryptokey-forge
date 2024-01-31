import ViewCl from "./view";

class paramViewCl extends ViewCl {
  _parentElement = document.querySelector(".key__parameters");

  /**
   * Get key parameters from form inputParams
   */
  getKeyParameters() {
    const inputParams = Array.from(
      this._parentElement.querySelectorAll("input"),
    );
    return {
      keyLength: inputParams[0].value,
      alphabet: inputParams[1].checked,
      numbers: inputParams[2].checked,
      symbols: inputParams[3].checked,
    };
  }
  updateRangeValue() {
    const rangeValue = document.querySelector("#rangeValue");
    const rangeInput = document.querySelector("#rangeInput");
    rangeValue.textContent = rangeInput.value;
  }

  addHandlerGenerate(handlerFunction) {
    const btn = document.querySelector(".generate--btn");

    btn.addEventListener("click", handlerFunction);
  }
  addHandlerRangeInputUpdate(handlerFunction) {
    const rangeInput = document.querySelector("#rangeInput");
    rangeInput.addEventListener("input", handlerFunction);
  }
}

export default new paramViewCl();
