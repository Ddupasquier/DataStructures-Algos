// Hey! I know you’re new but I need some help.
// We are a uniform factory and each company that we service needs a complete set of uniform pieces with their custom logo. Each piece that we have ready is labled with the company name and piece like this: “company1_shirt” or “company2_hat”.
// I’m going to give you a list of pieces that are in the uniform set (uniformSet) and which pieces we have (uniformPieces) ready, can you let me know which company has a missing piece from their uniform set? There should, at maximum, only be 1 company with missing items.
// For example: If the uniformSet needs:
// ['shoe', 'shirt', 'belt', 'pants']
// & the uniformPieces has:
// [
//       'AstroCorp_shoe',
//       'BetaCorp_hat',
//       'CaliCorp_pant',
//       'AstroCorp_shirt',
//       'DeltaCorp_pant',
//       'BetaCorp_shirt',
//       'AstroCorp_belt',
//       'DeltaCorp_shoe',
//       'BetaCorp_belt',
//       'BetaCorp_shoe',
//       'CaliCorp_shirt',
//       'CaliCorp_shoe',
//       'AstroCorp_hat',
//       'CaliCorp_belt',
//       'CaliCorp_jacket',
//       'DeltaCorp_belt',
//       'DeltaCorp_pant',
//       'AstroCorp_pant',
//       'DeltaCorp_lanyard',
//       'DeltaCorp_shirt',
//     ]
// Then “BetaCorp” would be the one missing items for the full set.
// Return a string of the company name that is missing items, if a company isn’t missing any items, please return N/A
// Expected Output: BetaCorp

const companyUniforms = (uniformSet, uniformPieces) => {
  let companyObj = {};
  for (let i = 0; i < uniformPieces.length; i++) {
    let current = uniformPieces[i];
    let company = current.split('_')[0];
    let piece = current.split('_')[1];
    if (companyObj[company] === undefined) {
      companyObj[company] = {};
    }
    companyObj[company][piece] = (companyObj[company][piece] || 0) + 1;
  }
  for (let company in companyObj) {
    let current = companyObj[company];
    let missing = false;
    for (let i = 0; i < uniformSet.length; i++) {
      let piece = uniformSet[i];
      if (current[piece] === undefined) {
        missing = true;
      }
    }
    if (missing === true) {
      return company;
    }
  }
  return 'N/A';
};

console.log(
  companyUniforms(
    ['shoe', 'shirt', 'belt', 'pants'],
    [
      'AstroCorp_shoe',
      'BetaCorp_hat',
      'CaliCorp_pant',
      'AstroCorp_shirt',
      'DeltaCorp_pant',
      'BetaCorp_shirt',
      'AstroCorp_belt',
      'DeltaCorp_shoe',
      'BetaCorp_belt',
      'BetaCorp_shoe',
      'CaliCorp_shirt',
      'CaliCorp_shoe',
      'AstroCorp_hat',
      'CaliCorp_belt',
      'CaliCorp_jacket',
      'DeltaCorp_belt',
      'DeltaCorp_pant',
      'AstroCorp_pant',
      'DeltaCorp_lanyard',
      'DeltaCorp_shirt',
    ]
  )
);
