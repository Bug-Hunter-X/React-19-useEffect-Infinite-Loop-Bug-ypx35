```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Update state only once on mount
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); 
    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```