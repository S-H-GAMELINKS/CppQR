<template>
    <div class="container">
        <qrcode-reader @init="onInit" @decode="onDecode"></qrcode-reader>
        <p>{{content}}</p>
    </div>
</template>

<script>
import { QrcodeReader } from 'vue-qrcode-reader';

export default {
    data: function() {
        return {
            content: ""
        }
    },
    components: { 
        QrcodeReader 
    },
    methods: {
        async onInit (promise) {
            try {
                await promise
            } catch (error) {
                if (error.name === 'NotAllowedError') {
                } else if (error.name === 'NotFoundError') {
                } else if (error.name === 'NotSupportedError') {
                } else if (error.name === 'NotReadableError') {
                } else if (error.name === 'OverconstrainedError') {
                } else {
                }
            } finally {
            }
        },
        onDecode: function(decodedString) {
            alert(decodedString);
            this.content = decodedString;
            this.$forceUpdate();
        }
    }
}
</script>