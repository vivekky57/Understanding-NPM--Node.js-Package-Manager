const semver = require("semver");
console.log(semver.valid('1.5.2-beta.10'));  //1.5.2-beta.10
console.log(semver.gt('1.5.2-beta.10',"1.5.2-beta.9"));  //true
console.log(semver.coerce("v3"));   
/*
SemVer {
  options: {},
  loose: false,
  includePrerelease: false,
  raw: '3.0.0',
  major: 3,
  minor: 0,
  patch: 0,
  prerelease: [],
  build: [],
  version: '3.0.0'
}*/
console.log(semver.coerce("v3").raw);  //3

// const range = semver.Range("~2.2.2");
// console.log(range)
// console.log(semver.satisfies("3.0.0", range));

console.log(semver.inc("1.4.3","patch")); //1.4.4

console.log(semver.parse("1.4.3-alpha.10")); 
//{ raw: '1.4.3-alpha.10', major: 1, minor: 4, patch: 3, prerelease: [ 'alpha', '10' ], build: [], version: '1.4.3-alpha.10' }
