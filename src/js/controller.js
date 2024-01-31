import * as model from "./model.js";
import parameterView from "./view/parameterView.js";
import keyView from "./view/keyView.js";
import oldKeyView from "./view/oldKeyView.js";

const controlSubmitNewKey = function () {
  // 2. update oldkey array
  model.updateOldKeyArray();
  //
  controlGenerateNewKey();
  // 5. render old keys
  oldKeyView.render(model.state.oldKeys);
};

const controlGenerateNewKey = function () {
  // 1. get key parameters
  const keyParameters = parameterView.getKeyParameters();
  // 3. generate new key
  model.randomString(keyParameters);
  // 4. render key
  keyView.render(model.state.key);
};
const init = function () {
  parameterView.addHandlerGenerate(controlSubmitNewKey);
  parameterView.addHandlerRangeInputUpdate(parameterView.updateRangeValue);
  parameterView.addHandlerRangeInputUpdate(controlGenerateNewKey);
  parameterView.updateRangeValue();
  controlSubmitNewKey();
};

init();
