export const userColumns = [{field: 'id', headerName: 'ID', width: 70},{
    field: 'user', headerName: 'User', width: 230, renderCell: (params)=>{
        return (
            <div className="cellWithImg">
                <img src={params.row.img} alt="avatar" className="cellImg" />
                {params.row.username}
            </div>
        );
    },
},
{
    field: "email", headerName: "Email", width:"230"
},
{
    field: "age", headerName: "Age", width:"100"
},
{
    field: "status", headerName: "Status", width:"160", renderCell: (params)=>{
        return (
            <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
        )
    }
},
];

// temporary data

export const userRows = [
    {
        id: 1,
        username: "Snow",
        img: "../product.jpg",
        status: "active",
        email: "1snow@gmail.com",
        age: 35,
    },
    {
        id: 2,
        username: "Jamie Lannister",
        img: "../product.jpg",
        status: "passive",
        email: "2snow@gmail.com",
        age: 42,
    },
    {
        id: 3,
        username: "Lannister",
        img: "../product.jpg",
        status: "pending",
        email: "3snow@gmail.com",
        age: 45,
    },
    {
        id: 4,
        username: "Stark",
        img: "../product.jpg",
        status: "active",
        email: "4snow@gmail.com",
        age: 16,
    },
    {
        id: 5,
        username: "Targaryen",
        img: "../product.jpg",
        status: "passive",
        email: "5snow@gmail.com",
        age: 22,
    },
    {
        id: 6,
        username: "Stark",
        img: "../product.jpg",
        status: "active",
        email: "6snow@gmail.com",
        age: 25,
    },
    {
        id: 7,
        username: "Snow",
        img: "../product.jpg",
        status: "passive",
        email: "7snow@gmail.com",
        age: 30,
    },
    {
        id: 8,
        username: "Linnester",
        img: "../product.jpg",
        status: "active",
        email: "8snow@gmail.com",
        age: 31,
    },
    {
        id: 9,
        username: "John",
        img: "../product.jpg",
        status: "pending",
        email: "9snow@gmail.com",
        age: 10,
    },
    {
        id: 10,
        username: "Stark",
        img: "../product.jpg",
        status: "active",
        email: "10snow@gmail.com",
        age: 40,
    },
]