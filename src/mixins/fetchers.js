export default {
    methods: {
        getData: function(url) {
            return fetch(url)
                .then(response => response.json())
                .then(json => { return json });

        },
    }

}