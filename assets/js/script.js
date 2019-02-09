$(function(){ // Déclare une fonction lors du chargement de la page html
  $('#gameButton').click(function(){ // Je sélectionne le bouton avec l'id gameButton et lors de l'evenement .click je déclare une fonction
    var win = 0;
    var loose = 0;
    var équal = 0;
    var choiceGame=['Feuille','Ciseaux','Pierre'];
    var number=Math.floor(Math.random()*3);
    var choiceComputer=choiceGame[number];
    var choiceUser=$('option:selected').val();
    console.log(choiceComputer);
    console.log(choiceUser)
    if(choiceComputer == choiceUser){
      equal++;
      alert('Egalité'+équal);
    }else if((choiceUser == 'Pierre' && choiceComputer == 'Ciseaux') || (choiceUser == 'Feuille' && choiceComputer == 'Pierre') || (choiceUser == 'Ciseaux' && choiceComputer == 'Feuille')){
      win++;
      alert('Vous avez gagné'+win);
    }else{
      loose++
      alert('Vous avez perdu'+loose);
    }
  });
});
