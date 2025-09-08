import {Component} from 'react'

class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state={hasError:false};
    }

    static getderivedStateFromError(error){
        return {hasError:true};
    }

    componentDidCatch(error,errorInfo){
        console.log("Error caught by ErrorBoundary:",error,errorInfo);
        
    }

    render(){
        if(this.state.hasError){
            return <h2>Something went wrong</h2>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;