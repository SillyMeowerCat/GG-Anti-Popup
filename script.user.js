// ==UserScript==
// @name         Anti-Popup
// @namespace    tampermonkey.net
// @version      1.0.0
// @description  Gets rid of "subscribe yearly" popups.
// @author       Sidecans
// @match        https://www.geoguessr.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=geoguessr.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    const click = () => {
        const paths = [
            '//*[@id="__next"]/div[2]/div[3]/div[1]/div[2]/div/div[3]/div[2]/button',
            '//*[@id="__next"]/div[2]/div[2]/div[1]/div[2]/div/div[3]/div[2]/button'
        ];
        for (const path of paths) {
            const node = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (node && typeof node.click === 'function') {node.click();}
        }
    };
    new MutationObserver(click).observe(document.documentElement, {childList: true, subtree: true});
    setInterval(click, 500);
})();
