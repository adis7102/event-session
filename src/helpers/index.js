export const ValidateForm  = (data) => {
  let error = null;

  for (const key in data) {
    if(data[key] === null || data[key] === "") {
      error = {
        errorField: key
      }

      break;
    } else if(data[key] === "duration") {
      if(data[key]["duration"]["minute"] === null && data[key]["duration"]["hour"] === null) {
        error = {
          errorField: key
        }
  
        break;
      }
    }
  }

  return error
}