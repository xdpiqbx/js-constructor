export class Site{
    constructor(selector){
        this.$el = document.querySelector(selector)
    }

    render(model){
        model.forEach((block)=>{
            const toHtml = block
            if (toHtml){
                this.$el.insertAdjacentHTML("beforeend", block.toHtml())
            }
        })
    }
}