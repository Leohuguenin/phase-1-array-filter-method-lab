const driversList = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

const fuzzyMatch = (drivers, letters) => 
    drivers.filter(driver => driver.toLowerCase().slice(0, letters.length) === letters.toLowerCase());

console.log(fuzzyMatch(driversList, 'an'));

const driversData = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  const matchName = (drivers, driverName) =>
    drivers.filter(driver => driver.name === driverName);