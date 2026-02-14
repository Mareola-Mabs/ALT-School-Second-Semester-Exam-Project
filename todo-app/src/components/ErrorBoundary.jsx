import { Component }  from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    // Update state so next render shows fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Log error for debugging
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    this.setState({
      errorInfo: errorInfo,
    });
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });

    // Optional: reload page
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      document.title = "Error | Todo App";

      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white px-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 max-w-md w-full text-center shadow-lg">

            <h1 className="text-2xl font-bold text-red-500 mb-4">
              Something went wrong
            </h1>

            <p className="text-zinc-400 mb-6">
              An unexpected error occurred. Please try again.
            </p>

            <button
              onClick={this.handleReset}
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition"
            >
              Reload Page
            </button>

            {/* Show error details only in development */}
            {import.meta.env.DEV && this.state.error && (
              <pre className="mt-6 text-left text-xs text-red-400 overflow-auto">
                {this.state.error.toString()}
              </pre>
            )}

          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
