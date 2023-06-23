console.log('restcountries');
const request = new XMLHttpRequest();
request.open('GET', "https://restcountries.com/v3.1/all");
request.send(null);
request.onload = function() {
    const response = JSON.parse(request.responseText);
    console.log(response);
    //using for of
    for(var country of response)
    {
        const{flag,name,region,subregion,population} = country;
        console.log(flag,name,region,subregion,population);
    }
    //using destructing of an object
    response.forEach(({flag,name:{common},region,subregion,population}) => {
    console.log(flag,name,region,subregion,population);
});
}
    

