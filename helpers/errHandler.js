let validationExtractor = (err) => {
  let errArray = [];
  for (let el in err.errors) {
    if (err.errors[el].kind === "unique") {
      errArray.push(`This ${el} is already exist`);
    } else {
      errArray.push(err.errors[el].message);
    }
  }
  return errArray;
};

const errHandler = (err) => {
  let status = err.status || 500;
  let message = err.message || "Internal server error";
  let name;
  if (err.name === "ValidationError") {
    message = validationExtractor(err);
    status = 400;
  } else if (
    err.name === "TokenExpiredError" ||
    err.name === "JsonWebTokenError"
  ) {
    status = 401;
    message = "You need to login first";
  }
  return { message, error_status: err.name || "Internal server error", status };
};

const handleErrorGraph = (err) => {
  let { extensions } = err;
  let { message, error_status, code, status } = extensions;
  return {
    message,
    error_status: error_status || "Internal Server Error",
    code,
    status,
  };
};

module.exports = { errHandler, handleErrorGraph };
