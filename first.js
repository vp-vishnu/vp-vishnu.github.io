const calcy = () =>{
     let nameinput = document.getElementById('nameinput').value;
     let numberinput = document.getElementById('numberinput').value;
      let result = "";

      finalresult = parseFloat(numberinput)

    
      if(finalresult == 1 ){
        result = 'But you have 100% chance of getting infected if you roam outside unnecessarily and if you dont follow preacuionary measures like washing your hands frequently, avoiding toching your face. Stay Home 😉. Sleep Hard 💤.';
        document.getElementById('showData').innerHTML = ` Hey ${nameinput}, you have been tested negative 😀 for Covid-19.${result}`      


     } else if(finalresult == 2 ){
        result = 'But you have 67% chance of getting infeceted if you dont wash your hands and roam outside unesscarily. Just Stay Home and use the quarantine time in a productive way 💃.';
        document.getElementById('showData').innerHTML = ` Hey ${nameinput}, You have been tested negative for Covid-19.${result}`      

     }else if(finalresult == 3 ){
        result = 'But you have 71% chance of getting infected if you believe the whatsapp forwaded fake news. Just follow the official forums to get updated anything related to Covid-19 and never believe whatsapp university syllabus.Lots of people taking risking to save your life atleast for their sake dont go out.Just Stay Home.Spread Facts not fake news 👍';
        document.getElementById('showData').innerHTML = ` Hey ${nameinput}, you have been tested negative 😀 for Covid-19.${result}`      

     }else if(finalresult == 4 ){
       result = 'But you have 73% chance of getting infected. And you know viruses never consider gender,race, religion, designation.Everyone is vulnerable for them.Never align with the people spreading hatred. Show some empathy to the people around you. Stay Home. Spread Love ❤️';
       document.getElementById('showData').innerHTML = ` Hey ${nameinput}, you have been tested negative 😀 for Covid-19.${result}`      

     }else if(finalresult ==5 ){
        result = 'But you have 55% chance of getting infected.To avoid getting infected just stay home,follow the directed precautionary measures and spend the quarantine time in a way that will be useful to someone around you. Help your mother/wife/girlfriend by sharing the household chores beacause its your home too right. Stay Home. Share Work 👨‍🍳';
        document.getElementById('showData').innerHTML = ` Hey ${nameinput}, you have been tested negative 😀 for Covid-19.${result}`      

     }else if(finalresult == 6 ){
        result = 'But you have 62% of getting infected. Dont always stare the mobile phone and get bored, spend some time with people around you even if thats also gets bored think how many days back you read any book. Make a hobby of reading a book aleast one page per day starting from today. Stay Home.Read Something 📗';
        document.getElementById('showData').innerHTML = ` Hey ${nameinput}, you have been tested negative 😀 for Covid-19.${result}`      

     }else if(finalresult == 7 ){
    result = 'But you have 100% chance of getting infected if you roam unnecessarily,I know youre a travel freak but the guy Covid-19 will travel faster than you and he can roam in atmosphere for more than three hours.So if you want go out wear N95 mask. Stay Home 😉. Sleep Hard 💤';
    document.getElementById('showData').innerHTML = ` Hey ${nameinput}, you have been tested negative 😀 for Covid-19.${result}`      

     }else if(finalresult == 8 ){
        result = 'But you have 90% chance of getting infected.And still there is no vaccine for covid-19 and lots of people getting affected daily without even contact with infected persons. To avoid gettting infected just stay home, maintain social distancing that is only thing now needed to break chain 😊.';
        document.getElementById('showData').innerHTML = ` Hey ${nameinput}, you have been tested negative 😀 for Covid-19.${result}`      

     }else if(finalresult == 9) {
        result = 'But you have 73% chance of getting infected. And you know viruses never consider gender,race, religion, designaion.Everyone is vulnerable for them.Never align with the people spreading hatred. Show some empathy to the people around you. Stay Home. Spread Love ❤️';
        document.getElementById('showData').innerHTML = ` Hey ${nameinput}, you have been tested negative 😀 for Covid-19.${result}`      

     }else if(finalresult == 10 ){
        result = 'But you have 100% chance of getting infected if you roam unnecessarily,I know youre a travel freak but the guy Covid-19 will travel faster than you and he can roam in atmosphere for more than three hours.So if you want go out wear N95 mask. Stay Home 😉. Sleep Hard 💤';
        document.getElementById('showData').innerHTML = ` Hey ${nameinput}, you have been tested negative 😀 for Covid-19.${result}`      

     }
                 else{

                  document.getElementById('showData').innerHTML = ` Hey ${nameinput}, you have entered number greater than 10 😐 `      


                 }
     

    }