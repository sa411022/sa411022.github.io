onmessage = e => {
    postMessage(null);
    setInterval(() => {
        postMessage(null);
    }, e.data);
}