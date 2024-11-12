// 導入外部css檔案
import "./App.css"

// 建立新的元件
function MyComponent() {
  return (
    // 空標籤 : Fragment
    <>
      <h1>React</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci facilis odit minima eius voluptatum voluptates ullam sit enim quis dolorum? Natus sequi rem dolorum ad inventore dolor ut placeat animi.</p>
      <p>Lorem ipsum dolor sit</p>
    </>
  )
}

function App() {

  // 建立變數
  const strName = "abc";


  return (
    <div>
      {/* JSX中使用javascript變數，前後加大括號{變數名稱} */}
      <h1 className="myH1" style={{
        color: 'white',
        backgroundColor: 'pink',
        width: '300px',
      }}>{strName.toLocaleUpperCase()}, 午安</h1>
      {/* 屬性中使用變數 */}
      <label className="unLineColor" htmlFor="userName">請輸入姓名</label>
      {/* placeholder => 提示字 */}
      <input type="text" id="userName" placeholder={strName} />
      {/* <MyComponent /> */}

    </div>

  )
}

export default App
