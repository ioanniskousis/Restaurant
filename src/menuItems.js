
function salads() {
  const items = [];
  items.push({
    image: 'salad1',
    name: 'Spicy Miso Ramen',
    description: 'Roasted Chili Salmon (or tofu!) with bok choy, mushrooms and scallions. Vegan and Paleo adaptable',
    price: '20$',
  });

  items.push({
    image: 'salad2',
    name: 'Maki Rolls',
    description: 'Sushi rice is seasoned with rice vinegar, sugar, and a bit of salt. The rice will taste odd by itself, but trust us, the rice needs to be seasoned this way in order for the sushi to taste right.',
    price: '20$',
  });

  items.push({
    image: 'salad3',
    name: 'Overnight Oats',
    description: 'Overnight Oats are a simple and healthy breakfast that’s conveniently made ahead of time, and the flavor combinations are endless',
    price: '20$',
  });

  items.push({
    image: 'salad4',
    name: 'Ahi Tuna',
    description: 'This Seared Ahi Tuna with Orange Avocado Salsa is easy to make, and has tons of flavor',
    price: '20$',
  });

  return items;
}

function shellfish() {
  const items = [];
  items.push({
    image: 'shellfish1',
    name: 'Mussels and Potatoes',
    description: 'This is loosely based on a recipe in Alan Davidson’s book ‘North Atlantic Seafood’. His version doesn’t have cream in it.',
    price: '30$',
  });

  items.push({
    image: 'shellfish2',
    name: 'Shrimp Couscous',
    description: 'Shrimp and tomatoes are tossed with couscous and feta cheese, then dressed in a garlic vinaigrette. Always a hit, and never goes to waste.',
    price: '40$',
  });

  items.push({
    image: 'shellfish3',
    name: 'Lobster Tail',
    description: 'Lobster is regarded as the most elegant, high-end type of seafood The tail, or abdomen, is the prized section due to its abundance of meat, and when dipped in rich melted butter is a blissful feast.',
    price: '70$',
  });

  items.push({
    image: 'shellfish4',
    name: 'Dungeness Crab',
    description: 'Once the crab is cooked, it’s easy to enjoy the crab meat inside. Use a pair of cracker and hand gloves as the tools.',
    price: '60$',
  });

  return items;
}

function fish() {
  const items = [];
  items.push({
    image: 'fish1',
    name: 'Sea Breams',
    description: 'Roasted on charcoal, poured with lemon sauce, basil, origan',
    price: '40$',
  });

  items.push({
    image: 'fish2',
    name: 'Perch fillets',
    description: 'A light and fresh dinner. Grilling the lemons leads to bright flavors that complement any firm white fish.',
    price: '40$',
  });

  items.push({
    image: 'fish3',
    name: 'Pan-Seared Salmon',
    description: 'This is one of chef\'s favorite recipe. The creamy dill sauce with cucumber tastes light and fresh.',
    price: '50$',
  });

  items.push({
    image: 'fish4.jpeg',
    name: 'Roasted Red Snapper',
    description: 'Pick your favorite flavor combination sauce - Asian, Mediterranean or Caribbean.',
    price: '40$',
  });

  return items;
}

function meat() {
  const items = [];
  items.push({
    image: 'meat1',
    name: 'Roast beef on bananas',
    description: 'Succulent roast topside of beef, made especially irresistible with a mustard crust, piquant shallots and red wine enriched gravy',
    price: '40$',
  });

  items.push({
    image: 'meat2',
    name: 'Tenderloin Steak Diane',
    description: 'Excellent recipe for pan fried steak. The fresh mushroom sauce cooked in the same butter that the steaks were cooked in is delicious.',
    price: '40$',
  });

  items.push({
    image: 'meat3',
    name: 'Beef stroganoff',
    description: 'Classic beef stroganoff with steak and mushrooms for a tasty midweek meal. Garnish with parsley and serve with pappardelle pasta or rice',
    price: '40$',
  });

  items.push({
    image: 'meat4',
    name: 'Beef goulash',
    description: 'Beef goulash for chilly nights. Stir in the soured cream and parsley for an indulgent, crowd-pleasing supper',
    price: '40$',
  });

  return items;
}

function wine() {
  const items = [];
  items.push({
    image: 'wine1',
    name: 'Chateau Margaux Grand Cru 2004',
    description: 'In 2004 he was born in conditions very similar to those of 1996: the same unstable summer weather, the same beautiful autumn, the same rainy harvest',
    price: '700$',
  });
  items.push({
    image: 'wine2',
    name: 'Peplo Rose',
    description: 'The color is bright and fine, the ultimate coral with highlights of red gold. The nose is dominated by red fruits, cherries and strawberries, a trace of citrus fruits, grapefruit lemon',
    price: '300$',
  });
  items.push({
    image: 'wine3',
    name: 'Chardonnay Blank',
    description: 'Bright yellowish-blonde with light green highlights. Intense and complex aroma of yellow fruits, citrus, wax and with gentle notes of tobacco and vanilla',
    price: '400$',
  });
  items.push({
    image: 'wine4',
    name: 'Cote de Beaune 2017',
    description: 'The definition of elegance in red wines, with a quality label from the Côte de Beaune of Burgundy. Beautiful "version" of Pinot Noir with fresh aromas of red fruits',
    price: '600$',
  });


  return items;
}

export {
  salads,
  shellfish,
  fish,
  meat,
  wine,
};
