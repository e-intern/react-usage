import React, { Component } from 'react'

class LifeCycleTest extends Component {

    state = {
        a: 10
    }

    constructor(props) {
        super(props);
        console.log("constructor");
        //ctor'da setState olmaz
        // this.setState({
        //     a: 30
        // })
    }

    componentWillMount() {
        console.log("componentWillMount");
    }

    render() {
        console.log("render");
        // only return jsx formats

        //render içerisinde setState çağrılamaz çünkü kısır bir döngü içerisine girer sürekli olarak yeniden çağrılmaya çalışır.
        // this.setState({
        //     a: 30
        // })

        return (
            <h1 className="text-center mb-4 mt-4">
                {this.props.value}
            </h1>
        )
    }

    componentDidMount() {
        console.log("componentDidMount");
        //call rest api is here then call render function  
        //you will usage setState
        this.setState({
            a: 30
        })
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        // return false; //eğer false gönderirsek component tekrar render olmaz
        return true; //eğer true gönderirsek component tekrar render 
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
}

export default LifeCycleTest;