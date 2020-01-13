const somethingWillHappen = () => {
  return new Promise((resolve, reject) => {
    if (false) {
      resolve('Hey!!!');
    } else {
      reject('whooooops11!!!');
    }
  });
}

somethingWillHappen()
  .then(response => console.log(response))
  .catch(err => console.error(err));

const somethingWillHappen2 = () => {
  return new Promise((resolve, reject) => {
    if(false) {
      setTimeout(() => {
        resolve(true);
      }, 2000)
    } else {
      const error = new Error('Whooop');
      reject(error);
    }
  })
}

somethingWillHappen2()
  .then(res => console.log(res))
  .catch(err => console.error(err));

Promise.all([somethingWillHappen(), somethingWillHappen2()])
  .then(response => {
    console.log('Array of results', response);
  })
  .catch(err => {
    console.error(err);
  })