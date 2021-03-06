# M(MySQL)E(Express)R(React)Telefoanecom



 
<h1 id="cc"> :scroll: Cuprins</h1>
<ol>
    <li>
        <h4>Baze</h4>
        <ol>
            <li><a href="#c11">Spatii</a></li>
            <li><a href="#c12">Variabile</a></li>
            <li><a href="#c13">Unpacking</a></li>
            <li><a href="#c14">Conditii</a></li>
            <li><a href="#c15">For,While</a></li>
            <li><a href="#c16">Array</a></li>
            <li><a href="#c17">Functii si functii lambda</a></li>
            <li><a href="#c18">Lambda shorthand</a></li>
            <li><a href="#c19">Closure</a></li>
            <li><a href="#c110">Triplu si dublu egal</a></li>
            <li><a href="#c111">Array functions</a></li>
            <li><a href="#c112">Array functional programming</a></li>
            <li><a href="#c113">Promisiuni si functii asincrone</a></li>
            <li>
                <a href="#c114">Obiecte</a>
                <ol>
                    <li><a href="#c114a">Obiecte din functii (deprecated)</a></li>
                    <li><a href="#c114b">Obiecte ES6</a></li>
                    <li><a href="#c114c">Obiecte functionale</a></li>
                </ol>
            </li>
            <li><a href="#c115">Spread operator si imutabilitate</a></li>
            <li><a href="#c116">String templates</a></li>
         </ol>
      </li>

</ol>


# CURS JS -ES6 ES2015

<div id="c11"></div>

## 1.1 Spatii <a href="#cc"> :scroll: :arrow_up:</a>

```javascript
//spatiu global
const variabilaGlobalaInFisier = "Eu sunt o varaibila ce poate fi folosita peste tot";
//spatiu privat, sau cu scop
{
    const variabilaScopata = "Eu sunt o variabila ce la sfarsitul blocului va disparea";
    console.log(variabilaScopata);
}
```

<div id="c12"></div>

## 1.2 Variabile <a href="#cc"> :scroll: :arrow_up:</a>

```javascript

    const numar = 10;
    const float = 15.3;
    const boolean = true;
    const char = "a";
    const jsonGol = {};//javascipt object notation
    const json = {
        camp1:10,
        camp2:"caine",
        camp3:false,
        camp4:"a"
    }

    const jsonCompusDinVariabileDeclarate = {
        numar,
        float,
        boolean,
        char
    }


    let variabilaNeconstanta = 10;
    variabilaNeconstanta++;

```
<div id="c13"></div>

## 1.3 Unpacking <a href="#cc"> :scroll: :arrow_up:</a>

```javascript

    const pachet = {
        x:10,
        y:"alpha",
        z:true
    }

    //bad
    const x1 = pachet.x;
    const y1 = pachet.y;
    const z1 = pachet.z;
    console.log(x1);

    //good
    const {x,z} = pachet;
    console.log(x);
    console.log(z);


    const pachet2 = {
        nume:"fabi",
        prenume:"sebi",
        esteOm:true
    }

    const {nume,prenume} = pachet2;
    console.log(nume + " " + prenume);


```

<div id="c14"></div>

## 1.4 Conditii <a href="#cc"> :scroll: :arrow_up:</a>

```javascript
{
    const a = 10;
    const b = 20;

    //if simplu
    if(a > b){
        console.log("a > b");
    }
    else
        console.log("b > a");

    //ternar

    const result = a > b ? "a > b" : "b > a";
    console.log(result);

    //switch
    switch(a){
        case 10:
            console.log("Asta e 10");
            break;
        case "A":
            console.log("Asta e A");
            break;
        default:
            console.log("Nu conteaza");
    }
}
```
<div id="c15"></div>

## 1.5 For,while <a href="#cc"> :scroll: :arrow_up:</a>

```javascript


    for(let i = 0;i < 10;i++)
    {
        console.log(i);
    }
        
    
    let i = 0;
    while(i < 10){
        console.log(i);
        i++;
    }


```
<div id="c16"></div>

## 1.6 Array <a href="#cc"> :scroll: :arrow_up:</a>

```javascript


    const arrGol = [];
    const arr = [1,2,3,4,5];
    const arrMix = [1,"2",true];

    for(let i =0;i < arr.length;i++){
        console.log(arr[i]);
    }

    for(let i =0;i < arrMix.length;i++){
        arrMix[i] = 0;
        console.log(arrMix[i]);
    }

```

<div id="c17"></div>

## 1.7 Functii si functii lambda <a href="#cc"> :scroll: :arrow_up:</a>

```javascript

    function sum(a,b){
        return a + b;
    }

    const sumArrow = (a,b) => {
        return a + b;
    }

    console.log(sum(10,25));
    console.log(sumArrow(10,25));

```

#### Diferenta este data de faptul ca arrow functionul nu are prototyp
```javascript
    console.log(sum.prototype);
    console.log(sumArrow.prototype);
```

<div id="c18"></div>

## 1.8 Lambda shorthand <a href="#cc"> :scroll: :arrow_up:</a>

