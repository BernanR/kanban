
import Card from './card'

export default class Column {

    constructor(id, title) {
        this.id = id
        this.elements = {}
        this.elements.root = Column.createRoot()
        this.elements.title = this.elements.root.querySelector('.kanban__list-header').querySelector('h2')
        this.elements.cards = this.elements.root.querySelector('.kanban__list-cards')
        this.elements.root.dataset.id = id;
        this.elements.title.textContent = title;
    }

    static createRoot() {
        const range = document.createRange();
        range.selectNode(document.body)

        return range.createContextualFragment(`
            <div class="kanban__column">
                <div class="kanban__list-header"><h2></h2></div>
                <div class="kanban__list-cards"></div>
            </div>
        `).children[0]
    }

    addCard(data, template) {
        data.forEach(item => {
            const card = new Card(item, template);
            this.elements.cards.appendChild(card.elements.root)
        });
    }
}