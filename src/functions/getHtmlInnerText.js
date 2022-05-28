export default function extractContent(s) {
    if (typeof document !== "undefined"){
        let span = document.createElement('span');
        span.hidden = true;
        span.innerHTML = s;
        const text = span.textContent || span.innerText;
        span.remove()
        return text
    }
};