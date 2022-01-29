export default function shortenWords(t, l) {
    if (t) {
        var trimmedString = t.substr(0, l);
        return trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")))
    }
}