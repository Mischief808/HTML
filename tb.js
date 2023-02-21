let data=[{"id":1,"Name":"Randa Hassent","email":"rhassent0@foxnews.com","gender":"Female","salary":"10000"},
{"id":2,"Name":"Ramonda Pinchon","email":"rpinchon1@mac.com","gender":"Female","salary":"10000"},
{"id":3,"Name":"Vaughn Kleinholz","email":"vkleinholz2@huffingtonpost.com","gender":"Male","salary":"10000"},
{"id":4,"Name":"Emmott Osgar","email":"eosgar3@sciencedaily.com","gender":"Male","salary":"10000"},
{"id":5,"Name":"Monica Pashan","email":"mpashan4@cam.ac.uk","gender":"Female","salary":"10000"},
{"id":6,"Name":"Portie Gilloran","email":"pgilloran5@microsoft.com","gender":"Male","salary":"10000"},
{"id":7,"Name":"Clevey Nottingham","email":"cnottingham6@google.nl","gender":"Male","salary":"10000"},
{"id":8,"Name":"Margret Hatt","email":"mhatt7@meetup.com","gender":"Female","salary":"10000"},
{"id":9,"Name":"Jordanna Mackiewicz","email":"jmackiewicz8@nhs.uk","gender":"Female","salary":"10000"},
{"id":10,"Name":"Juanita Blatchford","email":"jblatchford9@stumbleupon.com","gender":"Female","salary":"10000"},
{"id":11,"Name":"Jillana Ast","email":"jasta@webeden.co.uk","gender":"Female","salary":"10000"},
{"id":12,"Name":"Veronika Maunder","email":"vmaunderb@miitbeian.gov.cn","gender":"Female","salary":"20000"},
{"id":13,"Name":"Audi Beckles","email":"abecklesc@intel.com","gender":"Female","salary":"10000"},
{"id":14,"Name":"Drucie Shovell","email":"dshovelld@aol.com","gender":"Female","salary":"10000"},
{"id":15,"Name":"Godfrey Hardingham","email":"ghardinghame@youtube.com","gender":"Male","salary":"10000"},
{"id":16,"Name":"Gibbie Bossel","email":"gbosself@ucoz.com","gender":"Male","salary":"10000"},
{"id":17,"Name":"Kain Argente","email":"kargenteg@noaa.gov","gender":"Genderfluid","salary":"10000"},
{"id":18,"Name":"Berton Thunnercliffe","email":"bthunnercliffeh@zimbio.com","gender":"Male","salary":"10000"},
{"id":19,"Name":"Micah Osbaldstone","email":"mosbaldstonei@furl.net","gender":"Male","salary":"10000"},
{"id":20,"Name":"Herta Leyburn","email":"hleyburnj@wufoo.com","gender":"Female","salary":"10000"},
{"id":21,"Name":"Devland Bartlosz","email":"dbartloszk@shop-pro.jp","gender":"Male","salary":"10000"},
{"id":22,"Name":"Meredeth Jollands","email":"mjollandsl@java.com","gender":"Male","salary":"10000"},
{"id":23,"Name":"Vilhelmina Keach","email":"vkeachm@mail.ru","gender":"Female","salary":"10000"},
{"id":24,"Name":"Christie McCarver","email":"cmccarvern@yale.edu","gender":"Female","salary":"10000"},
{"id":25,"Name":"Kurtis Pinchbeck","email":"kpinchbecko@cnbc.com","gender":"Male","salary":"10000"},
{"id":26,"Name":"Garnet Casbon","email":"gcasbonp@cbslocal.com","gender":"Female","salary":"10000"},
{"id":27,"Name":"Carmita Olivey","email":"coliveyq@jugem.jp","gender":"Female","salary":"10000"},
{"id":28,"Name":"Kareem Wardall","email":"kwardallr@blinklist.com","gender":"Male","salary":"10000"},
{"id":29,"Name":"Wendi Rablan","email":"wrablans@mit.edu","gender":"Female","salary":"10000"},
{"id":30,"Name":"Gerri Seath","email":"gseatht@adobe.com","gender":"Male","salary":"10000"},
{"id":31,"Name":"Kirstin Rathjen","email":"krathjenu@constantcontact.com","gender":"Female","salary":"10000"},
{"id":32,"Name":"Correy Flanne","email":"cflannev@cdbaby.com","gender":"Genderfluid","salary":"10000"},
{"id":33,"Name":"Connor Tolchar","email":"ctolcharw@naver.com","gender":"Male","salary":"10000"},
{"id":34,"Name":"Keith Aiken","email":"kaikenx@cloudflare.com","gender":"Male","salary":"10000"},
{"id":35,"Name":"Fallon Klarzynski","email":"fklarzynskiy@facebook.com","gender":"Female","salary":"10000"},
{"id":36,"Name":"Oran Padden","email":"opaddenz@umich.edu","gender":"Male","salary":"10000"},
{"id":37,"Name":"Cary Durman","email":"cdurman10@google.pl","gender":"Genderfluid","salary":"10000"},
{"id":38,"Name":"Glenn Szymanek","email":"gszymanek11@cyberchimps.com","gender":"Male","salary":"10000"},
{"id":39,"Name":"Marlow Linwood","email":"mlinwood12@archive.org","gender":"Male","salary":"10000"},
{"id":40,"Name":"Rickie Heistermann","email":"rheistermann13@accuweather.com","gender":"Male","salary":"10000"},
{"id":41,"Name":"Gussie Haszard","email":"ghaszard14@cbc.ca","gender":"Female","salary":"10000"},
{"id":42,"Name":"Sol Jakoub","email":"sjakoub15@clickbank.net","gender":"Male","salary":"10000"},
{"id":43,"Name":"Georgy Formie","email":"gformie16@photobucket.com","gender":"Male","salary":"10000"},
{"id":44,"Name":"Dario Trimnell","email":"dtrimnell17@google.ca","gender":"Male","salary":"10000"},
{"id":45,"Name":"Pippy Klaessen","email":"pklaessen18@vk.com","gender":"Female","salary":"10000"},
{"id":46,"Name":"Junie Francke","email":"jfrancke19@cocolog-nifty.com","gender":"Female","salary":"10000"},
{"id":47,"Name":"Hamish Pirkis","email":"hpirkis1a@canalblog.com","gender":"Male","salary":"10000"},
{"id":48,"Name":"Kittie Djurisic","email":"kdjurisic1b@unesco.org","gender":"Female","salary":"10000"},
{"id":49,"Name":"Jarad Cullimore","email":"jcullimore1c@squidoo.com","gender":"Male","salary":"10000"},
{"id":50,"Name":"Wiatt Corbyn","email":"wcorbyn1d@prlog.org","gender":"Male","salary":"10000"}]
let plad = () => {
    let rows=""
    data.map(function(dat){
        rows=rows+`<tr>
                   <td>${dat.id}</td>
                   <td>${dat.Name}</td>
                   <td>${dat.gender}</td>
                   <td>${dat.email}</td>
                   <td>${dat.salary}</td>
                  </tr>`                  
        document.getElementById('bodble').innerHTML=rows;

    })
}
console.log("hi");