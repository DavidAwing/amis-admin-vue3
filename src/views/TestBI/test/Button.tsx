import React, { useRef, Component } from 'react'

const ReactButton = function (props: any) {

    const style = useRef({
        background: '#91e7fc',
        width: 500,
        margin: 'auto',
        padding: 10,
        lineHeight: '30px'
    })
    return (<div style={style.current}>
        This is the React Component
        <h3>
            received foo's value: {props.foo}
        </h3>
        Click the button can change the value of the prop 'foo'<br />
        <button onClick={props.onClick}>button in React</button>
        {props.children}
    </div>)
}

export default class TestComponent extends React.Component {
    componentDidMount() {
        console.log("react dom 已挂载");
    }
    render() {
        return (
            <div>测试组件生命周期</div>
        );
    }
}

export { ReactButton }
