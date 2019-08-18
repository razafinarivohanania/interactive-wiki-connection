(function () {
    function getCurrentUrl() {
        var url = window.location.href;
        if (!url)
            url = document.URL;

        if (url.indexOf('?') >= 0)
            url = url.split('?')[0];

        return url.trim();
    }

    function getUrl(buttonId) {
        var currentUrl = getCurrentUrl();
        currentUrl = currentUrl.replace(/\/+$/, '');

        if (buttonId == 'previous') {
            var splitedUrl = currentUrl.split('/');
            splitedUrl.pop();
            return splitedUrl.join('/');
        }

        var radioChecked = document.querySelector('input[type="radio"]:checked').value;
        return currentUrl + '/' + radioChecked;
    }

    ['previous', 'next'].forEach(function (buttonId) {
        var button = document.getElementById(buttonId);
        if (!button) return;

        button.disabled = false;
        button.onclick = function () {
            window.location.href = getUrl(buttonId);
        }
    });
})();