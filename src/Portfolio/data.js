import projImg1 from "../assests/img/support.png";
import projImg2 from "../assests/img/support.png";
import projImg3 from "../assests/img/support.png";

export const projcets = [
  {
    category: "mobile",
    title: "Projet de recettes alimentaires",
    description:
      "Développer une application mobile qui contient des recettes classées par catégories et permet d'ajouter ou de supprimer des recettes des favoris. L'utilisateur peut également s'identifier en utilisant la base de données Firebase.",
    tasks: [
      "Classer les recettes par catégories",
      "Ajouter ou supprimer des recettes des favoris",
      "Authentification utilisateur via Firebase",
    ],
    technologies: "Flutter, Firebase",
    imgUrl: projImg1, // Update with the appropriate image variable if needed
  },
  {
    category: "social",
    title: "Projet social culturel",
    description:
      "Le projet kolna_maak consiste à équiper les ateliers UTAIM afin que les jeunes membres de l’association puissent poursuivre leur apprentissage et leur formations.",
    tasks: [
      "Équiper les ateliers UTAIM",
      "Faciliter l'apprentissage et la formation des jeunes membres",
    ],
    technologies: "", // Add technologies if any
    imgUrl: projImg2, // Update with the appropriate image variable if needed
  },
  {
    category: "web",
    title: "Projet gestion des commandes et des achats",
    description:
      "Développement d'un site web pour la gestion des commandes et des produits, comportant une interface client et une interface administrateur.",
    tasks: [
      "Interface client",
      "Interface administrateur",
      "Gestion des commandes",
      "Gestion des produits",
    ],
    technologies: "React, Node.js, MongoDB",
    imgUrl: projImg3, // Update with the appropriate image variable if needed
  },
  {
    category: "web",
    title: "Projet de réservation de salle de fête",
    description:
      "Développement d'un site web pour la réservation de salles des fêtes, comportant une interface client et une interface administrateur.",
    tasks: [
      "Interface client",
      "Interface administrateur",
      "Réservation de salles des fêtes",
    ],
    technologies: "Symfony, XAMPP",
    imgUrl: projImg2, // Update with the appropriate image variable if needed
  },
  {
    category: "personal",
    title: "Stage d'été chez Dundill",
    description:
      "Développement Frontend : Participation active au développement de la partie frontend du site web Subarashi en utilisant le framework React.js.",
    tasks: ["Développement frontend", "Utilisation de React.js"],
    technologies: "React.js",
    imgUrl: projImg2, 
  },
];
