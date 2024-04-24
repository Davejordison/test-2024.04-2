// Task: groupArrayByParity
// Write a function groupArrayByParity(arr) that takes an array of numbers
// and returns an object with two properties:
//
// even: an array of all even numbers from arr.
// odd: an array of all odd numbers from arr.
// If the input is not an array, the function should throw an error with message: "Input must be an array"
export function groupArrayByParity(arr) {
    if (!Array.isArray(arr)) {
        throw new Error("Input must be an array");
    }
    let result = {
        even: [],
        odd: []
    };
    arr.forEach(num => {
        if (num % 2 === 0) {
            result.even.push(num);
        } else {
            result.odd.push(num);
        }
    });
    return result;
}
console.log(groupArrayByParity([1, 2, 3, 4, 5, 6]));

//Task: averageWordCount
//Write a function averageWordCount(sentences, minLength) that takes an array of strings sentences and an integer minLength.
//The function should return the average number of words (with a length greater than minLength) for each sentence.
//If sentences is empty, the function should return 0.
export function averageWordCount(sentences, minLength) {
    if (sentences.length === 0) {
        return 0;
    }
    let totalWords = 0;
    for (let i = 0; i < sentences.length; i++) {
        let words = sentences[i].split(' ');
        for ( let j = 0; j < words.length; j++) {
            if (words[j].length > minLength) {
                totalWords++;
            }
        }
    }
    return totalWords / sentences.length;
}
console.log(averageWordCount['This function works by iterating']);

// Task: findHighestScore
// Write a function findHighestScore(students, subject)
// that takes an array of objects students and a string subject.
// Each object in the students array contains the name of a student
// and their scores in different subjects. The function should
// return the name of the student with the highest score in the specified subject.
// 
// If no student has a score for the specified subject,
// or if students is empty, the function should return null.
// If the students array contains elements that aren't objects
// or if subject isn't a string, the function should throw an error.
// 
// Examples:
// findHighestScore([ { name: 'Alice', math: 90, science: 85 }, { name: 'Bob', math: 95, science: 80 } ], 'math') should return 'Bob'.
// findHighestScore([ { name: 'Alice', math: 90 }, { name: 'Bob', science: 95 } ], 'math') should return 'Alice'.
// findHighestScore([ { name: 'Alice', math: 90 }, { name: 'Bob', science: 95 } ], 'history') should return null.
export function findHighestScore(students, subject) {
        if (!Array.isArray(students) || typeof subject !== 'string') {
            throw new Error("Invalid input");
        }
    
        let highestScore = -Infinity;
        let highestScorer = null;
    
        for (let student of students) {
            if (typeof student !== 'object' || !student.hasOwnProperty(subject)) {
                continue;
            }
    
            if (student[subject] > highestScore) {
                highestScore = student[subject];
                highestScorer = student.name;
            }
        }
    
        return highestScorer;
    }
    console.log(findHighestScore([ { name: 'Alice', math: 90, science: 85 }, { name: 'Bob', math: 95, science: 80 } ], 'math'));
