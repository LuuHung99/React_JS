import React, {useState, useRef} from 'react';
import PropTypes from 'prop-types';

PostFilterForm.propTypes = {
    onSubmit: PropTypes.func,
};
PostFilterForm.defaultProps = {
    onSubmit: null,
}



function PostFilterForm(props) {
    const {onSubmit} = props;
    const [searchItem, setSearchItem] = useState('');
    const typingSetTimeOut = useRef('');

    function handleSubmitChange(e) {
        const value = e.target.value
        setSearchItem(value);

        if(!onSubmit) return;

        if(typingSetTimeOut.current) {
            clearTimeout(typingSetTimeOut.current);
        }

        typingSetTimeOut.current = setTimeout(() => {
            onSubmit({searchItem: value});
        }, 300)

        
    }

    return (
        <form>
            <h3>Search</h3>
            <input
                type="text"
                value={searchItem}
                onChange={handleSubmitChange}
                placeholder="search"
            >

            </input>
        </form>
    );
}

export default PostFilterForm;