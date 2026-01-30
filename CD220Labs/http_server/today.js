module.exports.getDate = function getDate() {                                                 // Export a function named 'getDate' from the module
    let aestString = new Date().toLocaleString("en-US", { timeZone: "America/Phoenix" });     // Get the current date and time string in the timezone
    let aestDate = new Date(aestString);                                                      // Convert that string back into a Date object
    return aestDate; 
};
