function Wrapper({ title = '', children }) {
  title === '' ? (document.title = 'QQMart') : (document.title = 'QQMart | ' + title);
  return <div className="w-100">{children}</div>;
}

export default Wrapper;
