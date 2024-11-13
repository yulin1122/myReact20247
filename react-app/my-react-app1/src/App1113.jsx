// import banner from '../public/images/banner.jpg';

import './App.css'
import ShowComment from './ShowComment.jsx'
import ShowListbox from './ShowListbox.jsx'




function App() {


  return (
    <>
      {/* 首頁廣告區 */}
      <div className="wrap">
        <header>
          <img src="images/banner.jpg " alt=" " /></header>
      </div>

      {/* 特色區 */}
      <div className="comment">

        <ShowComment />

      </div>

      {/* 主標 */}
      <div className='slogan' style={{
        color: 'white',
        backgroundColor: 'red',
      }}
      ><h1>讓學成為一種習慣</h1></div>


      {/* 推薦課程 */}
      <div className="recommend" style={{ color: 'green', }}>
        <h1>推薦課程</h1>
      </div>

      <div className="listbox">
        <ShowListbox />
      </div>

      <footer style={{ color: "white", backgroundColor: "black" }}> &copy; 2024.11.13 劉鈺琳</footer>

    </>
  )
}

export default App
