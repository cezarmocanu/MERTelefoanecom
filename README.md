# M(MySQL)E(Express)R(React)Telefoanecom

<h1>Cuprins</h1>

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
            <li><a href="#c110">Spatii</a></li>
            <li><a href="#c111">Spatii</a></li>
            <li><a href="#c112">Spatii</a></li>
            <li><a href="#c113">Spatii</a></li>
            <li><a href="#c114">Spatii</a></li>
            <li><a href="#c115">Spatii</a></li>
            
           
        </ol>
    </li>
    
</ol>

# CURS JS
# 1.BAZE
# ES6 ES2015

## 1.1 Spatii


#### spatiu global
```javascript
const variabilaGlobalaInFisier = "Eu sunt o varaibila ce poate fi folosita peste tot";
//spatiu privat, sau cu scop
{
    const variabilaScopata = "Eu sunt o variabila ce la sfarsitul blocului va disparea";
    console.log(variabilaScopata);
}
```

## 1.2 Variabile
```javascript
{
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
}
```

## 1.3 Unpacking
```javascript
{
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

}
```


## 1.4 Conditii
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

## 1.5 For,while
```javascript
{

    for(let i = 0;i < 10;i++)
    {
        console.log(i);
    }
        
    
    let i = 0;
    while(i < 10){
        console.log(i);
        i++;
    }

}
```

## 1.6 Array
```javascript
{

    const arrGol = [];
    const arr = [1,2,3,4,5];
    const arrMix = [1,"2",true];

    console.log("ARRAY")

    for(let i =0;i < arr.length;i++){
        console.log(arr[i]);
    }

    for(let i =0;i < arrMix.length;i++){
        arrMix[i] = 0;
        console.log(arrMix[i]);

    }
}
```

## 1.7 Functii si functii lambda
```javascript
{
    function sum(a,b){
        return a + b;
    }

    console.log(sum(10,25));

    const sumArrow = (a,b) => {
        return a + b;
    }

    console.log(sumArrow(10,25));


    console.log(sum.prototype);
    console.log(sumArrow.prototype);
}
```

## 1.8 Lambda shorthand
```javascript
{
    const patrat = (x) => {
        return x * x;
    }

    patrat(5);

    const patrat2 = x => x * x;

    patrat2(10);
}
```

## 1.9 Closure
```javascript
{
    console.log("CLOSURE")
    //avem evoie de un scop
    {
        console.log((x=>x*x)(10));
    }
}
```


## 1.10 Triplu si dublu egal
```javascript
{
    console.log("EGALI")
    const a = 10;
    const b = "10";
    
    console.log(10 == a);//"10" == "10" /true
    console.log(10 == b);//"10" == "10" /true

    console.log(10 === a);//10 === 10 ? true
    console.log(10 === b);//10 === "10" ? false

}
```
## 1.11 Array functions
```javascript
```

## 1.12 Array special functions
```javascript
{
    const arr = [1,2,3,4,5,6,7,8,9,10];

    //patratul de la fiecare numar din arr
    
    const patratArr = arr.map(element => element * element);

    for(let i=0;i<patratArr.length;i++)
        console.log(patratArr[i]);

    //numerele pare din arr

    const pareArr = arr.filter(element => element % 2 === 0);

    for(let i=0;i<pareArr.length;i++)
        console.log(pareArr[i])

    //suma elementelor din arr

    const suma = arr.reduce((total,element)=>total+element,0);

    /*
    total = 0

    element = 1
    total = total + element // 1
    
    element = 2
    total = total + element // 3

    element = 3
    total = total + element // 6

    */
    console.log(suma);

    const indexFive = arr.findIndex(element => element === 5);

    console.log(indexFive)


    //chaining

    const sumaPatratelorNumerelorPareArr = arr.filter(e => e % 2 === 0)
                                              .map(e => e * e)
                                              .reduce((total,e) => total + e, 0);
    
    console.log(sumaPatratelorNumerelorPareArr);
}
```


## 1.13 Promisiuni si functii asincrone
```javascript
{
    console.log("PROMISE")

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
}
```

## 1.14 Obiecte in js

### obiecte din functii (deprecated)
```javascript
{
    function Animal(nume){
        this.nume = nume;
    }
    
    Animal.prototype.sayMyName = function(){
        console.log(this.nume);
    }

    const dog = new Animal("dog function");
    dog.sayMyName();
}
```

### obiecte clasice (ES6)
```javascript
{
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
}
```

### obiecte functionale
```javascript
{
    const Animal = (nume) => ({
        nume,
        sayMyName:()=>console.log(nume)
    });

    const dog = Animal("dog fuctional lambda");
    dog.sayMyName();

}
```

## 1.15 Spread operator

```javascript
//folosim acest operator 
//pentru a ajunge la imutabilitate
//ADICA: VREM SA FOLOSIM PREPONDERENT SPRE ABSOLUT
//VARIABILE CONSTANTE CU CONTINUT CONSTANT
 
//IMUTABILITATEA SE ASIGURA CA NU SE VOR MODIFICA VARIABILE 
//DE LA DECLARAREA LOR PANA LA FOLOSIREA LOR
//ORICE VARIABILA MODIFICATA INSEAMNA O VARIABILA NOUA
 
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
















