// 特色區元件
function ShowComment() {
    const commentDate = [
        {
            id: 1,
            title: "教學影音",
            desc: "透過影音課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式"
        },

        {
            id: 2,
            title: "良性互動",
            desc: "透過影音課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式"
        },

        {
            id: 3,
            title: "趨勢分享",
            desc: "透過影音課程，來了解軟體的核心概念以及入門，並跟著範例練習以了解其中之應用方式"
        },
    ]

    return (
        <>
            {
                commentDate.map((item) => {
                    return (
                        <div className="box" key={item.id}>
                            <h2><strong>{item.title}</strong></h2>
                            <p>{item.desc}</p>
                        </div>
                    )
                })


            }
        </>
    )
}

export default ShowComment