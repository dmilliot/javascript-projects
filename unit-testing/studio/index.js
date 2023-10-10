
let launchcode = {
    organization: 'nonprofit',
    executiveDirector: 'Jeff',
    percentageCoolEmployees: 100,
    programsOffered: ['Web Development', 'Data Analysis', 'Liftoff'],
    launchOutput: function launchOutput(number) {
       let output = "";
        if(number%2 === 0) {
            output = 'Launch!';
        }else if(number%3 === 0) {
            output = 'Code!';
        }else if(number%5 === 0) {
            output = 'Rocks!';
        }
        if(number%2 === 0 && number%3 === 0) {
            output = 'LaunchCode!';
        }else if(number%3 === 0 && number%5 === 0) {
            output = 'Code Rocks!';
        }else if(number%2 === 0 && number%5 === 0) {
            output = 'Launch Rocks!';
        }
        if(number%2 === 0 && number%3 === 0 && number%5 === 0) {
            output = 'LaunchCode Rocks!';
        }
        if(number%2 !== 0 && number%3 !== 0 && number%5 !== 0){
            output = "Rutabagas! That doesn't work.";
        }
        return output;
    }
};

module.exports = launchcode;

