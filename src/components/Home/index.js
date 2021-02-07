import React from 'react';
import HomePageList from './HomePageList/index';

function HomeFeature(props) {
    const listHome = [
        {
            id: 1,
            name: 'Danh Mat Em',
            url: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/d/2/f/c/d2fc5d3c4627fc52220de11e07153e0f.jpg'
        },

        {
            id: 2,
            name: 'Cuoc Song Em On Khong',
            url: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/1/d/b/91dbde948386b4dda1001a575683448d.jpg'
        },

        {
            id: 3,
            name: 'Da Tung',
            url: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/8/7/7/48777810a5a68c5ffa2d95aa369f7a06.jpg'
        },

        {
            id: 4,
            name: 'Nguoi Phan Boi',
            url: 'https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/4/8/7/7/48777810a5a68c5ffa2d95aa369f7a06.jpg'
        },
        
    ];
    return (
        <div>
            <h1 style={{marginLeft: '80px'}}>Hôm Nay Bạn Nghe Gì</h1>
           <HomePageList listHome={listHome} /> 
        </div>
    );
}

export default HomeFeature;