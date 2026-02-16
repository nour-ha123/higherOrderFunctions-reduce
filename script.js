function reduce(tab, func, start) {
    if (start === undefined) {
        start = tab[0]
        tab = tab.slice(1)
    }
    each(tab, function (el, i) {
        start = func(start, el, i)
    })
    return start

}
// ex1
function averageAge(people) {
    var totalAge = reduce(people, function(acc, person) {
        return acc + person.age;
    }, 0); 
    return totalAge / people.length;
}

// ex2

// ex3
function countOccurrences(chaine, caractere) {
    var lettres = chaine.split('');

    return reduce(lettres, function(acc, el) {
        if (el === caractere) {
            return acc + 1;
        }
        return acc;
    }, 0);
}

// ex4
function tousImpairs(nombres) {
    return reduce(nombres, function(acc, el) {
      return acc && (el % 2 !== 0);
    }, true);
}
function tousPositifs(nombres) {
    return reduce(nombres, function(acc, el) {
      return acc && (el >= 0);
    }, true);
}
function longueurSuperieureA3(chaines) {
    return reduce(chaines, function(acc, el) {
      return acc && (el.length > 3);
    }, true);
}

// ex 6
function agesSuperieursA30(people) {
    return reduce(people, function(acc) {
      return acc.age > 30;
    });
}

// ex8
function prenomsLongs(people) {
    return every(people, function(person) {
      return person.name.first.length >= 3;
    });
}

// ex9
function sommeAgesSup200(people) {
    var totalSum = reduce(people, function(acc, person) {
      return acc + person.age;
    }, 0);
  
    return totalSum > 200;
}

// ex10
function nomsMajuscule(people) {
    return every(people, function(person) {
      var nom = person.name.last;
      return nom[0] === nom[0].toUpperCase();
    });
}