

let sideBarVisible = true


function toggle() {
    console.log(sideBarVisible)
    if(sideBarVisible == true)
    {
        const side = document.getElementsByClassName("sidebar");
        const icon = document.getElementsByClassName("iconDiv");
        side[0].setAttribute( 'style', 'position: absolute;top: 0;left: 0;bottom: 0;')
        sideBarVisible = false
    }
    else{
        const side = document.getElementsByClassName("sidebar");
        const icon = document.getElementsByClassName("iconDiv");
        side[0].setAttribute('style', 'left: -300px')
        sideBarVisible = true  
    }
} 

function openPage(e){
        window.open(`http://127.0.0.1:5500/${e}.html`,"_self")
}




