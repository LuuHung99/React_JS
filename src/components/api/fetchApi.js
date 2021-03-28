import React, {useState, useEffect} from 'react';
import PostList from './postList';
import Panagation from '../Panigation/panigation';
import queryString from 'query-string';
import PostFilterForm from '../PostFilterForm/postFilterForm';
function FetchApi(props) {
    const [postList, setPostList] = useState([]);
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1
    });
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1
    })
        useEffect(() => {
            async function fetchPostList() {
                try{
                    const newQueryString = queryString.stringify(filters);
                    const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${newQueryString}`;
                    const response = await fetch(requestUrl);
                    const responseJSON = await response.json();
                    const {data, pagination} = responseJSON;
                    setPostList(data);
                    setPagination(pagination);
                }
                catch(err)
                {
                    console.log('Fail to fetch post list', err.massage);
                }
            }
            fetchPostList();
        }, [filters])

        // useEffect(() => {
        //     console.log('Render Browser');
        // }, [postList])


        function handleFilterChange(newFilters) {
            console.log('New filters', newFilters);
            setFilters({
                ...filters,
                _page: 1,
                title_like: newFilters.searchItem
            })
        }

        function handlePageChange(newPage) {
            console.log('New page', newPage);
            setFilters({
                ...filters,
                _page: newPage
            })
        }

        function handleChangeSubmit(formValue) {
            console.log('submit', formValue);
            const newList = {
                id: postList.length + 1,
                ...formValue
              }
            const newPostList = [...postList];
            newPostList.push(newList);
            setPostList(newPostList);
        }
    return (
        <div>
            <h1>hello eract app</h1>
            <PostFilterForm onSubmit={handleFilterChange}/>
            <PostList onSubmit={handleChangeSubmit} />
            <PostList posts={postList}/>
            <Panagation 
                pagination={pagination} 
               onPageChange={handlePageChange}
            />
        </div>
    );
}

export default FetchApi;