<template>
    <div></div>
</template>

<script>
    function setView(map, view) {
        if (!view) {
            map.setView([0, 0], 1);

            return;
        }

        if (view.type === 'point') {
            map.setView(view.point, view.zoom);
        } else if (view.type === 'fly') {
            map.flyTo(view.point, view.zoom);
        } else if (view.type === 'bounds') {
            map.fitBounds(view.bounds);
        } else if (view.type === 'fly_bounds') {
            map.flyToBounds(view.bounds);
        }
    }

    export default {
        props: {
            token: String,
            view: {
                type: Object,
                default() {
                    return { type: 'point', point: [54.46405, 17.02872], zoom: 13 }
                }
            }
        },
        mounted() {
            this.map = L.map(this.$el);
            setView(this.map, this.view);

            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: this.token
            }).addTo(this.map);

            this.$emit('init', this.map);
        },
        watch: {
            view(newView, oldView) {
                if (!oldView) {
                    this.map.setView([0, 0], 1);
                }
                setView(this.map, newView);
            }
        }
    }
</script>
