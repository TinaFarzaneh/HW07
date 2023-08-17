const salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  let maxSalary = 0;
  let personName;

  for (const [name, salary] of Object.entries(salaries)) {
    if (maxSalary < salary) {
      maxSalary = salary;
      personName = name;
      // return name;
    }
  }
  return personName;
  // return name;
}
console.log(topSalary(salaries));
