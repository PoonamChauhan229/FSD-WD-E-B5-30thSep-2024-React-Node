
//create an h1 element
// React.createElement()
// 3 args >> tag , {attribute},"text-content"

const heading=React.createElement("h1",{id:"title"},"Hello World-USING REACT")

//DOM
const root=ReactDOM.createRoot(document.getElementById('root'))
//render()
root.render(heading)



 