// Starter catalog with JPG images
// Place JPG files in: assets/products/

window.PRODUCTS = [
  {
    id: 'lip-rubywoo',
    name: 'Matte Lipstick – Ruby Woo',
    category: 'Lips',
    type: 'Lipstick',
    finish: 'Matte',
    coverage: 'Opaque',
    wear_time: 'Up to 8H',
    description: 'The iconic, vivid blue-red that flatters all skin tones with a retro matte finish.',
    key_benefits: ['Highly pigmented', 'Non-smudging', 'Classic blue-red'],
    priceINR: 2050,
    rating: 4.8,
    size: '3g',
    derm_tested: true,
    popularity: 100,
    buyLink: 'https://www.maccosmetics.in/',
    image: 'assets/products/ruby-woo.jpg',
    shades: [ { name: 'Ruby Woo', hex: '#B0002D' } ]
  },

  {
    id: 'face-studiofix-fluid',
    name: 'Studio Fix Fluid SPF 15',
    category: 'Face',
    type: 'Foundation',
    finish: 'Natural',
    coverage: 'Medium-Full',
    wear_time: 'Up to 24H',
    description: 'Long-wearing, buildable coverage with shine control and a natural matte finish. Includes SPF 15.',
    key_benefits: ['Long wear', 'Controls shine', 'Buildable coverage'],
    priceINR: 3600,
    rating: 4.6,
    size: '30ml',
    spf: 'SPF 15',
    derm_tested: true,
    popularity: 95,
    buyLink: 'https://www.maccosmetics.in/',
    image: 'assets/products/studio-fix-fluid.jpg',
    shades: [
      { name: 'NC15', hex: '#E7CFB4' },
      { name: 'NC25', hex: '#E2C39F' },
      { name: 'NC42', hex: '#C89564' },
      { name: 'NW45', hex: '#8F5A3C' }
    ]
  },

  {
    id: 'face-fixplus',
    name: 'Prep + Prime Fix+ Setting Spray',
    category: 'Face',
    type: 'Setting Spray',
    finish: 'Natural',
    coverage: '—',
    wear_time: '—',
    description: 'Hydrating mist to refresh skin and set makeup for a smoother, dewier look.',
    key_benefits: ['Hydrates', 'Sets makeup', 'Soothes skin'],
    priceINR: 2350,
    rating: 4.7,
    size: '100ml',
    derm_tested: true,
    popularity: 88,
    buyLink: 'https://www.maccosmetics.in/',
    image: 'assets/products/fix-plus.jpg',
    shades: []
  },

  {
    id: 'eyes-3d-mascara',
    name: 'In Extreme Dimension 3D Black Lash Mascara',
    category: 'Eyes',
    type: 'Mascara',
    finish: '—',
    coverage: '—',
    wear_time: 'All day',
    description: 'A lightweight, whipped formula that adds dense volume, extends length, and curls for a dramatic 3D effect.',
    key_benefits: ['Volumizes', 'Lengthens', 'Curls'],
    priceINR: 2450,
    rating: 4.5,
    size: '13ml',
    derm_tested: true,
    popularity: 80,
    buyLink: 'https://www.maccosmetics.in/',
    image: 'assets/products/3d-black-lash.jpg',
    shades: [ { name: 'Black', hex: '#000000' } ]
  },

  {
    id: 'face-prolongwear-concealer',
    name: 'Pro Longwear Concealer',
    category: 'Face',
    type: 'Concealer',
    finish: 'Natural',
    coverage: 'Full',
    wear_time: 'Up to 24H',
    description: 'Lightweight liquid concealer with comfortable, natural finish and long wear.',
    key_benefits: ['Crease-resistant', 'Long-wear', 'Full coverage'],
    priceINR: 2900,
    rating: 4.4,
    size: '9ml',
    derm_tested: true,
    popularity: 73,
    buyLink: 'https://www.maccosmetics.in/',
    image: 'assets/products/pro-longwear-concealer.jpg',
    shades: [
      { name: 'NC20', hex: '#E8C9A6' },
      { name: 'NW25', hex: '#D7A788' },
      { name: 'NC45', hex: '#9C6B41' }
    ]
  },

  {
    id: 'face-mineralize-skinfinish',
    name: 'Mineralize Skinfinish Highlighter',
    category: 'Face',
    type: 'Highlighter',
    finish: 'Radiant',
    coverage: 'Sheer',
    wear_time: 'All day',
    description: 'Baked highlighter that delivers a luminous, lit-from-within glow.',
    key_benefits: ['Luminous glow', 'Finely milled', 'Buildable'],
    priceINR: 3600,
    rating: 4.6,
    size: '10g',
    derm_tested: true,
    popularity: 68,
    image: 'assets/products/mineralize-skinfinish.jpg',
    shades: [
      { name: 'Soft & Gentle', hex: '#D9BDAA' },
      { name: 'Global Glow', hex: '#C09A7B' }
    ]
  },

  {
    id: 'lips-powder-kiss',
    name: 'Powder Kiss Lipstick – Devoted to Chili',
    category: 'Lips',
    type: 'Lipstick',
    finish: 'Matte',
    coverage: 'Medium',
    wear_time: 'Up to 10H',
    description: 'Blurred-matte, moisture-matte lipstick with soft-focus color and weightless feel.',
    key_benefits: ['Soft-focus finish', 'Comfort matte', 'Hydrating'],
    priceINR: 2450,
    rating: 4.5,
    size: '3g',
    derm_tested: true,
    popularity: 75,
    image: 'assets/products/powder-kiss-devoted-to-chili.jpg',
    shades: [ { name: 'Devoted to Chili', hex: '#AD3A2B' } ]
  },

  {
    id: 'eyes-pro-pallete-carbon',
    name: 'Eye Shadow – Carbon',
    category: 'Eyes',
    type: 'Single Eye Shadow',
    finish: 'Matte',
    coverage: 'Buildable',
    wear_time: 'All day',
    description: 'Deep matte black eyeshadow for smoky looks and lining.',
    key_benefits: ['Highly pigmented', 'Blendable', 'Pro staple'],
    priceINR: 1900,
    rating: 4.3,
    size: '1.5g',
    derm_tested: true,
    popularity: 60,
    image: 'assets/products/eyeshadow-carbon.jpg',
    shades: [ { name: 'Carbon', hex: '#0E0E10' } ]
  },

  {
    id: 'tools-217s',
    name: '217S Blending Brush',
    category: 'Tools',
    type: 'Blending Brush',
    finish: '—',
    coverage: '—',
    wear_time: '—',
    description: 'Iconic shader/blending brush for seamless crease work and soft transitions.',
    key_benefits: ['Versatile shape', 'Pro finish', 'Durable'],
    priceINR: 2950,
    rating: 4.7,
    size: '—',
    derm_tested: false,
    popularity: 55,
    image: 'assets/products/brush-217s.jpg',
    shades: []
  }
];
