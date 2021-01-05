import './styles.scss';
import $ from 'jquery';

// phrases qui arrivent aléatoirement
const phrases = ['C est possible, mais n espèrez pas trop!',
  'c est certain!', 'Impossible!', 'Pas pour l instant!', 'Trop drôle!', 'Peut être!', 'Pourquoi pas!', 'Honnêtement...non!', 'Vraiment!', 'Aucune idée!',
];

function getRamdomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
const p = getRamdomInt(10);
const phrase = (phrases[p]);

// $('section').hide();
// action quand on click le bouton
$('button').on('click', () => {
  // action 1: la div apparaît mais fonctionne pas!
  console.log('toto');
  setTimeout(() => {
    $('section').empty();
    $('section').append('<p>Divination en cours</p>');
  }, 5000);
  // action 2: la phrase alétoire
  $('section').empty();
  $('section').append(`<p>${phrase}</p>`);
});
