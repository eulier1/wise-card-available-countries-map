import { defineComponent, h } from 'vue';

import { GChart } from 'vue-google-charts';

import countries from "../server/mock/countries";

export const type = 'GeoChart';

export const data = countries

export const options = {
    backgroundColor: "#44403c",
    datalessRegionColor: "#a1a1aa",
    defaultColor: '#16a34a'

}

export default defineComponent({
    name: 'GoogleChart',
    components: {
        GChart,
    },
    props: ['width', 'height'],
    setup() {
        return () =>
            h(GChart, {
                data,
                options,
                type,
                settings: {
                    packages: ['geochart'],
                },
            });
    },
});
