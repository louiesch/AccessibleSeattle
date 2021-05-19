//snag a function from stackoverflow to assign an id to posts
//this is currently not needed. However, I'll keep it in case I want to add photo upload ability

export default function makeId(length) {
  let result = '';
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}