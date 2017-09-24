import {ISushi, TAGS, CATEGORY} from './sushi/sushi.class';

export var SUSHIES: ISushi[] = [
   {
      id: 1,
      name: 'riso',
      price: 2.50,
      ingredient: 'Riso bianco con sesamo',
      unit: 1,
      tags: [
         TAGS.VEGETARIANO,
         TAGS.SENZA_GLUTINE
      ],
      order: 0,
      category: CATEGORY.STARTER,
      avaiable: true
   },
   {
      id: 2,
      name: 'ikansai salad',
      price: 5.00,
      ingredient: 'Insalata di calamari, funghi shitake, verdure, zenzero',
      unit: 1,
      tags: [
         TAGS.PESCE_COTTO,
         TAGS.PICCANTE
      ],
      order: 0,
      category: CATEGORY.STARTER,
      avaiable: true
   },
   {
      id: 3,
      name: 'wakame salad',
      price: 4.00,
      ingredient: 'Insalata d’alghe wakame piccanti',
      unit: 1,
      tags: [
         TAGS.VEGETARIANO,
         TAGS.PICCANTE,
         TAGS.SENZA_GLUTINE
      ],
      order: 0,
      category: CATEGORY.STARTER,
      avaiable: true
   },
   {
      id: 4,
      name: 'spring rolls',
      price: 5.00,
      ingredient: 'Involtino di alga di riso ripieno di gamberi cotti,carote,lattuga,germogli di soya,uova,mayo,salsa agrodolce,menta',
      unit: 2,
      tags: [
         TAGS.PESCE_COTTO,
         TAGS.SENZA_GLUTINE
      ],
      order: 0,
      category: CATEGORY.STARTER,
      avaiable: true
   },
   {
      id: 5,
      name: 'fast love',
      price: 7.00,
      ingredient: '2 Salmone, 2 tonno, 2 gamberi cotti',
      unit: 6,
      tags: [
         TAGS.PESCE_CRUDO,
         TAGS.SENZA_GLUTINE
      ],
      order: 0,
      category: CATEGORY.MIXED,
      avaiable: true
   },
   {
      id: 6,
      name: 'gynza',
      price: 12.00,
      ingredient: 'Oshi-Zushi pressato con tartare di salmone,ikura,avocado e salsa allo shiso',
      unit: 6,
      tags: [
         TAGS.PESCE_CRUDO
      ],
      order: 0,
      category: CATEGORY.MIXED,
      avaiable: true
   },
   {
      id: 7,
      name: 'takeshita street',
      price: 14.00,
      ingredient: 'Oshi-Zushi pressato con salmone Teriyaki alla piastra,mozzarella di bufala,cipolla fritta,spicy mayo',
      unit: 6,
      tags: [
         TAGS.PESCE_COTTO,
         TAGS.PICCANTE
      ],
      order: 0,
      category: CATEGORY.MIXED,
      avaiable: true
   },
   {
      id: 8,
      name: 'marismo',
      price: 14.00,
      ingredient: '2 Salmone, 2 tonno, 2 gamberi cotti, 1 branzino, 1 ricciola, 4 uramaki, 2 hosomaki',
      unit: 14,
      tags: [
         TAGS.PESCE_CRUDO,
         TAGS.SENZA_GLUTINE
      ],
      order: 0,
      category: CATEGORY.MIXED,
      avaiable: false
   },
   {
      id: 9,
      name: 'thai salad',
      price: 7.00,
      ingredient: 'Insalata valeriana, scampi scottati, germogli di soya, mango, granella di nocciole, latte di cocco',
      unit: 1,
      tags: [
         TAGS.PESCE_COTTO,
      ],
      order: 0,
      category: CATEGORY.SALADS,
      avaiable: true
   },
   {
      id: 10,
      name: 'cin love',
      price: 7.00,
      ingredient: 'Insalata verde con granchio, tonno sashimi, pomodori, cetrioli, gamberi cotti, sesamo',
      unit: 1,
      tags: [
         TAGS.PESCE_CRUDO,
         TAGS.SENZA_GLUTINE
      ],
      order: 0,
      category: CATEGORY.SALADS,
      avaiable: true
   },
   {
      id: 11,
      name: 'sashiten',
      price: 12.00,
      ingredient: '5 Salmone, 5 tonno',
      unit: 10,
      tags: [
         TAGS.PESCE_CRUDO,
         TAGS.SENZA_GLUTINE
      ],
      order: 0,
      category: CATEGORY.SASHIMI,
      avaiable: true
   },
   {
      id: 12,
      name: 'sashigold',
      price: 15.00,
      ingredient: '4 Salmone, 4 tonno, 4 branzino, 3 gamberi crudi',
      unit: 15,
      tags: [
         TAGS.PESCE_CRUDO,
         TAGS.SENZA_GLUTINE
      ],
      order: 0,
      category: CATEGORY.SASHIMI,
      avaiable: true
   },
   {
      id: 13,
      name: 'yakisoba veggy',
      price: 8.00,
      ingredient: 'Spaghetti di grano saraceno con verdure',
      unit: 1,
      tags: [
         TAGS.VEGETARIANO
      ],
      order: 0,
      category: CATEGORY.HOT_DISHES,
      avaiable: true
   },
   {
      id: 14,
      name: 'goa fish',
      price: 8.00,
      ingredient: 'Riso saltato alla piastra con gamberi, granchio,japanese crabstick, zucchine e uova',
      unit: 1,
      tags: [
         TAGS.PESCE_COTTO
      ],
      order: 0,
      category: CATEGORY.HOT_DISHES,
      avaiable: true
   },
   {
      id: 15,
      name: 'shao mai',
      price: 6.00,
      ingredient: 'Ravioli di gamberi thailandesi cotti al vapore accompagnati da salsa agrodolce',
      unit: 1,
      tags: [
         TAGS.PESCE_COTTO
      ],
      order: 0,
      category: CATEGORY.HOT_DISHES,
      avaiable: true
   },
   {
      id: 16,
      name: 'south beach',
      price: 12.00,
      ingredient: 'Salmone flambato,mango,avocado,fragole,mandorle,tobikko,salsa teriyaki',
      unit: 8,
      tags: [
         TAGS.PESCE_COTTO
      ],
      order: 0,
      category: CATEGORY.MAKI,
      avaiable: false
   },
   {
      id: 17,
      name: 'sake temaki',
      price: 4.00,
      ingredient: 'Salmone, philadelphia, avocado',
      unit: 1,
      tags: [
         TAGS.PESCE_CRUDO,
         TAGS.SENZA_GLUTINE
      ],
      order: 0,
      category: CATEGORY.MAKI,
      avaiable: true
   },
   {
      id: 18,
      name: 'maguro temaki',
      price: 4.00,
      ingredient: 'Tonno, avocado',
      unit: 1,
      tags: [
         TAGS.PESCE_CRUDO,
         TAGS.SENZA_GLUTINE
      ],
      order: 0,
      category: CATEGORY.MAKI,
      avaiable: true
   },
   {
      id: 19,
      name: 'tuna tataki',
      price: 12.00,
      ingredient: 'Tonno scottato alla piastra con sesamo',
      unit: 1,
      tags: [
         TAGS.PESCE_COTTO,
         TAGS.SENZA_GLUTINE
      ],
      order: 0,
      category: CATEGORY.HOT_DISHES,
      avaiable: true
   },
   {
      id: 20,
      name: 'barca mista',
      price: 49.00,
      ingredient: '40 pezzi assortiti, un mix di tutti i pezzi più pregiati tra nigiri, maki, sashimi, temaki e bignè (verrà impiattata in vassoio grande nero per asporto)',
      unit: 40,
      tags: [
         TAGS.PESCE_COTTO,
         TAGS.PESCE_CRUDO
      ],
      order: 0,
      category: CATEGORY.BARCHE_MIX,
      avaiable: true
   }
];
