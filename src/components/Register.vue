<template>
    <div>
        <auth-form
            action="register"
            v-on:process="register($event)"
        ></auth-form>
        <app-snack-bar
            v-if="snackBar"
            :snackBar="snackBar"
            :text="message"
            :timeout="timeout"
        ></app-snack-bar>
    </div>
</template>
<script>
    import AppSnackBar from '@/components/SnackBar'
    import AuthForm from '@/forms/Auth'
    export default {
        name: 'Register',
        components: {AuthForm, AppSnackBar},
        data () {
            return {
                snackBar: true,
                message: 'No hay nada que mostrar',
                timeout: 5000
            }
        },
        methods: {
            register (user) {
                console.log(user);
            }
        }
    }
</script>