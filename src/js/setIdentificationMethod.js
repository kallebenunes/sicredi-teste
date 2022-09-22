import { fromEvent } from 'rxjs';


export default function setIdentificationMethod(){
    const identificationOptions = document.querySelectorAll("[data-id-option]")

    const inputIdOption = document.querySelector("#input-id-option")

    identificationOptions.forEach(elemnt => {
        const clickOnIdOption = fromEvent(elemnt, 'click')

        clickOnIdOption.subscribe(event => {
            const idOption = event.target.dataset.idOption

            const idOptionInputValue = inputIdOption.dataset.idOptionInputValue


            inputIdOption.setAttribute('placeholder', idOption)
            idOptionInputValue = idOption

        })
    })
}

