class Dino
{
    constructor(naam,vleeseter,leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }
    eetDino(Dino){
     Dino.leeft = false;
     console.log("trex eet carl")
    }
}

class Dino2
{
    constructor(naam,vleeseter,leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }
    eetDino(Dino){
     Dino.leeft = false;
     console.log("trex eet carl")
    }
}

class Dino3
{
    constructor(naam,vleeseter,leeftijd)
    {
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }
    eetDino(Dino){
     Dino.leeft = false;
     console.log("trex eet carl")
    }
}


class Plant
{
    constructor(naam){
     this.name = naam   
    }
}


class App
{
 runApplication()
 {
    let trex = new Dino("Trex", true, 10);
    console.log(trex);
    let carl = new Dino2("carl", true, 12);
    console.log(carl);
    let gary = new Dino3("gary", true, 12);
    console.log(gary);
 }


}
let app =new App();
app.runApplication();
