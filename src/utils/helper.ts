export function buildQuery(data: { [key: string]: string | number | boolean }) {
    // If the data is already a string, return it as-is
    if (typeof data === "string") return data;

    // Create a query array to hold the key/value pairs
    const query = [];

    // Loop through the data object
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            if (data[key] !== undefined && data[key] !== "" && data[key] !== null) {
                // Encode each key and value, concatenate them into a string, and push them to the array
                query.push(
                    encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
                );
            }
        }
    }

    // Join each item in the array with a `&` and return the resulting string
    return query.join("&");
}