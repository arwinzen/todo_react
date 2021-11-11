import React from 'react';
import classes from './todoItem.module.css';

class TodoItem extends React.Component {
    getItem(e) {
        console.dir(e.target.innerHTML);
    }

    render() {
        return(
                <li className={classes.todoItem}>
                    <input className={classes.checkbox} type="checkbox" />
                    <span>{this.props.title}</span>
                    <span>{this.props.time}</span>
                    <button className={classes.delBtn} onClick={this.props.click}>
                        Delete
                    </button>
                </li>
        );
    }
}

export default TodoItem;