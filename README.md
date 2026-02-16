# higherOrderFunctions-reduce



## Données

```javascript
var people = [ 
  {name: {first: 'Grace', middle: 'B.', last: 'Hopper'}, age: 85}, 
  {name: {first: 'Adele', last: 'Goldstine'}, age: 43}, 
  {name: {first: 'Ada', last: 'Lovelace'}, age: 36}, 
  {name: {first: 'Hedy', middle: 'E.', last: 'Lamarr'}, age: 85}, 
  {name: {first: 'Ruchi', last: 'Sanghvi'}, age: 34} 
]; 
```

---

## 1 — Âge moyen

Écris une fonction `averageAge` qui retourne l’âge moyen des personnes.

Étapes :
1. Calculer la somme des âges
2. Diviser par le nombre de personnes (`people.length`)

```javascript
function averageAge(people) {
}
```

---

## 2 — Factorielle avec range et reduce

On te donne la fonction `range` :

```javascript
function range(start, end) { 
  var acc = []; 
  for (var i = start; i < end; i++) { 
    acc.push(i); 
  } 
  return acc; 
}
```

En utilisant `range` et `reduce`, complète la fonction `factorial` qui calcule la factorielle de `n`.

```javascript
function factorial(n) {
}
```

Exemples :

```javascript
factorial(5); // => 120
factorial(3); // => 6
```

---

## 3 — Compter les occurrences

Écris une fonction `countOccurrences` qui prend :
- une chaîne
- un caractère

et retourne le nombre de fois que ce caractère apparaît.

```javascript
function countOccurrences(chaine, caractere) {
}
```

Exemples :

```javascript
countOccurrences('hello', 'l'); // => 2
countOccurrences('the', 'z'); // => 0
countOccurrences('hello, world!', 'l'); // => 3
```

---

## 4 — Fonctions "every"

Écris des fonctions qui vérifient si :

### a) Tous les nombres sont impairs

```javascript
function tousImpairs(nombres) {
}
```

---

### b) Tous les nombres sont positifs

```javascript
function tousPositifs(nombres) {
}
```

---

### c) Toutes les chaînes ont une longueur supérieure à 3

```javascript
function longueurSuperieureA3(chaines) {
}
```

---

### d) Toutes les chaînes contiennent la lettre "e"

```javascript
function contiennentE(chaines) {
}
```

---

## 5 — Fonction every

Écris une fonction `every` qui prend :
- un tableau
- une fonction prédicat (qui retourne true ou false)

`every` doit retourner `true` si le prédicat est vrai pour **tous** les éléments.

```javascript
function every(tab, predicate) {
}
```

Tu dois pouvoir écrire :

```javascript
function everyNumberEven(numbers) { 
  return every(numbers, function(number) { 
    return number % 2 === 0; 
  }); 
}
```

---


### 6 — Tous les âges sont supérieurs à 30

```javascript
function agesSuperieursA30(people) {
}
```

---

### 7 — Toutes les personnes ont un prénom

```javascript
function tousOntPrenom(people) {
}
```

---

### 8 — Tous les prénoms contiennent au moins 3 lettres

```javascript
function prenomsLongs(people) {
  // Écris ton code ici
}
```

---

### 9 — Somme des âges > 200

Écris une fonction qui retourne true si la somme des âges est supérieure à 200.

```javascript
function sommeAgesSup200(people) {
}
```

---

### 10 — Tous les noms de famille commencent par une majuscule

```javascript
function nomsMajuscule(people) {
}
```
