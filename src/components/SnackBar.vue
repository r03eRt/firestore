<template>
    <v-snackbar
        :timeout="timeout"
        :color="color"
        v-model="showSnack"
    >
        {{ text }}
        <v-btn dark flat @click="showSnack = false">
            {{ $t('message.close') }}
        </v-btn>
    </v-snackbar>
</template>
<script>
    export default {
        name: 'app-snack-bar',
        props: ['snackbar', 'timeout', 'text'],
        data () {
            return {
                color: 'primary',
                mode: 'horizontal',
                showSnack: this.snackBar
            }
        }
    }
</script>