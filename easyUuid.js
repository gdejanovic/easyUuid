window.EasyUuid = (function () {
    let counter = 0;

    function generate() {
        const timestamp = Date.now().toString(16);
        const random = Math.floor(Math.random() * 1000000000).toString(16);
        const count = (counter++).toString(16);

        return random + '-' + random + '-' + count + '-' + random + '-' + timestamp;
    }

    return {
        generate: generate
    };
})();
