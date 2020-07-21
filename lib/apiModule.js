import fetch from 'node-fetch';

const baseUrl = 'https://cat-fact.herokuapp.com';


/**
 * make a get api request
 * @param  {string} url - the api url
 * @return {obj} - the response
 */
async function get(url) {
  return await fetch(`${baseUrl}${url}`, { method: 'GET'})
    .then(res => res.json())
    .catch(error => console.error(error));
}

/**
 * get a random fact
 * @return {obj} json
 */
export function getRandomFact() {
  return get(`/facts/random`);
}

/**
 * get a cat by its ID
 * @param  {string} id
 * @return {obj} json
 */
export function getCatById(id) {
  return get(`/facts/${id}`);
}