function Array(){
    let student=['reshma','shweta', 'snehal','shrushti','sahil']
    let data=[
        {
            name:'Reshma',
            email: 'reshma@test.com',
            contact: 13455657690
        },
        {
            name: 'Rani',
            email: 'rani@test.com',
            contact: 123456790
        }
    ]
    // student.map((item)=>{
    //     console.log("name is",item);
    // })
    // for(let i=0; i<student.length; i++)
    // {
    //     console.log("name in array",student[i])
    // }
    return(
        <div>
            {
                student.map((item)=>
                    <h1>{item}</h1>
                )
            }
              <table border="1">
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Contact</td>
                </tr>
            {
                data.map((d)=>
              
                    <tr>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.contact}</td>
                    </tr>
                    
                )
            }
            </table>
        </div>
    )
}
export default Array