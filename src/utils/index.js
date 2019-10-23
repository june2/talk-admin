export const dateOptions = { hourcycle: 'h24', hour: 'numeric', minute: 'numeric' }

export const diffYears = (val) => {
  let now = new Date();
  let date = new Date(val);
  let diff = (now.getTime() - date.getTime()) / 1000;
  diff /= (60 * 60 * 24); // year difference
  return Math.abs(Math.round(diff / 365.25));
}