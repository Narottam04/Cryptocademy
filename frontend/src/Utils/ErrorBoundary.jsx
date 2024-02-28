import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    // console.log("this is custom error boundary!!!!", error);
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    // umami.trackEvent(
    //   "App Crashes",
    //   { type: "app-crash", userId: 123 },
    //   "/app",
    //   "94db1cb1-74f4-4a40-ad6c-962362670409"
    // );
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI

      return React.cloneElement(this.props.fallback, { error: this.state.error });
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
