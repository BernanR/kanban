
import Modal from  './modal.js'

export default class Card {

    constructor(item, template) {
        this.elements = {}
        this.elements.root = Card.createRoot(item, template)
        this.elements.card = this.elements.root.querySelector('.kaban__item')
        
        this.elements.card.addEventListener("click", () => {
            console.log(this)
            new Modal(item)
        })
    }

    static createRoot(item, template) {
        const range = document.createRange()
        range.selectNode(document.body)
        if (template) 
            return range.createContextualFragment(`<div class="kaban__item">${template(item)}</div>`)

        return range.createContextualFragment(`
            <div class="kaban__item">
                <table>
                    <tr>
                        <td>Ordem<td>
                        <td>${ item.nr_ordem_producao }</td>
                    </tr>
                </table>
            </div>
        `)
    }
   

   
}