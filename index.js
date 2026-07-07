console.log("hello")

// const app = document.getElementById('app');

// const header = document.createElement('h1');

// const text = 'Text from JS'
// const headerContent = document.createTextNode(text)

// header.appendChild(headerContent)

// app.appendChild(header)

const domNode = document.getElementById('app');

function Header() {
  return <h1>Text from function header()</h1>
}

function HomePage() {
  return(
    <div>
      {/*Nesting the Header component*/}
      <Header/>
      <Header/>
    </div>
  );
}

const root = ReactDOM.createRoot(domNode);
//root.render(<h1>Text from ReactCDN</h1>);
//React компоненты пишутся с Большой буквы и скобками
root.render(<HomePage/>);