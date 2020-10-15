import {row, col} from './utils'

function title(block){
    return row(col(`<h1>${block.value}</h1>`))
    // return `
    //     <div class="row">
    //         <div class="col-sm">
    //             <h1>${block.value}</h1>
    //         </div>
    //     </div>
    //     `
}

function text(block){
    return row(col(`<p>${block.value}</p>`))
    // return `
    //     <div class="row">
    //         <div class="col-sm">
    //             <h1>${block.value}</h1>
    //         </div>
    //     </div>
    //     `
}

function columns(block){
    const html = block.value.map(item => `<div class="col-sm"><p>${item}</p></div>`)
    return row(`${html.join("")}`)
//    return `<div class="row">${html.join("")}</div>`
}

function image(block){
    return row(`<img src="${block.value}">`)
//    return `<div class="row"><img src="${block.value}"></div>`
}

// export const templates = {
//     title: title,
//     text: text,
//     columns: columns,
//     image: image
// }

// Если ключи и значения совпадают, то можно так
export const templates = { title, text, columns, image }