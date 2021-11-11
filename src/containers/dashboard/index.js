import React from 'react';
import classes from './dashboard.module.css';
import TodoItem from "../../components/todoItem";

class Dashboard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            items: [],
        }
        this.addNew = this.addNew.bind(this);
    }

    addNew(e){
        // console.dir(this._inputEl);
        e.preventDefault();
        if (this._inputEl.value){
            const newItem = {
                title: this._inputEl.value,
                key: Date.now(), 
                time: new Date().toLocaleString()
            };

            this.setState({ items: [newItem, ...this.state.items ]}, 
                () => console.dir(this.state.items)
            );

            this._inputEl.value = "";

            // method 1
            // get current items and update state
            // this.setState((prevState) => {
            //     return {items: prevState.items.concat(newItem)};
            // }, 
            // () => console.dir(this.state.items));

        }
    }

    click(key){
        // console.dir(e.target);
        this.delete(key);
    }

    delete(key){
        const filterItem = this.state.items.filter( (list) => list.key !== key);

        this.setState({items: filterItem});
    }

    render() {
        return(
            <div className={classes.todo_list}>
                <form onSubmit={this.addNew} className={classes.todo} action="#">
                    <input type="text" name="task" id="task" autoComplete="off" ref={(el) => this._inputEl = el} />
                    <button type="submit" >+ Add a Task</button>
                </form>

                <ul className={classes.list}>
                    { this.state.items.map((list) =>
                        <TodoItem 
                            key = {list.key}
                            title={list.title} 
                            time={list.time} 
                            click={() => this.click(list.key)}
                        />
                    )}
                </ul>
                
            </div>
        );
    }
}

export default Dashboard;