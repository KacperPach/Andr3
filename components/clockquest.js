
function Clock(){

    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    console.log(date);
    console.log(month);
    console.log(year);
    console.log(hour);
    console.log(minute);
    console.log(second);
  
};

export default Clock;