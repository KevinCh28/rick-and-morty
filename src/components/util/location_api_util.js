export const getLocation = url => {
  let data = fetch(url)
    .then(res => res.json())
  return data;
}