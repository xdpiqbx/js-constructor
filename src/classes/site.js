export class Site{
    constructor(selector){
        this.$el = document.querySelector(selector)
    }

    render(model){
        this.$el.innerHTML = ''
        model.forEach((block)=>{
            const toHtml = block
            if (toHtml){
                this.$el.insertAdjacentHTML("beforeend", block.toHtml())
            }
        })
    }
}