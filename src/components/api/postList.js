import React, {useState} from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts: PropTypes.array
};

PostList.defaultProps = {
    posts: []
}

function PostList(props) {
    const { onSubmit } = props;
    const { posts } = props;
    const [value, setValue] = useState('');

    function addInfomation(e) {
        setValue(e.target.value);
    }
    function handleSubmit(e) {
        console.log(e);
        e.preventDefault();
        const formValue = {
            createdAt: value,
            title: value,
            author: value
        };
        onSubmit(formValue);

        setValue('');
    }

    return (
        
        <div >
            
            <table  style={{paddingLeft: '30px', textAlign: 'center'}}>
                <tr>
                    <th>id</th>
                    <th>title</th>
                    <th>author</th>
                    
                </tr>
                {posts.map(post=>
                    <tr key={post.id}>
                        <td>{post.createdAt}</td>
                        <td>{post.title}</td>
                        <td>{post.author}</td>
                    </tr>    
                )}
            </table>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    value={value}
                    onChange={addInfomation}
                    
                    
                >

                </input>
            </form>

        </div>
    );
}

export default PostList;