```javascript

    const patrat = (x) => {
        return x * x;
    }
    
    patrat(10);
```

#### Deoarece functia are un parametru si doar returneaza x * x se poate rescrie astfel

```javascript
   
    const patrat = x => x * x;

    patrat(10);

```

<div id="c19"></div>

## 1.9 Closure <a href="#cc"> :scroll: :arrow_up:</a>

```javascript

    //avem evoie de un scop pentru a apela
    //o functie care doar executa ceva
    {
        (x=>console.log(x+x))(10);
    }
    
    //aici nu avem nevoie de scop 
    //deoarece scopul este dat de console.log
    console.log((x=>x*x)(10));

```

<div id="c110"></div>

## 1.10 Triplu si dublu egal <a href="#cc"> :scroll: :arrow_up:</a>

#### == compara valorile fara a lua in considerare tipul variabilei
#### astfel toate valorile sunt transformate in stringuri
#### === compara valorile dar si tipul fara a transforma valorile

```javascript

    const a = 10;
    const b = "10";
    
    console.log(10 == a);//"10" == "10" true
    console.log(10 == b);//"10" == "10" true

    console.log(10 === a);//10 === 10  true
    console.log(10 === b);//10 === "10" false


```

<div id="c111"></div>

## 1.11 Array functions <a href="#cc"> :scroll: :arrow_up:</a>

```javascript
    const arr = [1,2,3,4,5];
```

### .push( e )

```javascript

   const e = 10;
   arr.push(e);
   
   console.log(arr) //1, 2, 3, 4, 5, 10
   
```

### .pop()

```javascript

   arr.pop();
   
   console.log(arr) //1, 2, 3, 4
```

### .shift()

```javascript

   arr.shift();
   
   console.log(arr) // 2, 3, 4, 5   
```

### .indexOf(e)

```javascript

   const e = 5;
   
   const index1 = arr.indexOf(e);
   const index2 = arr.indexOf(100);
   
   console.log(index1) // 4
   console.log(index1) // -1
```

### .splice(start,stop)

```javascript
   const part1 = arr.splice(0,3);
   
   console.log(part1) // 1, 2, 3
   console.log(arr) //4, 5
```

<div id="c112"></div>

## 1.12 Array functional programming(Functii speciale ale array-urilor) <a href="#cc"> :scroll: :arrow_up:</a>

```javascript

    const arr = [1,2,3,4,5,6,7,8,9,10];
```

### .map( f(e) )

<p> 
 Itereaza prin fiecare element dintr-un array
 si aplica o functie e => f(e)
 returneaza un array cu elemente pe care a fost aplicat f(e)
 unde f(e) este o functie lambda cu un parametru
 [x,y,z].map(e => f(e))  devine [f(x),f(y),f(z)]
</p>


#### Exemplu: Sa se obtina patratul elementelor din arr

```javascript
    const patratArr = arr.map(element => element * element);

    for(let i=0;i<patratArr.length;i++)
        console.log(patratArr[i]);
```

### .filter( f(e) )

<p> 
 Itereaza prin fiecare element dintr-un array si
 returneaza elementele din array pentru care f(e) 
 este true unde f(e) este o functie lambda cu un parametru
 f(e)= e > 0, x,z > 0, y < 0 
 [x,y,z].filter(e => f(e)) devine [x,z]
</p>

#### Exemplu: Sa se obtina numerele pare din arr

```javascript
    const pareArr = arr.filter(element => element % 2 === 0);

    for(let i=0;i<pareArr.length;i++)
        console.log(pareArr[i])
```

### .reduce( g(t,e) , start)

<p> 
 Initializeaza o variabila de total cu valoarea 'start'
 si executa pentru fiecare element 'e' functia g(t,e) si adauga
 rezultatul in variabila de total, unde t este ultimul total
 
 [x,y,z].reduce((e,t) => f(e),start) devine g( g( g(start,x) ,y) ,z)
</p>
 
#### Exemplu: Sa se obtina suma elementelor din arr

```javascript
    const suma = arr.reduce((total,element)=>total+element,0);
```

### .findIndex( f(e) )

<p> 
 Returneaza pozitia primului element pentru care f(e) este true
 
 f(e) = y, [x,y,z].findIndex((e) => f(e)) devine  1
</p>
 
#### Exemplu: Sa se obtina indexul primului element din arr cu valoarea 5


```javascript

    const indexFive = arr.findIndex(element => element === 5);
    console.log(indexFive);

```

### Chaining( Înlanțuire )

<p>
 Fiecare functie speciala care returneaza un array poate fi inlantuita cu o alta functie
 pentru a obtine o flux de operatii.
 <br/>
 O paralela poate fi facuta cu linia de productie dintr-o fabrica de facut haine.
 Materialul initial este trecut printr-un flux de operatii cum ar fi: taiere, coasere, apretare.
 Astfel functia pentru flux s-ar scrie material.taiere().coasere().apretare();
</p>

#### Exemplu: Sa se obtina suma patratelor numerelor pare

