console.log('Connected!');

// on the API (backend)
function fetchPosts(err) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!err) {
        console.log('Success!');
        console.log({
          name: 'Leonardo',
          surname: 'Faife',
        });
        resolve();
      } else {
        reject('Err: Something went wrong');
      }
    }, 3000);
  });
}

// from the front
async function callApi() {
  try {
    await fetchPosts(false);
  } catch (err) {
    console.log(err);
  }
}

callApi();

// // used for API calls (An example)
// Can't have async without await
// async function fetchPokemon() {
//   try {
//     url = 'www.something.com';
//     await fetch(url, {
//       method: 'GET',
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }