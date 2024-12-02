import { useState } from "react"

function App() {
  // 定義變數name與setName方法
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');

  function changeName(e) {
    setName2(e.target.value);
  }

  return (
    <>
      <h1>設計一個輸入名字的欄位，並且即時顯示出來</h1>
      <hr />
      {/* <h3>目前文字方塊的內容:{name}</h3> */}
      請輸入姓名1:<input type="text" value={name} onChange={(e) => {
        // console.log(e);
        setName(e.target.value);
      }} />{name}

      <br />
      請輸入姓名2:<input type="text" value={name2} onChange={changeName} />{name2}



    </>
  )
}


export default App
