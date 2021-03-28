import React, {useState} from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onsubmit: PropTypes.string.isRequired
};

TodoForm.defaultProps = {
    onsubmit: null
}

function TodoForm(props) {
        const { onSubmit } = props;
        const [value, setValue] = useState('');
    function handleValuechange(e) {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        //Prevent reloading browser
        e.preventDefault();

        const formValue = {
            title: value,
        };
        onSubmit(formValue);

        setValue('');

    }
    return (
        <form style={{margin: '50px'}} onSubmit={handleSubmit}>
            <input 
                type="text"
                value={value}
                onChange={handleValuechange}
            >

            </input>
        </form>
    );
}

export default TodoForm;