const leftRow =[
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]

const rightRow=[
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
]

leftRow.map((e,i)=> {
    //console.log(e)
    e.map((e1,ind)=> {
        const div = document.createElement('div');
        div.innerText ='L'+ (ind + (5*i) + 1)
        if(leftRow[i][ind]==0){
            div.style.background='red'

        }

        else{
            div.style.background='skyBlue'
        }

        div.addEventListener('click',()=>{
            let confirmation=confirm('Are you sure,you want book')
            if(confirmation){
                leftRow[i][ind]=1;
                div.style.background='skyBlue'
            }
        })
        document.getElementById('leftRow').append(div)
    })
})

rightRow.map((e,i)=>{
    //console.log(e)
    e.map((e1,ind)=>{
        const div = document.createElement('div');
        div.innerText ='R'+ (ind + (5 * i) + 1)
        if(rightRow[i][ind]==0){
            div.style.background='red'

        }
        
        else{

            div.style.background='skyBlue'
        }

        div.addEventListener('click',() =>{
            let confirmation = confirm('Are you sure,you want book')
            if(confirmation){
                rightRow[i][ind]=1;
                div.style.background='skyBlue'
            }
        })
        document.getElementById('rightRow').append(div)
    })
})

const busSeats = [
    {
    seat_type:"sleeper",
    seat_number:'s1',
    is_booked:false
    }
]

console.log("hello");
