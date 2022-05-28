export default function calculateDecimalPrecision(number, precision) {
    number = parseFloat(number)
    return Math.round((number + Number.EPSILON) * Math.pow(10, precision)) / Math.pow(10, precision)
}