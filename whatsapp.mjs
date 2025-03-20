const chatContainer = document.getElementById('app')

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        mutation.removedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
                if (node.getAttribute('tabindex') == "-1" && node.getAttribute('role') == "row" && node.getAttribute('class') == "") {
                    if (!document.contains(node)) {
                        const newNode = node.cloneNode(true);
                        if (mutation.previousSibling) {
                            mutation.previousSibling.after(newNode);
                        } else if (mutation.nextSibling) {
                            mutation.nextSibling.before(newNode);
                        } else {
                            mutation.target.appendChild(newNode);
                        }
                        const messageNode = newNode.firstChild.firstChild.childNodes[1]
                        messageNode.style.color = "red";
                        console.log(' cebola ', messageNode)
                    }
                }
            }
        });
    });
});
observer.observe(chatContainer, { childList: true, subtree: true });