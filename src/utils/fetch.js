export function fetchFileOrUrl(url) {
  return fetch(url).then(response => response.json());
}

export default { fetchFileOrUrl };
