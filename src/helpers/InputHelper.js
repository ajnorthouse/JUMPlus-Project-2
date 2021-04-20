export function hasEmptyInputs(inputs, setResult){
  for (var key in inputs) {
    if (String(inputs[key]).trim() === "") {
      setResult(<p className="is-error">The {key} field can't be empty!</p>);
      return true;
    }
  }
  return false;
}