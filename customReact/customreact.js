const root = document.getElementById("root")

function customRender(reacElement, root){
    const domElement = document.createElement(reacElement.type)
    domElement.innerHTML = reacElement.children
    domElement.setAttribute('href', reacElement.props.href)
    domElement.setAttribute('target', reacElement.props.target)

    root.appendChild(domElement)
}

const reactEelment = {
    type: 'a',
    props:{
        href: "https://google.com",
        target: "_blank"
    },
    children:"click to visit google"
}

customRender(reactEelment,root)