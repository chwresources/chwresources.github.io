document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".search-input").forEach(inputField => {
        const headerCell = inputField.closest("th");
        const AllHeaderCells = inputField.closest("tr").querySelectorAll("th");
        const columnIndex = Array.from(AllHeaderCells).indexOf(headerCell);
        inputField.addEventListener("input", () => {
            const tableRows = inputField.closest("table").querySelectorAll("tbody tr");
            //array of column entries in which we search from
            const searchableCells = Array.from(tableRows).map(row => row.querySelectorAll("td")[columnIndex]);
            console.log(tableRows);
            //allow case insensitive search
            const searchQuery = inputField.value.toLowerCase();

            for (const tableCell of searchableCells){
                const row = tableCell.closest("tr");
                console.log(searchQuery);
                //allow case insensitive, comma-ignoring search
                const value = tableCell.textContent.toLowerCase().replace(",", "").replace("-", "");
                //reset view for each row
                //row.style.visibility = null;
                row.style.display = "table-row";
                //does it match?
                if (value.search(searchQuery) == -1){
                    //row.style.visibility = "collapse";
                    row.style.display = "none";
                }
            }
        })
    });
});