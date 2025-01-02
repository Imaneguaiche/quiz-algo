const quizData = [
    {
        question: "1. Qu'est-ce qu'un tableau à deux dimensions ?",
        options: ["a) Une structure de données avec des colonnes seulement",
            "b) Une structure de données sous forme de grille avec des lignes et des colonnes",
            "c) Un tableau avec une seule ligne et plusieurs colonnes",
            "d) Un tableau où chaque élément est un tableau"], correct: 1,
    },
  {
    question: "2. Comment déclare-t-on un tableau à deux dimensions en pseudo-code ?",
    options: ["a) T(3)", "b) T(3,2)", "Berlinc) T[5]", "d) T(5,7,9)"],
    correct: 1,
  },
  {
    question: "3. Comment accède-t-on à l'élément situé à la troisième ligne et deuxième colonne d'un tableau ?",
    options: ["a) T[3][2]", "b) T(3,2)", "c) T[2][3]", "d) T(5,7)"],
    correct: 1,
  },
  {
    question: "4. Quel est le rôle des boucles imbriquées dans l'affectation des valeurs d'un tableau à deux dimensions ?",
    options: [
      "a) Parcourir toutes les lignes et colonnes du tableau",
      "b) Afficher toutes les valeurs du tableau",
      "c) Remplacer les valeurs du tableau",
      "d) Effacer les valeurs du tableau",
    ],
    correct: 0,
  },
  {
    question: "5. Quelle est la première étape pour affecter des valeurs dans un tableau 4x6 ?",
      options: ["a) Demander à l'utilisateur d'entrer les dimensions du tableau",
        "b) Parcourir toutes les lignes et colonnes en utilisant des boucles",
          "c) Saisir directement des valeurs sans demander à l'utilisateur", "d) Afficher le tableau vide"],
    correct: 1,
  },
  {
    question: "6. Comment afficher les valeurs d'un tableau après leur saisie ?",
    options: ["a) En utilisant une seule boucle",
      "b) En réutilisant les boucles imbriquées pour parcourir chaque élément", "c) En réaffectant les valeurs d'abord",
      "d) En inversant les lignes et colonnes"],
    correct: 1,
  },
  {
    question: "7. Quelle commande permet de lire les valeurs dans un tableau à deux dimensions ?",
    options: ["a) Écrire(T[i,j])", "b) Afficher(T[i,j])", "c) Lire(T[i,j])", "d) Effacer(T[i,j])"],
    correct: 2,
  },
  {
    question: "8. Quelle est la différence principale entre un tableau à une dimension et un tableau à deux dimensions ?",
    options: ["a) Le nombre d'éléments qu'on peut stocker", "b) Un tableau à une dimension n'a pas de lignes",
      "c) Un tableau à deux dimensions a des lignes et des colonnes",
      "d) Ils sont identiques, seule la taille change"],
    correct: 2,
  },
  {
    question: "9. Comment écrit-on une boucle pour parcourir un tableau de 4 lignes et 6 colonnes ?",
    options: ["a) Pour i de 1 à 4, Pour j de 1 à 6", "b) Pour i de 0 à 3, Pour j de 0 à 5",
      "c) Pour i de 1 à 3, Pour j de 1 à 5", "d) Pour i de 0 à 4, Pour j de 0 à 6"],
    correct: 1,
  },
  {
    question: "10. Pourquoi les tableaux à deux dimensions sont-ils utiles dans la manipulation des données ?",
    options: ["a) Parce qu'ils simplifient la gestion des tableaux",
      "b) Parce qu'ils permettent d'organiser des données en lignes et colonnes",
      "c) Parce qu'ils sont plus rapides à manipuler",
      "d) Parce qu'ils peuvent être triés plus facilement"],
    correct: 1,
  },
];

const startBtn = document.getElementById("start-quiz-btn");
const quizContainer = document.getElementById("quiz");
const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", showNextQuestion);

function startQuiz() {
  startBtn.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  showQuestion();
}

function showQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionContainer.innerHTML = `
        <h3>${currentQuestion.question}</h3>
        ${currentQuestion.options
          .map(
            (option, index) => `
                <label>
                    <input type="radio" name="answer" value="${index}">
                    ${option}
                </label>
            `
          )
          .join("")}
    `;
  nextBtn.classList.remove("hidden");
}

function showNextQuestion() {
  const selectedOption = document.querySelector('input[name="answer"]:checked');
  if (!selectedOption) {
    alert("Please select an answer!");
    return;
  }
  const answer = parseInt(selectedOption.value);
  if (answer === quizData[currentQuestionIndex].correct) {
    score++;
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");
  scoreDisplay.textContent = score;
}
