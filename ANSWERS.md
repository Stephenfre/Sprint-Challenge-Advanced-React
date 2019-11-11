- [ ] Why would you use class component over function components (removing hooks from the question)?

* [ ] Name three lifecycle methods and their purposes.

render() - examines (this.props) and (this.state) and return (React elements like JSX, Arrays, Strings, Numbers, and Booleans.
have to be used when building our UI

componentDidMount() - a part of the mounting phase, it gets called as soon as the render method is called the first time.

componentWillUnmount() - immediately invoked before a component is unmounted and destroyed. It performs any necessary cleanup,such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().

- [ ] What is the purpose of a custom hook? - build the hook yourself, which allows you to apply non-visual behavior and stateful logic throughout your components by reusing the same hook over and over again

* [ ] Why is it important to test our apps? Automated testing minimizes the risk of bugs finding their way into production code. It's not optional, it should be a part of every developer’s workflow.
