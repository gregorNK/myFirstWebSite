function solve() {
    let onScreenButton = document.querySelector(`#container button`);
    onScreenButton.addEventListener(`click`, onScreenHandler);
    let clearArchiveElement = document.querySelector(`#archive > button`)
    clearArchiveElement.addEventListener(`click`, clearArchive)

    function onScreenHandler(e) {
        e.preventDefault()
        let moviesInput = document.querySelectorAll("#container input");
        let movieInput = moviesInput[0];
        let hallInput = moviesInput[1];
        let priceInput = moviesInput[2];

        let name = movieInput.value;
        let hall = hallInput.value;
        let price = Number(priceInput.value).toFixed(2);

        movieInput.value = '';
        hallInput.value = '';
        priceInput.value = '';

        let li = document.createElement(`li`);

        let nameSpan = document.createElement(`span`);
        nameSpan.textContent = name;

        let hallStrong = document.createElement(`strong`);
        hallStrong.textContent = `Hall: ${hall}`;

        let rightSectionDiv = document.createElement(`div`);
        let priceStrong = document.createElement(`strong`);
        priceStrong.textContent = price;

        let ticketSoldInput = document.createElement(`input`);
        ticketSoldInput.setAttribute(`placeholder`, `Tickets Sold`);

        let archiveButton = document.createElement(`button`);
        archiveButton.textContent = `Archive`;
        archiveButton.addEventListener(`click`, archiveMovie);

        rightSectionDiv.appendChild(priceStrong);
        rightSectionDiv.appendChild(ticketSoldInput);
        rightSectionDiv.appendChild(archiveButton);

        li.appendChild(nameSpan);
        li.appendChild(hallStrong);
        li.appendChild(rightSectionDiv);

        let moviesUl = document.querySelector(`#movies ul`);
        moviesUl.appendChild(li);
    }
    function archiveMovie(e) {
        let movieLi = e.target.parentElement.parentElement;
        let tickedSoldInput = movieLi.querySelector(`div input`);
        let tickedSold = tickedSoldInput.value

        if (tickedSold.trim() !== '' && !isNaN(Number(tickedSold))) {
            tickedSold = Number(tickedSold)
            let pricesStrong = movieLi.querySelector(`div strong`);
            let price = Number(pricesStrong.textContent);

            let hallStrong = movieLi.querySelector(`strong`);
            let totalPrice = price * tickedSold
            hallStrong.textContent = `total amount: ${totalPrice.toFixed(2)}`;

            let rightDiv = movieLi.querySelector(`div`);
            rightDiv.remove()

            let deleteButton = document.createElement(`button`);
            deleteButton.textContent ='Delete';
            deleteButton.addEventListener(`click`, deleteFromArchive);
            movieLi.appendChild(deleteButton);

            let archiveUl = document.querySelector(`#archive ul`);
            archiveUl.appendChild(movieLi);
        }

    }
    function deleteFromArchive(e) {
        let currentElement = e.target;
        let liElement = currentElement.parentElement;
        liElement.remove();
    }
    function clearArchive() {
        let archiveLi = document.querySelectorAll(`#archive ul li`);
        archiveLi.forEach(el => el.remove());
    }
}