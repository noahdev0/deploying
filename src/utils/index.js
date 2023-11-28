export const sections = [
  { name: "RPA Plug-in", id: "rpa" },
  { name: "Télécharger", id: "product" },
  { name: "Contacte", id: "footer" },
];

/**
 * An array of product objects.
 * @typedef {Object} Product
 * @property {string} image - The image of the product image.
 * @property {string} title - The title of the product.
 * @property {string} discription - The description of the product.
 */

/**
 * An array of products.
 * @type {Product[]}
 */
//TODO : add logo

export const products = [
  {
    // logo: premium,
    image: "Logo1",
    url: "https://later.later.com/assets/img/instagram-scheduling.png",
    title: "La version Premium",
    discription: `Notre produit phare offre une analyse parasismique avancée pour les structures en béton armé,
     en mettant particulièrement l'accent sur le bon équilibre entre la robustesse structurelle et la rentabilité. 
     Nous insistons particulièrement sur l'application stricte des critères imposés par le code, la convergence vers un dimensionnement optimal, 
     la fourniture de ratios de vérification ainsi que des suggestions. Tout cela est réalisé avec des méthodes innovantes tout en gardant l'esprit de l'actualité,
      assurant ainsi une approche complète et à la pointe de la technologie pour une conception parasismique meilleur.`,
  },
  {
    // logo: cloud,
    image: "Logo2",
    url: "https://later.later.com/assets/img/instagram-scheduling.png",
    title: "La version Cloud",
    discription: `La version Cloud offre une expérience collaborative avancée en combinant une structure organisationnelle
     élaborée avec trois catégories d'utilisateurs.
    Les utilisateurs autorisés peuvent télécharger les projets existants du Cloud vers leur machine locale,
     favorisant la collaboration et le partage d'informations. En parallèle, la flexibilité est préservée avec 
     la possibilité de transférer des projets entre différents Clouds, facilitant une collaboration transparente et efficace entre les utilisateurs
      et d'un Cloud a un autre. Cette combinaison offre une gestion fluide, sécurisée et flexible des projets au sein de la version Cloud.`,
  },
];

export const testimonials = [
  {
    testimonial:
      "I'm a huge fan of this app, I've found it to be incredibly intuitive overall. Would definitely recommend this if you're looking for an app to make planning that bit easier.",
    author: "John Doe",
    authorImg: "https://source.unsplash.com/v2aKnjMbP_k/500x500",
    authorMetadata: "Founder",
  },
  {
    testimonial:
      "This app has been pivotal for helping our team collaborate on tasks and new plans, I’d definitely recommend this if you’d like an intuitive planner app.",
    author: "Emma Doe",
    authorMetadata: "Founder",
    authorImg: "https://source.unsplash.com/rDEOVtE7vOs/500x500",
  },
  {
    testimonial:
      "I'm a huge fan of this app, I've found it to be incredibly intuitive overall. Would definitely recommend this if you're looking for an app to make planning that bit easier.",
    author: "John Doe",
    authorImg: "https://source.unsplash.com/v2aKnjMbP_k/500x500",
    authorMetadata: "Founder",
  },
  {
    testimonial:
      "This app has been pivotal for helping our team collaborate on tasks and new plans, I’d definitely recommend this if you’d like an intuitive planner app.",
    author: "Emma Doe",
    authorMetadata: "Founder",
    authorImg: "https://source.unsplash.com/rDEOVtE7vOs/500x500",
  },
  {
    testimonial:
      "I absolutely love the features provided, and that I can create notes to each task also. It really helped streamline my workflow, I would definitely recommend it!",
    author: "James Doe",
    authorImg: "https://source.unsplash.com/pUhxoSapPFA/500x500",
    authorMetadata: "Founder",
  },
];

export const features = [
  {
    icon: "fa-regular fa-handshake",
    title: "Conforme à la Règlementation Algérienne",
    text: `Notre outil a été développé en étroite 
            collaboration avec des experts dans la conception parasismique des bâtiments et est totalement conforme aux normes 
            et aux règles parasismiques en vigueur en Algérie`,
  },
  {
    image: "",
    title: "Analyse Précise",
    text: `L'automatisation intégrée garantit des calculs complexes et volumineux réalisés avec rapidité et précision, facilitant ainsi le processus pour les bureaux d'étude et au CTC de prendre des décisions informées pour la conception et la construction de bâtiments résistants aux séismes `,
  },
  {
    image: "",
    title: "L'équilibre Résistance/Economie",
    text: "Notre solution offre une analyse parasismique de haute qualité associée à des propositions économiques optimales, trouvant l'équilibre parfait entre robustesse et coûts .",
  },
  {
    image: "",
    title: "Calcul innovant",
    text: "Nous avons développé un calcul innovant pour les éléments soumis à la flexion composée (poteaux/voiles), une caractéristique unique dans notre solution.",
  },
  {
    image: "",
    title: "La version Cloud de RPA Plug-in",
    text: "CSEN Cloud offre une expérience professionnelle complète, permettant une gestion fluide, une sauvegarde des données, une organisation optimale et un transfert facile des projets entre les membres du cloud ou d’un cloud a un autre.",
  },

  {
    image: "",
    title: "Connaissance Approfondie",
    text: "Grâce au mode d’emplois et aux tutoriels vidéo inclus, nos clients peuvent rapidement acquérir une connaissance approfondie de l'outil et de ses fonctionnalités.",
  },
];
