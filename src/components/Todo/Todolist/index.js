import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func
};

function TodoList({todoList, onTodoClick}) {
    const handleTodoClick = (todo,idex) => {
        if(!onTodoClick) return;

        onTodoClick(todo,idex);
    }
    return (
        <ul className="list-todo">
            {todoList.map((todo,idex) =>(
                <li 
                    key={todo.id}
                    className={classnames({
                        complete: todo.status === 'complete'
                    })}
                    onClick={() => handleTodoClick(todo,idex)}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;