function toggleAsideNav(){
    
    console.log("Chamou a toggle")

    const asideNav = document.querySelector('.aside-nav')
    const closeAsideNav = document.querySelector('#aside-nav-close')
    const openAsideNav = document.querySelector(".aside-nav-button")
    console.log(closeAsideNav)

    openAsideNav.addEventListener('click', (e) => {
        // e.stopPropagation()
       
        asideNav.classList.add('d-none')
       
    })
    
    closeAsideNav.addEventListener('click', (e) => {
        // e.stopPropagation()
      
        asideNav.classList.remove('d-none')
       

    })
}

export default toggleAsideNav

