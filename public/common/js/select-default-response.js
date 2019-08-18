(function () {
    function getCurrentUrl() {
        var url = window.location.href;

        return url ?
            url :
            document.URL;
    }

    function getUrlParameter(name, url) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(url);

        return results === null ?
            '' :
            decodeURIComponent(results[1].replace(/\+/g, ' '));
    }

    function getRadioElementId() {
        var currentUrl = getCurrentUrl();
        var radioElementId = +getUrlParameter('select', currentUrl);
        if (radioElementId < 1)
            return 1;
        
        var radioElements = document.querySelectorAll('input[type="radio"]');
        var radioCount = radioElements.length;
        return radioElementId > radioCount ?
            radioCount :
            radioElementId;
    }

    var radioElementId = getRadioElementId();
    var radioElement = document.getElementById(radioElementId);
    if (radioElement)
        radioElement.checked = true;
})();