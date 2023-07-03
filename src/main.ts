import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'


// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
const content_container = document.querySelector<HTMLDivElement>('div.container')!
const innerHTML = `
  <div class="row d-flex justify-content-center align-items-center hogefuga">
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
const inner_content = ((html) => {
  const div = document.createElement('div')
  div.innerHTML = html.trim()
  return div.firstChild
})(innerHTML)

content_container.insertAdjacentElement('afterbegin', inner_content)
/**/

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
