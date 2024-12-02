import { useState } from "react"


function App() {
  // 使用者名稱
  const [inputuserName, setinputuserName] = useState('我是文字方塊');

  // 縣市名稱
  const [selCity, setselCity] = useState('台北市');

  // 建立陣列
  const arrCity = ['台北市', '桃園市', '新北市'];

  // 閱讀確認
  const [check, setCheck] = useState(false);

  // 複選:多個核取方塊
  const [chkList, setChkList] = useState([]);

  // 建立函式處理被勾選的項目
  const handleChkList = (e) => {
    // console.log(e.target.value);
    // 使用其餘運算子保留已經被勾選項目

    if (e.target.checked) {
      // 是 =>原本+新的
      setChkList([...chkList, e.target.value]);

    } else {
      // 否 => 從原本被勾選的項目中，拿掉不要的(filter)
      setChkList(
        chkList.filter((list) => {
          return list !== e.target.value

        })
      );
    }
  }

  return (
    <>
      <h1>react-表單</h1>
      <hr />
      {/* input */}
      <label htmlFor="username">使用者名稱 </label>
      <input type="text" name="" id="username"
        value={inputuserName}
        onChange={(e) => {
          setinputuserName(e.target.value);
        }}
      />{inputuserName}

      <br />
      {/* select */}
      <label htmlFor="city">縣市名</label>
      <select name="" id="city"
        value={selCity}
        onChange={(e) => {
          setselCity(e.target.value);
        }}
      >

        {/* 逐行寫法 */}
        {/* <option value="台北市">台北市 </option>
        <option value="桃園市">桃園市</option>
        <option value="新北市">新北市</option>
        <option value="台中市">台中市 </option>
        <option value="台南市">台南市</option>
        <option value="高雄市">高雄市</option> */}

        {/* 讀取陣列寫法 */}
        {/* disabled =>無法使用(失態)/失效 */}
        <option value="" disabled>請選擇</option>
        {

          arrCity.map((city) => {
            return < option value={city} key={city}>{city}</option>
          })
        }
      </select>{selCity}
      <br />


      {/* 單一核取方塊 */}
      <label htmlFor="isCheck">閱讀確認</label>
      <input type="checkbox" id="isCheck"
        value={check}
        onChange={(e) => {
          // 處理勾選值得變化
          setCheck(e.target.checked);
        }} />{check.toString()}

      <br />



      {/* 複選:多個核取方塊 */}

      {arrList.map((list) => {
        return <div key={list}>

          <input type="checkbox" id="checkList1" name="like"
            value="HTML"
            onChange={handleChkList}
          />
          <label htmlFor="checkList1" >{list}</label>
        </div>
      })}


      {/* <input type="checkbox" id="checkList1" name="like" value="HTML" onChange={handleChkList} />
      <label htmlFor="checkList1">HTML</label>

      <input type="checkbox" id="checkList2" name="like" value="CSS" onChange={handleChkList} />
      <label htmlFor="checkList2">CSS</label>

      <input type="checkbox" id="checkList3" name="like" value="JS" onChange={handleChkList} />
      <label htmlFor="checkList3">JS</label> */}



    </>

  )
}


export default App
