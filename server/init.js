const database = require("./database");
const Telefon = require("./Telefon");

database.create(Telefon(0,"Samsung","S20",128,true));
database.create(Telefon(1,"Xiaomi","Redmi Note 9 Pro",64,false));
database.create(Telefon(2,"Iphone","11 Pro Max",8,false));
database.create(Telefon(3,"Nokia","5G",9999,true));