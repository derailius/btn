// ==UserScript==
// @name         BTN replace TV show colons
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Replaces colon with hyphens on TV series name
// @author       derailius & ChatGPT (yes...so what?)
// @icon         https://broadcasthe.net/favicon.ico
// @match        https://broadcasthe.net/series.php*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Recursive function to replace colons in all text nodes within a given node
    function replaceText(node) {
        if (node.nodeType === Node.TEXT_NODE) {
            node.textContent = node.textContent.replace(/:/g, ' -');
        } else {
            node.childNodes.forEach(replaceText);
        }
    }

    // Define the specific elements to apply the replacement within
    const targetElements = [
        document.querySelector('.sidebar .head strong'),
        // For the specific strong element in .head within .sidebar
        document.querySelector('#header'),
        // Header section if you want to include it
    ];

    // Apply replacement only to the targeted elements
    targetElements.forEach(element => {
        if (element) replaceText(element); // Only apply if the element exists
    });

})();
