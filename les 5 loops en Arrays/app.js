class App 
{
  runApplication()
    {
      console.log("hello world")
     let arr = ["biffy Clyro","Blink 182","Taylor Swift",
                 "2Pac","Billie Eilish" ]
       console.log(arr);
       let headers = document.getElementsByClassName("BandName");
       headers[0].innerHTML = "biffy Clyro";
       headers[1].innerHTML = "Blink 182";
       headers[2].innerHTML = "Taylor Swift";
       headers[3].innerHTML = "2Pac";
       headers[4].innerHTML = "billie Eilish"
    }
 
}

let app = new App();
app.runApplication();