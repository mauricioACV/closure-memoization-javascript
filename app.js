console.clear();

// ****************************************************
// closure de memoization
// ****************************************************

const memo = (fn) => {
  let result = {};
  return (arg) => {
    if (!result[arg]) {
      console.log(`nueva solicitud id ${arg}, data se guarda en obj result`);
      result[arg] = fn(arg);
    } else {
      console.log(
        `solicitud existente id ${arg}, se retorna data existente en result`
      );
    }
    return result[arg];
  };
};

// ****************************************************
// funcion request envuelve solicitud en clsure memo
// ****************************************************
const request = memo(async (id) => {
  console.log("id", id);
  let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  let json = await res.json();
  return json;
});

// ****************************************************
// casos de uso
// ****************************************************

request(1).then((result) => console.log("id 1", result));
request(1).then((result) => console.log("id 1", result));
request(2).then((result) => console.log("id 2", result));
request(2).then((result) => console.log("id 2", result));
