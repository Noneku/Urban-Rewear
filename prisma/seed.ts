import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const articles = [
  // ── Homme · Coin Friperie ──────────────────────────────
  {
    name: 'Hoodie Oversize Noir',
    description: 'Hoodie en coton épais, coupe oversize. Capuche doublée et poches kangourou. Idéal pour un look streetwear décontracté.',
    condition: 'Neuf',
    gender: 'Homme',
    section: 'friperie',
    size: 'L',
    price: 28,
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=800&fit=crop',
    vintedLink: 'https://www.vinted.fr',
  },
  {
    name: 'Cargo Baggy Kaki',
    description: 'Pantalon cargo baggy avec poches latérales. Taille élastique et coupe ample. Un classique du style urbain.',
    condition: 'Bon état',
    gender: 'Homme',
    section: 'friperie',
    size: 'S',
    price: 35,
    imageUrl: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&h=800&fit=crop',
    vintedLink: 'https://www.vinted.fr',
  },
  {
    name: 'T-shirt Graphique Blanc',
    description: 'T-shirt en coton bio avec imprimé graphique abstrait. Coupe regular fit, col rond.',
    condition: 'Neuf',
    gender: 'Homme',
    section: 'friperie',
    size: 'M',
    price: 18,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=800&fit=crop',
    vintedLink: 'https://www.vinted.fr',
  },
  // ── Homme · Boutique Marques ───────────────────────────
  {
    name: 'Veste Bomber Vintage',
    description: 'Veste bomber style années 90, coupe oversize. Tissu satiné avec doublure intérieure. Parfaite pour les mi-saisons.',
    condition: 'Bon état',
    gender: 'Homme',
    section: 'marque',
    size: 'M',
    price: 45,
    imageUrl: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=800&fit=crop',
    vintedLink: 'https://www.vinted.fr',
  },
  {
    name: 'Jean Droit Vintage',
    description: 'Jean coupe droite, délavé naturellement. Denim épais de qualité, style workwear authentique.',
    condition: 'Bon état',
    gender: 'Homme',
    section: 'marque',
    size: 'L',
    price: 40,
    imageUrl: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&h=800&fit=crop',
    vintedLink: 'https://www.vinted.fr',
  },
  // ── Femme · Coin Friperie ──────────────────────────────
  {
    name: 'Veste en Jean Oversize',
    description: 'Veste en denim délavé, coupe oversize. Boutons métalliques et poches poitrine. Un intemporel.',
    condition: 'État moyen',
    gender: 'Femme',
    section: 'friperie',
    size: 'XL',
    price: 32,
    imageUrl: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=800&fit=crop',
    vintedLink: 'https://www.vinted.fr',
  },
  {
    name: 'Sweat Col Rond Beige',
    description: 'Sweat-shirt col rond en molleton brossé. Coupe décontractée, couleur sable. Confort maximal.',
    condition: 'Neuf',
    gender: 'Femme',
    section: 'friperie',
    size: 'M',
    price: 25,
    imageUrl: 'https://images.unsplash.com/photo-1578681994506-b8f463449011?w=600&h=800&fit=crop',
    vintedLink: 'https://www.vinted.fr',
  },
  // ── Femme · Boutique Marques ───────────────────────────
  {
    name: 'Sneakers Blanches Rétro',
    description: 'Baskets blanches style rétro, semelle épaisse. Cuir synthétique facile à entretenir.',
    condition: 'Bon état',
    gender: 'Femme',
    section: 'marque',
    size: '38',
    price: 55,
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=800&fit=crop',
    vintedLink: 'https://www.vinted.fr',
  },
];

async function main() {
  console.log('Seeding database...');

  for (const article of articles) {
    await prisma.article.create({ data: article });
  }

  console.log(`Seeded ${articles.length} articles.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
