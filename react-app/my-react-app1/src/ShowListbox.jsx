// 推薦課程資料
function ShowListbox() {

    const ListboxData = [
        {
            id: 1,
            imgURL: "images/unity.jpg",
            title: "Unity 5",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium expedita vitae facilis harum voluptas facere incidunt corrupti culpa exercitationem,",
            teather: " XXX",
            hour: "4",
            price: "1600",
            pricesale: "1200",
        },

        {
            id: 2,
            imgURL: "images/gamesalad.jpg",
            title: "gamesalad",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium expedita vitae facilis harum voluptas facere incidunt corrupti culpa exercitationem,",
            teather: " XXX",
            hour: "8",
            price: "3200",
            pricesale: "1600",
        },

        {
            id: 1,
            imgURL: "images/gwd.jpg",
            title: "gwd",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium expedita vitae facilis harum voluptas facere incidunt corrupti culpa exercitationem,",
            teather: " XXX",
            hour: "8",
            price: "3200",
            pricesale: "1600",
        },



    ]



    return (
        <>
            {
                ListboxData.map((item) => {
                    return (
                        <>
                            <article className='box2' key={item.id} >
                            <p><img src={item.imgURL} alt=" "></img></p>
                            <h2>{item.title}</h2>
                            <p className='p-blue'>{item.desc}</p>
                            <p>講師:{item.teather}</p>
                            <p>時數:{item.time}小時</p>
                            <p><span className='span1'> 原價 NT$ {item.price}</span> <span className='span2' >NT$ {item.pricesale}</span> </p>
                            <button>付款上課去</button>
                            </article>
                        </>
                    )
                })
            }
        </>
    )
}

export default ShowListbox

