// import banner from '../public/images/banner.jpg';

import './App.css'

function App() {
  return (
    <>
      {/* 首頁廣告區 */}
      <div className="wrap">
        <header>
          <img src="../images/banner.jpg " alt=" " /></header>
      </div>

      {/* 特色區 */}
      <div className="comment">
        <div className='box'>
          <h2> <strong>教學影音</strong> </h2>

          <p>透過影音課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式</p>
        </div>

        <div className='box'>
          <h2>良性互動</h2>
          <p>透過影音課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式</p>
        </div>

        <div className='box'>
          <h2>趨勢分享</h2>
          <p>透過影音課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式</p>
        </div >
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
        {/* 課程1 */}
        <article className='box2'>
          <figure>
            <img src="../images/unity.jpg " alt=" " /></figure>
          <div className='concent'>
            <h2>Unity 5</h2>
            <p className='p-blue'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium expedita vitae facilis harum voluptas facere incidunt corrupti culpa exercitationem, </p>
            <p>講師 : XXX </p>
            <p>課程時數 : 4小時 </p>
            <p><span className='span1'> 原價 NT$ 1600</span> <span className='span2' >NT$ 1200</span> </p></div>

          <button>付款上課去</button>

        </article>

        {/* 課程2 */}
        <article className='box2'>
          <figure>
            <img src="../images/gamesalad.jpg " alt=" " /></figure>
          <div className='concent'>
            <h2>Unity 5</h2>
            <p className='p-blue'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium expedita vitae facilis harum voluptas facere incidunt corrupti culpa exercitationem,</p>
            <p>講師 : XXX </p>
            <p>課程時數 : 4小時 </p>
            <p><span className='span1'> 原價 NT$ 3200</span> <span className='span2'>NT$ 1600</span> </p></div>
          <button>付款上課去</button>

        </article>

        {/* 課程3 */}
        <article className='box2'>
          <figure>
            <img src="../images/gwd.jpg " alt=" " /></figure>
          <div className='concent'>
            <h2>Unity 5</h2>
            <p className='p-blue'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium expedita vitae facilis harum voluptas facere incidunt corrupti culpa exercitationem,  </p>
            <p>講師 : XXX </p>
            <p>課程時數 : 4小時 </p>
            <p><span className='span1'> 原價 NT$ 3200</span> <span >NT$ 1600</span> </p></div>
          <button>付款上課去</button>
        </article>


      </div>

      <footer style={{ color: "white", backgroundColor: "black" }}> 劉鈺琳</footer>

    </>
  )
}

export default App
