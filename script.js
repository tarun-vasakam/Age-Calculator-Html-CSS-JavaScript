function age(){
    let enter=document.querySelector("input").value;
    let display=document.getElementById('agefound');
    let date=new Date();
    let dob=new Date(enter);
    let presyear=date.getFullYear();
    let prevyear=dob.getFullYear();
    let presmonth=date.getMonth();
    let prevmonth=dob.getMonth();
    let presday=date.getDate(); 
    let prevday=dob.getDate();
    let year=presyear-prevyear;
    let month=presmonth-prevmonth;
    let day=presday-prevday;
    if ((!enter)||(dob>date))
    {
       display.textContent='Please enter a valid date.';
       return;
    }
    if ((month<0)||(month==0 && day<0))
    {
        year--;
    }
    if (month==0 && day==0)
    {
        display.textContent='Happy '+year+'th Birthday!';
        return;
    }
    display.textContent='You are '+year+' years old.';
}
