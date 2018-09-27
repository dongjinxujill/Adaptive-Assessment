var database = [
  {"difficulty": 0,
    "score": 1
  },

  {"difficulty": 1,
    "score": 2
  },

  {"difficulty": 2,
    "score": 3
  }
];

var question = [[
  "What is 2 + 3?",
  "What is 11 + 12?",
  "What is 33 + 44?"
],
  ["What is 4 * 5?",
  "What is 5 * 6?",
  "What is 3 * 2 - 1?"
],
  ["What is 2 ^ 4?",
  "What is 2 * 4 / 8?",
  "What is 4 ^ 2?"
]];

var answer = [
  [5, 23, 77],
  [20, 30, 5],
  [16, 1, 16]
];


function assessment(userinput) {
  var detector = database[1]["difficulty"];
  // var userinput = question[detector][0];
  if (userinput === answer[detector][0]) {
    question[detector] = question[detector].splice(1,2);
    answer[detector] = answer[detector].splice(1,2);
  }
  return answer;
  return question;

}

console.log(assessment(20))
