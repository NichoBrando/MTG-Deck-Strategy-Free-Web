export default function redirect(url: string, newPage: boolean = false) {
  window.open(url, newPage ? '_blank' : '_self');
};