export async function calculation(a, b, c) {
    let result;
    if (c === "+") {
        result = (a + b);
        return result;
    }
    else if (c === "-") {
        result = (a - b);
    }
    else if (c === "*") {
        result = (a * b);
        return result;
    }
    else if (c === "/") {
        result = (a / b);
        return result;
    }
}
