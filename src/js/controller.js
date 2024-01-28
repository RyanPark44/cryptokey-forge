import * as model from "./model.js";
import parameterView from "./view/parameterView.js";
import keyView from "./view/keyView.js";

const controlGenerateKey = function () {
  // 1. get key parameters
  const keyParameters = parameterView.getKeyParameters();
  // 2. generate key
  model.randomString(keyParameters);
  // 3. render key
  keyView.render(model.state.key);
};

const init = function () {
  parameterView.addHandlerGenerate(controlGenerateKey);
};

init();
