// export const BASE_IMG_URL = 'https:/image.tmdb.org/t/p/w400';
export const BASE_IMG_URL = path => {
  if (!path) {
    return 'https://placeholder.pics/svg/300/7050FF-2716FF/FFFFFF/Not%20found';
  }

  return path.startsWith('/https')
    ? path.slice(1)
    : `https://image.tmdb.org/t/p/w400/${path}`;
};
