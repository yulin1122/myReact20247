import { useEffect } from "react"
import axios from 'axios';


function App() {


  useEffect(() => {

    (async () => {
      const data = await axios.get('./F-C0032-001.json');
      const { location } = data.data.cwaopendata.dataset;
      const options={hour: 'numeric',minute}
      console.log(location);
    })
  }, [])




  return (
    <>
      <h2>36小時天氣預報</h2>

      <h2>三十六小時天氣預報</h2>

      <div className="listbox">

        <h3>台北市</h3>

        <article className='box1'>
          <p>2日</p>
          <p>6:00~下午6:00</p>
          <figure> <img src="../public.weatherIcon.晴時多雲.svg" alt="" />  </figure>
          <p>晴時多雲</p>
          <p>10°</p>
        </article>

        <article className='box1'>
          <p>2日</p>
          <p>6:00~下午6:00</p>
          <figure><img src="../public.weatherIcon.多雲時晴.svg" alt="" />  </figure>
          <p>多雲時晴</p>
          <p>20°</p>
        </article>


        <article className='box1'>
          <p>2日</p>
          <p>6:00~下午6:00</p>
          <figure><img src="../public.weatherIcon.多雲短暫雨.svg" alt="" /> </figure>
          <p>多雲短暫雨</p>
          <p>30°</p>
        </article>
      </div>


      <div className="listbox2">

        <h3>新北市</h3>

        <article className='box2'>
          <p>2日</p>
          <p>6:00~下午6:00</p>
          <figure> <img src="../public.weatherIcon.晴時多雲.svg" alt="" />  </figure>
          <p>晴時多雲</p>
          <p>0°</p>
        </article>

        <article className='box2'>
          <p>2日</p>
          <p>6:00~下午6:00</p>
          <figure><img src="../public.weatherIcon.多雲時晴.svg" alt="" />  </figure>
          <p>多雲時晴</p>
          <p>20°</p>
        </article>


        <article className='box1'>
          <p>2日</p>
          <p>6:00~下午6:00</p>
          <figure><img src="../public.weatherIcon.多雲短暫雨.svg" alt="" /> </figure>
          <p>多雲短暫雨</p>
          <p>30°</p>
        </article>

      </div>







    </>

  )
}


export default App
