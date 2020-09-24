<ol>
<li>   
    <h2>Creeaza doua functii ce returneaza suma a doua numere a,b. Functiile vor returna rezultatul </h2>
    <ol>
        <li>Ca si int</li>
        <li>Ca si un json, cu un camp result</li>
    </ol>
    </li>
<li>
<h2>Creeaza doua arrow function, respectand cerintele de la punctul 1</h2>
    </li>
<li>
<h2>Se dau listele v1, v2 care au  in ele numere. Sa se faca functii care sa returneze:</h2>
<ol>
    <li>Un nou vector ce contine valorile din ambii vectori</li>
    <li>Suma elementelor din ambii vectori</li>
    <li>Se inlatura toate valorile de 0 din ambii vectori si returneaza rezultatul ca un vector nou</li>
</ol>

```javascript
const v1 = [1,0,0,4,5];
const v2 = [6,0,8,9,0];
```
</li>

<li>
<h2>Se da secventa urmatoare. Foloseste <a href="https://github.com/cezarmocanu/MERTelefoanecom#c112">functiile speciale ale array-urilor</a> pentru a crea o noua functie in care se va scurta sintaxa si se vor corecta erorile de <a href="https://github.com/cezarmocanu/MERTelefoanecom#c115">imutabilitate</a></h2>

```javascript
const v = [
    {nume:"A",salariuBrut:2500,salariuNet:1000},
    {nume:"B",salariuBrut:6000,salariuNet:4000},
    {nume:"C",salariuBrut:4300,salariuNet:3000},
    {nume:"D",salariuBrut:1500,salariuNet:1250},
    {nume:"E",salariuBrut:2850,salariuNet:2500},
    {nume:"F",salariuBrut:1000,salariuNet:250},
    {nume:"G",salariuBrut:1900,salariuNet:400},
    ]

function weCanDoBetter(v){
    let filtered = [];
    for(let i=0;i<v.length;i++)
        if(v[i].salariuBrut > 2000)
            filtered.push(v[i]);

    let sumBrut = 0;
    let sumNet = 0;
    let i2 = 0;
    while(i2 < filtered.length){
        sumBrut += filtered[i2].salariuBrut;
        sumNet += filtered[i2].salariuNet;
        i2++;
    }

    let result = {
        sumBrut:sumBrut,
        sumNet:sumNet
    }
    return result;
}
 

console.log(weCanDoBetter(v));
```
</li>

<li>
<h2>Se dau cele doua obiecte result1, si result2.</h2>
<p>Stiind ca in result1 sunt reprezentati utilizatorii iar result2 reprezinta o lista de vehicule care corespunde unor utilizator sa se creeze o functie care primeste ca parametrii cele doua liste si returneaza o lista cu json-uri combinate. In fiecare json vor fi datale despre utilizator precum si o lista cu vehiculele sale.</p>

### Exemplu date de intrare:

```javascript
const result1 = {
    data:[
        {id:1,name:"Vlad",varsta:25,casatorit:false},
        {id:2,name:"Eugen",varsta:33,casatorit:true},
        {id:3,name:"Maria",varsta:29,casatorit:false},
        {id:4,name:"Elena",varsta:11,casatorit:false},
        {id:5,name:"Mihai",varsta:29,casatorit:true},
        {id:6,name:"Petru",varsta:55,casatorit:true}
    ]
}

const result2 = {
    data:[
        {
        proprietar:2,
        vehicule:[
            {
                marca:"Ford",
                model:"Fiesta",
                an:2005
            },
            {
                marca:"Dacia",
                model:"Logan",
                an:2010
            },
            {
                marca:"Mercedes",
                model:"Benz",
                an:2002
            }
        ]},
        {
            proprietar:4,
            vehicule:[
                {
                    marca:"Peugeot",
                    model:"307",
                    an:2004
                },
                {
                    marca:"Volkswagen",
                    model:"Lupo",
                    an:1999
                }
            ]
        },
        {
            proprietar:6,
            vehicule:[
                {marca:"Lamborghini",
                model:"Huracan",
                an:2017}
            ]
        }
        
    ]
}
```

#### Exemplu rezultat pentru datele de mai sus:

```javascript
[
    {
        id:1,
        name:"Vlad",
        varsta:25,
        casatorit:false,
        vehicule:[]
    },
    {
        id:2,
        name:"Eugen",
        varsta:33,
        casatorit:true,
        vehicule:[
            {
                marca:"Ford",
                model:"Fiesta",
                an:2005
            },
            {
                marca:"Dacia",
                model:"Logan",
                an:2010
            },
            {
                marca:"Mercedes",
                model:"Benz",
                an:2002
            }
        ]
    },
    {
        id:3,
        name:"Maria",
        varsta:29,
        casatorit:false,
        vehicule:[]
    },
    {
        id:4,
        name:"Elena",
        varsta:11,
        casatorit:false,
        vehicule: [
                {
                    marca:"Peugeot",
                    model:"307",
                    an:2004
                },
                {
                    marca:"Volkswagen",
                    model:"Lupo",
                    an:1999
                }
            ]
    },
    {
        id:5,
        name:"Mihai",
        varsta:29,
        casatorit:true
        vehicule:[]
    },
    {
        id:6,
        name:"Petru",
        varsta:55,
        casatorit:true,
        vehicule:[
                {marca:"Lamborghini",
                model:"Huracan",
                an:2017}
            ]
        }
]
```
</li>

<li>
    <h2>Sa se abordeze problema de la punctul anterior cu ajutorul obiectelor User, Vehicle, si CatalogEntry . Se va avea in vedere:</h2>
    <ol>
        <li>CataogEntry va reprezenta un User cu obiectele sale corespunzatoare</li>
        <li>Functia va retuna o lista de CatalogEntry</li>
        <li>Datele de intrare vor fi parsate(transformate/procesate) cu ajutorul obiectelor User si Vehicle</li>
        <li>Toate biectele vor avea metode de constructor, get, set, si toString</li>
        <li>Se pot folosi oricare dintre <a href="https://github.com/cezarmocanu/MERTelefoanecom#c114">modurile de creere ale obiectelor</a></li>
    </ol>
    
</li>

<li>
    <h2>Mai jos se regaseste un exemplu de creeare a unui timer, ce executa o functie cu parametrii dupa un timp t.</h2>
    <ol>
        <li>
        Sa se analizeze functia de mai jos si modul in care functioneaza;
        ```javascript
            const t = 1000;
            const f = (timp) => {console.log("Am executat functia dupa ${timp}");}
            setTimeout(()=>{
                    f(t);
            },t);
        ```
        </li>
        <li>
            Sa se creeze o <a href="https://github.com/cezarmocanu/MERTelefoanecom#c113">functie asyncrona</a> care sa returneze o promisiune. Aceasta promisiune va trimite dupa 3 secunde mesajul "Am terminat de facut taskul"
        </li>
        <li>
            Sa se modifice functia de mai sus astfel incat sa primeasca un parametru t si returneaza mesajul "Am terminat de facut taskul dupa timpul _t_ unde _t_ este timpul in care s-a executat functia.
        </li>
        <li>
            Foloseste operatorul <a href="https://github.com/cezarmocanu/MERTelefoanecom#c113">then</a> pentru a intercepta un promise si pentru a afisa mesajul trimis de rezolvarea acestuia
        </li>
    </ol>
    <h3>Exemplu apelari functii</h3>
    
    ```javascript
        rezolvaTask(1000).then(result => console.log(result));
    
        const rezultat5 = rezolvaTask(5000);
        rezultat5.then(result => console.log(result));
    ```
</li>
</ol>
