import './styles/main.css'
import { model } from './model'
import { Site } from './classes/site'
import { Sidebar } from './classes/sidebar'

const site = new Site ('#site')

site.render(model)

const sidebar = new Sidebar('#panel')

// 1:33:04 panel