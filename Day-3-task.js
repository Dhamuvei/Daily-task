//My resume(acadamicAchivements) For the given JSON iterate over all for loops (for, for in, for of, forEach)


let acadamicAchivements =
[ 
    {
       "course" : "BE",
       "institution" : "Sri venkateswara college opf engineerin",
        "boardOrUniversity" : "Anna University",
        "marks" : 7.8,
        "Month&YearOfPassing" : "July 2021"
    },
    {
        "course" : "Diploma in (EEE)",
        "institution" : "Valliammai Polytechnic College, Chennai",
        "boardOrUniversity" : "DOTE",
        "marks" :88 ,
        "month&YearOfPassing" : "April 2016"
    },
    {
        "course" : "HSC",
        "institution" : "Bharathiyar matriculation higher secondary school, Chennai",
        "boardOrUniversity" : "State Board",
        "marks" :64 ,
        "month&YearOfPassing" : "May 2014"
    },
    {
        "course" : "S.S.L.C",
        "institution" : "Bharathiyar  matriculation higher secondary school, Chennai",
        "Board / University" : "State Board",
        "marks" : 74,
        "month&YearOfPassing" : "April 2012"
    }

]
// Using For loop Method
for(let i=0;i<acadamicAchivements.length;i++);
{console.log(acadamicAchivements[i])};

//Ussing For In Method
for(let i in acadamicAchivements);
{console.log(i,acadamicAchivements[i])};

//Using For Of Method
for(let i of acadamicAchivements);
{console.log(i)};

//using ForEavh method

acadamicAchivements.forEach(
    function(value,index)
    {console.log(index,value)
    }
    );