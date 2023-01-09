function Wrapper({ title, children }) {
    document.title = 'QQMart | ' + title;
    return <div className="w-100">{children}</div>;
}

export default Wrapper;
