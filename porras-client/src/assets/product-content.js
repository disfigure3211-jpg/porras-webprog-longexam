import nuCapImg from './img/nu_cap.webp';
import volleyballShirtImg from './img/shirt_volleyball.jpeg';
import sigmaLongsleveImg from './img/sigma_longsleeve.webp';
import flaskImg from './img/flask.jpeg';
import lanyardImg from './img/lanyard.jpeg';
import toteImg from './img/tote.jpeg';
import lampImg from './img/lamp.jpg';
import packImg from './img/pack.jpeg';
import meshJerseyImg from './img/mesh_jersey.jpeg';

const products = [
  {
    name: 'campus-tote-bag',
    title: 'Campus Tote Bag',
    category: 'Bags',
    price: 'PHP 499',
    stock: 'In stock',
    image: toteImg,
    content: [
      'A roomy everyday tote for books, gym clothes, chargers, and quick campus errands.',
      'Made with thick canvas, reinforced handles, and a clean monochrome print.',
      'Best for students who want one simple carry-all bag for class and after-class plans.',
    ],
  },
  {
    name: 'daily-notes-pack',
    title: 'Daily Notes Pack',
    category: 'Stationery',
    price: 'PHP 249',
    stock: 'In stock',
    image: packImg,
    content: [
      'A practical bundle of notebooks, sticky notes, and quick-label tabs for daily class work.',
      'The set is light, compact, and easy to keep inside a backpack or locker.',
      'Useful for lectures, reminders, project lists, and exam review schedules.',
    ],
  },
  {
    name: 'stainless-tumbler',
    title: 'Stainless Tumbler',
    category: 'Drinkware',
    price: 'PHP 599',
    stock: 'Low stock',
    image: flaskImg,
    content: [
      'A double-wall tumbler built for water, coffee, or tea during long school days.',
      'The matte finish keeps the look simple while the lid helps reduce spills in your bag.',
      'Fits most side pockets and keeps drinks ready between classes.',
    ],
  },
  {
    name: 'wireless-study-lamp',
    title: 'Wireless Study Lamp',
    category: 'Tech',
    price: 'PHP 899',
    stock: 'In stock',
    image: lampImg,
    content: [
      'A compact rechargeable lamp for dorm desks, night study sessions, and small workspaces.',
      'It has three brightness levels and a foldable body that stores neatly after use.',
      'Good for reading, writing, and focused desk work without taking too much space.',
    ],
  },
  {
    name: 'id-lanyard-set',
    title: 'ID Lanyard Set',
    category: 'Accessories',
    price: 'PHP 179',
    stock: 'In stock',
    image: lanyardImg,
    content: [
      'A durable lanyard and card holder set for IDs, access cards, and small passes.',
      'The clip is easy to detach when scanning or presenting credentials.',
      'Simple enough for daily use and sturdy enough for a full semester.',
    ],
  },
  {
    name: 'nu-cap 1900',
    title: 'NU Cap 1900',
    category: 'Apparel',
    price: 'PHP 349',
    stock: 'In stock',
    image: nuCapImg,
    content: [
      'A classic NU cap perfect for campus life and outdoor activities.',
      'Made with comfortable, breathable fabric for all-day wear.',
      'Great for repping your university with pride and style.',
    ],
  },
  {
    name: 'shirt-volleyball',
    title: 'Volleyball Shirt',
    category: 'Apparel',
    price: 'PHP 599',
    stock: 'In stock',
    image: volleyballShirtImg,
    content: [
      'A performance-ready volleyball shirt designed for comfort and mobility.',
      'Lightweight fabric allows for easy movement during sports and active wear.',
      'Perfect for athletes and volleyball enthusiasts on and off the court.',
    ],
  },
  {
    name: 'sigma-longsleeve',
    title: 'Sigma Long Sleeve',
    category: 'Apparel',
    price: 'PHP 649',
    stock: 'In stock',
    image: sigmaLongsleveImg,
    content: [
      'A versatile long sleeve shirt with a sleek Sigma design.',
      'Quality cotton blend provides comfort and durability for everyday wear.',
      'Ideal for layering or wearing solo throughout different seasons.',
    ],
  },
  {
    name: 'mesh-jersey-shirt',
    title: 'Mesh Jersey Shirt',
    category: 'Apparel',
    price: 'PHP 549',
    stock: 'In stock',
    image: meshJerseyImg,
    content: [
      'A lightweight mesh jersey designed for active campus life and team spirit.',
      'Breathable material keeps you cool during school activities or weekend workouts.',
      'Features a relaxed fit, bold detailing, and easy styling with shorts or jeans.',
    ],
  },
];

export default products;
