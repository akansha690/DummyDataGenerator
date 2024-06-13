let btn = document.getElementById('btn')

btn.addEventListener('click', async()=>{
    let response = await fetch('/')
    let d = await response.json()
    console.log(d)
})

