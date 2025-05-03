import { Component, ErrorInfo } from "react";
import { ErrorBoundaryState } from "../../Types/types";
import { ErrorBoundaryProps } from "../../Types/types";

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { 
            hasError: false,
            error: null,
            errorInfo: null
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { 
            hasError: true,
            error: error,
            errorInfo: null
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        this.setState({ 
            hasError: true,
            error: error,
            errorInfo: errorInfo
        });
        console.error("Error capturado por ErrorBoundary:", error, errorInfo);
    }

    handleReset = () => {
        this.setState({
            hasError: false,
            error: null,
            errorInfo: null
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary p-4 m-4 border border-red-500 rounded-lg bg-red-50">
                    <h2 className="text-xl font-bold text-red-700 mb-2">¡Ups! Algo salió mal</h2>
                    <p className="text-red-600 mb-2">Error: {this.state.error?.message}</p>
                    <details className="mb-4">
                        <summary className="cursor-pointer text-red-600">Detalles del error</summary>
                        <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto">
                            {this.state.errorInfo?.componentStack}
                        </pre>
                    </details>
                    <button 
                        onClick={this.handleReset}
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Intentar de nuevo
                    </button>
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
