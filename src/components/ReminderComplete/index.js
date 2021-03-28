import React, { useState } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import './index.css'
import DetailReminder from './detailReminder';

function TodoList() {
    const InitTodo = [
        {
            url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg", 
            name: "Bertie Yates", 
            old: "29 years"
        },
        {
            url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
            name: "Hester Hogan",
            old: "32 years" 
        },
        {
            url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
            name: "Larry Little", 
            old: "36 years"
        },
        {
            url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg", 
            name: "Sean Walsh", 
            old: "34 years"   
        },
        {
            url: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg", 
            name: "Lola Gardner", 
            old: "29 years"
        },
        
    ];
    const [deleteItem, setDeleteItem] = useState(InitTodo)

    
    function DeleteAll(index) {
        console.log(InitTodo);
        const newItems = [...deleteItem];
        newItems.slice(index,1);
        setDeleteItem(newItems);
    }

    return (
            <div className="reminder ">
                <div >
                    <div className="reminder__person" style={{paddingTop: '20px', paddingLeft: '30px', paddingBottom: '60px', marginTop: '60px'}} >
                            <h2>5 birthdays today</h2>
                        <div className="reminder__block">
                            <div>
                                {
                                    InitTodo.map(e=> <DetailReminder url={e.url} name={e.name} old={e.old}/>)
                                }
                                <Button 
                                    type="primary" block 
                                    style={{width: '92%'}}
                                    onClick={()=> DeleteAll()}
                                >
                                    Clear All
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}




export default TodoList;