import './styles/main.css'
import { model } from './model'
import { templates } from './templates'

console.log(templates.title({value: 'title'}))

const $site = document.querySelector('#site')

model.forEach((block)=>{
    const toHtml = templates[block.type]
    if (toHtml){
        $site.insertAdjacentHTML("beforeend", toHtml(block))
    }
})

// 0:53:50 parcel