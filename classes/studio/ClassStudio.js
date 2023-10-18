//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class crewCandidate {
    constructor(name, mass, scores){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore){
        this.scores.push(newScore)
    }
    average(){
        let total = 0;
        let avg = 0;
        for(let i=0; i<this.scores.length; i++) {
            total += this.scores[i];
        }
        avg = total / this.scores.length;
        avg = Math.round(avg*10)/10;
        return avg
    }
    status() {
        let assignedStatus = ""
        console.log(this.average());
        if (this.average() >= 90){
            assignedStatus = "Accepted";
        } else if (this.average() <= 80 && this.average <= 89) {
            assignedStatus = "Reserve.";
        } else if (this.average() >= 70 && this.average <= 79) {
            assignedStatus = "Probationary.";
        } else if (this.average() < 70) {
            assignedStatus = "Rejected."
        }
        console.log(assignedStatus);
        return assignedStatus
    }
}

let bubbaBear = new crewCandidate('Bubba Bear', 135, [88, 85, 90]);
let merryMaltese = new crewCandidate('Merry Matlese', 1.5, [93, 88, 97]);
let gladGator = new crewCandidate('Glad Gator', 225, [75, 78, 62]);
// console.log(bubbaBear, merryMaltese, gladGator);

console.log(bubbaBear.status());
console.log(bubbaBear.average());

bubbaBear.addScore(83);
// console.log(bubbaBear.scores);
function statusCheck(candidate){
    return `${candidate.name} has earned an average test score of ${candidate.average()}% and has a status of ${candidate.status()}.`;
}
// console.log(statusCheck(bubbaBear), '\n',
// statusCheck(merryMaltese), '\n',
// statusCheck(gladGator));
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.