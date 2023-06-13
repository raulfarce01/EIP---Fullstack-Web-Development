console.log("🎷 ~ Exercise 1 ~ 🎷");

const api = "https://reqres.in/api/users/5";

fetch(api, {
    
    method:"GET"

}).then(
    resp => resp.json()
).then(response => {
    //console.log(response.data);
    let user = response.data;

    console.log(`\n ID: ${user.id} \n Email: ${user.email} \n First Name: ${user.first_name} \n Last Name: ${user.last_name} \n Avatar: ${user.avatar}`);
});