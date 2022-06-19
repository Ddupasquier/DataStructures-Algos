function domainName(url) {
  url = url.replace('www.', '').replace('https://', '').replace('http://', '');
  return url.split('.')[0];
}

console.log(domainName('http://google.com'));
console.log(domainName('http://www.zombie-bites.com'));
console.log(domainName('www.xakep.ru'));
