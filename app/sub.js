function generateText() {
    var element = document.createElement('h2');
    element.innerHTML = 'hello h2 world';
    return element;
}
//module.exports = generateText;
export default generateText
