

export default class Modal {

    constructor(item) {
        this.elements = {}
        this.root = document.querySelector(".kaban__modal")
        this.elements.root = Modal.createRoot(item)
        this.elements.backdrop = Modal.createBackdrop()
        
        this.root.classList.add("in")
        this.root.innerHTML = this.elements.root
        this.elements.dismiss = this.root.querySelector(".dismiss")
        this.elements.content = this.root.querySelector(".Kanban__modal-content")

        this.elements.backdrop.addEventListener("click", () => {
            // this.elements.backdrop.remove()
            // this.elements.content.remove()
            // this.root.classList.remove("in")
        })

        this.elements.dismiss.addEventListener("click", () => {
            this.elements.backdrop.remove()
            this.elements.content.remove()
            this.root.classList.remove("in")
        })

        document.body.appendChild(this.elements.backdrop)

    }

    static createRoot(item) {
        return `
            <div class="Kanban__modal-content">
                <div class="Kanban__modal-box">
                    <div class="Kanban__modal-header"><h2>${item.operacao}</h2></div>
                    <div class="Kanban__modal-body">
                        Modal Content goes here
                        <strong>${item.produto}</strong>
                    </div>
                    <div class="Kanban__modal-footer"><button class="dismiss">Close</button></div>
                </div>
            </div>
        `
    }

    static createBackdrop() {
        const range = document.createRange();
        range.selectNode(document.body)
        return range.createContextualFragment(`<div class="kanban__modal-backdrop">`).children[0]
    }
   

   
}