```javascript
    const sumaPatratelorNumerelorPareArr = arr.filter(e => e % 2 === 0)
                                              .map(e => e * e)
                                              .reduce((total,e) => total + e, 0);
                                              
    console.log(sumaPatratelorNumerelorPareArr);

```

<div id="c113"></div>

## 1.13 Promisiuni si functii asincrone <a href="#cc"> :scroll: :arrow_up:</a>

```javascript

    //Aceasta este o functie ce dureaza 3 secunde sa se execute
    //Asa ca "promitem" sa "trimitem" rezultatul cand am terminat functia
    const masinaSpalaRufele = () => {
        //Promise este un obiect ce primeste o functie cu 1* parametru
        //si poti controla cand sa trimita rezultatul; In cazul nostru la 
        //executarea setTimeout, care asteapta 3000 milisecunde pana sa execute functia
        //()=>trimite("Am spalat rufe")
        //* poate primi si 2 parametrii, al doilea fiind folosit pentru cand functia
        //este intrerupta, un fel de "trimite rezultat esuat";
        return new Promise((trimite)=>{
            setTimeout(()=>trimite("Am spalat rufele!"),3000);
        })
    }



    //aici avem o functie async care
    //are proprietatea ca va astepta daca i se va cere acest lucru
    const spalaRufele = async ()=>{
        //afisam textul
        console.log("Am pus rufe in masina de spalat, o sa dureze 3 secunde");
        //asteptam sa se indeplineasca promisiunea
        const result = await masinaSpalaRufele(); 
        //si DOAR dupa ce s-a indeplinit promisiunea afisam rezultatul 
        console.log(result);
    };


    //aici avem o functie syncrona care 
    //nu asteapta si executa totul linie cu linie
    const aspira = () => console.log("Am aspirat!");
    const curataPraful = () => console.log("Am curatat praful!");

    spalaRufele();
    aspira();
    curataPraful();
    
    //o alta metoda de a folosi un promise
    //este folosirea operatorului .then
    //fie asupra unei variabile ce are un promise fie asupra 
    //unei functii ce returneaza un promise
    
    //ambele functii se vor realiza asincron
    masinaSpalaRufele().then(rezultat => console.log(rezultat))
    const rezultatSpalare = masinaSpalaRufele();
    
    rezultatSpalare.then(rezultat => console.log(rezultat));

```

<div id="c114"></div>

## 1.14 Obiecte in js <a href="#cc"> :scroll: :arrow_up:</a>

<div id="c114a"></div>

### obiecte din functii (deprecated) <a href="#cc"> :scroll: :arrow_up:</a>
```javascript

    function Animal(nume){
        this.nume = nume;
    }
    
    Animal.prototype.sayMyName = function(){
        console.log(this.nume);
    }

    const dog = new Animal("dog function");
    dog.sayMyName();

```

<div id="c114b"></div>

### obiecte ES6 <a href="#cc"> :scroll: :arrow_up:</a>
```javascript

    class Animal{
        constructor(nume){
            this.nume = nume;
        }

        sayMyName(){
            console.log(this.nume);
        }
    }

    const dog = new Animal("dog clasic es6");
    dog.sayMyName();

```

<div id="c114c"></div>

### obiecte functionale <a href="#cc"> :scroll: :arrow_up:</a>
```javascript

    const Animal = (nume) => ({
        nume,
        sayMyName:()=>console.log(nume)
    });

    const dog = Animal("dog fuctional lambda");
    dog.sayMyName();


```

<div id="c115"></div>

## 1.15 Spread operator si imutabilitate <a href="#cc"> :scroll: :arrow_up:</a>

#### IMUTABILITATE : FOLOSIREA PREPONDERENTA A VARIABILELOR CONSTANTE, ASTFEL SUNTEM SIGURI CA O VARIABILA NU ISI MODIFICA VALOAREA DE LA DECLARARE PANA LA UTILIZARE
#### ORICE VARIABILA MODIFICATA INSEAMNA O VARIABILA NOUA
```javascript

   //declaram un json
    const pachet = {
        x:10,
        y:20,
        z:30
    }
 
     //vrem sa creem o variabila in care 
     //adaugam toate variabilele din pachet
     //plus inca un camp nou
     const pachetImutabil = {
         ...pachet,
         campNou:"string"
     }
 
 
      //folosim acest sprea operator si pentru a 
      //combina 2 vectori
      const v1 = [1,2,3];
      const v2 = [4,5,6];

      const vectorImutabil = [...v1,...v2];
```

<div id="c116"></div>

## 1.16 String templates <a href="#cc"> :scroll: :arrow_up:</a>

#### Pentru a nu mai folosi + la concatenarea sirurilor de caractere cu variabile vom folosi 
```javascript 
      const textConcat = "Text nomodificabil" + variabila + " text nemodificabil";
      const textTemplate = `Text nemodificabil ${variabila} text nemodificabil`;
```
```javascript

      const es = "ES";
      const six = 6;

      console.log(`Hello from Javascript ${es}${six} !!!`);

```









