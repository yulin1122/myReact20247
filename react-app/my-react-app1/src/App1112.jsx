// 子組件props寫法
// function MyComponent(props) {
//   console.log(props) 
//   props.c();
//   return <>
//     <div>我是子組件</div>
//     <div>{props.a}</div>
//     <div>{props.b}</div>
//   </>
// }


// 子組件使用「物件解構賦值 _ 寫法」
// 解構賦值得名稱必須一樣，順序可以不同
function MyComponent({ a, b="我是預設值b", c }) {

  return <>
  
    <div>我是子組件</div>
    <div>{a}</div>
    <div>{b}</div>
    <div className ="myFumC"> {c}</div>
  </>
}



// 父組件
function App() {
  return (
    <>
      {/*回調函式 = callback function */}
      <MyComponent 
      a='我是屬性a' 
      // b='我是屬性b' 
      c={() => { "" }} />

      {/*props = proterites = 屬性
      作用 : 從父組件傳遞資料到子組件(由上往下傳遞)

      撰寫React時，組件之間需要溝通時(也就是傳遞資料)
      props就可以做到這件事
    */}
    </>
  )

}

export default App
