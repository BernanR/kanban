import './style.css'
import './customStyle.css'
import {ordensProducao, headers} from './ordens'
import Column from './Column.js'
import CardTemplate from './CardTemplate'

class kanban {
  constructor(root, config) {
    config = this.setDefaultConfig(config)
    document.querySelector(root).innerHTML = `<div class="kanban-board"><div class="wrapper"></div></div>`;
    this.root = document.querySelector('.kanban-board').querySelector('.wrapper')
    this.headerColumns = config.headerColumns;
    this.headerSetup = config.headerSetup;
    this.columnSetup = config.columnSetup
    this.Phases = [];
    this.items = config.data
    this.setupColumns()
    
    this.Phases.forEach(Column => {
      this.root.appendChild(Column.elements.root)
      Column.addCard(this.getItems(Column.id), config.cardTemplate)
    })

    // CARD WIDTH PLUS BORDER
    this.root.style.width = this.Phases.length * 300 + ( this.Phases.length * 5) + 'px';

    this.createContentModal()
  }

  setDefaultConfig(config) {

    config.headerSetup = {...{titleColumn : 'title', idColumn: 'id'}, ...config.headerSetup}
    config.columnSetup = {...{groupColumn : 'id'}, ...config.columnSetup}

    if (!('cardTemplate' in config))
      config.cardTemplate = function() { return `<div></div>` }

    return config
  }

  setupColumns() {
    this.headerColumns.forEach(item => {
      this.Phases.push(new Column(item[this.headerSetup.idColumn], item[this.headerSetup.titleColumn]))
    })
  }

  getItems(id) {
    return this.items.filter(e => { return e[this.columnSetup.groupColumn] === id})
  }

  createContentModal() {
    const modal = document.createElement("div")
    modal.classList.add('kaban__modal')
    document.body.appendChild(modal)
  }
}

new kanban('#app', 
  {
    headerSetup: {titleColumn : 'title', idColumn: 'id'},
    columnSetup: {groupColumn : 'faseId'},
    headerColumns: headers,
    data : ordensProducao,
    cardTemplate: function(item) {
      return CardTemplate(item)
    },
    modalTemplate: function(item) {
      return `<div>${item.produto}</div>`
    }
  },
  
)