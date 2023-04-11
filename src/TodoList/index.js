import React from "react";
import '.';

function TodoList(props){
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };