// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  test("organization key should be 'nonprofit'", function() {
    expect(launchcode.organization).toBe('nonprofit');
  });
  test("executiveDirector key should be 'Jeff'", function() {
    expect(launchcode.executiveDirector).toBe('Jeff');
  });
  test("percentageCoolEmployees should be 100", function() {
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });
  test("programs offered to be Array with 'Web Development', 'Data Analysis', and 'Liftoff'", function() {
    expect(launchcode.programsOffered).toContain('Web Development');
    expect(launchcode.programsOffered).toContain('Data Analysis');
    expect(launchcode.programsOffered).toContain('Liftoff');
    expect(launchcode.programsOffered.length).toBe(3);
  });
  test("should return 'Launch!' when passed a number ONLY divisible by 2", function() {
    expect(launchcode.launchOutput(2)).toBe('Launch!');
  });
  test("should return 'Code!' when passed a number ONLY divisible by 3", function() {
    expect(launchcode.launchOutput(3)).toBe('Code!');
  });
  test("should return 'Rocks!' when passed a number ONLY divisible by 5", function() {
    expect(launchcode.launchOutput(5)).toBe('Rocks!');
  });
  test("should return 'LaunchCode!' when passed a number divisible by 2 AND 3", function() {
    expect(launchcode.launchOutput(6)).toBe('LaunchCode!');
  });
  test("should return 'Code Rocks!' when passed a number divisible by 3 AND 5", function() {
    expect(launchcode.launchOutput(15)).toBe('Code Rocks!');
  });
  test("should return 'Launch Rocks!' when passed a number divisible by 2 AND 5", function() {
    expect(launchcode.launchOutput(10)).toBe('Launch Rocks!');
  });
  test("should return 'LaunchCode Rocks!' when passed a number divisible by 2,3, AND 5", function() {
    expect(launchcode.launchOutput(30)).toBe('LaunchCode Rocks!');
  });
  test("should return 'Rutabagas! That doesn't work. when passed a number that is NOT divisible by 2,3, or 5", function() {
    expect(launchcode.launchOutput(1)).toBe("Rutabagas! That doesn't work.");
  });
  // Write your unit tests here!
});
