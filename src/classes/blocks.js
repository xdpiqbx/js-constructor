import {row, col, css} from '../utils'

class Block{
    constructor(type, value, options){
        this.type = type;
        this.value = value;
        this.options = options;
    }

    toHtml(){
        throw new Error ('Метод toHtml должен быть реализован')
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super('title', value, options)
    }

    toHtml(){
        const {tag = "h1", styles} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
}

export class ImageBlock extends Block {
    constructor(value, options) {
        super('image', value, options)        
    }

    toHtml(){
        const {imageStyles: is, alt = "", styles} = this.options;
        return row(`<img style="${css(is)}" src="${this.value}" alt="${alt}">`, css(styles))
    }
}

export class TextBlock extends Block {
    constructor(value, options) {
        super('text', value, options)
    }

    toHtml(){
        return row(col(`<p>${this.value}</p>`), css(this.options.styles))
    }
}

export class ColumnsBlock extends Block {
    constructor(value, options) {
        super('columns', value, options)        
    }

    toHtml(){
        const html = this.value.map(col).join("")
        return row(html, css(this.options.styles))
    }
}