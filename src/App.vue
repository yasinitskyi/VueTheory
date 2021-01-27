<template>
  <div class="container">
    <form class="pt-3" @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" class="form-control" v-model="email" @blur="$v.email.$touch()"
          :class="{'is-invalid': $v.email.$error}">
        <div class="invalid-feedback" v-if="!$v.email.required">
          It is required filed
        </div>
        <div class="invalid-feedback" v-if="!$v.email.email">
          This should be an email
        </div>
        <div class="invalid-feedback" v-if="!$v.email.uniqEmail">
          This email is already exists
        </div>
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" class="form-control" v-model="password" @blur="$v.password.$touch()"
          :class="{'is-invalid': $v.password.$error}">
        <div class="invalid-feedback" v-if="!$v.password.minLength">
          Min {{$v.password.$params.minLength.min}}. Now it is {{password.length}}
        </div>
        <div class="invalid-feedback" v-if="!$v.password.required">
          It is required filed
        </div>
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confrim</label>
        <input type="password" id="confirmPassword" class="form-control" v-model="confirmPassword"
          @blur="$v.confirmPassword.$touch()" :class="{'is-invalid': $v.confirmPassword.$error}">
        <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">
          Passwords do not match
        </div>
      </div>

      <button class="btn btn-success" type="submit" :disabled="$v.$invalid">Submit</button>

    </form>
  </div>
</template>

<script>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators'
export default {
  name: 'app',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    onSubmit() {
      console.log(this.email);
      console.log(this.password);
    }
  },
  validations: {
    email: {
      required: required,
      email: email,
      uniqEmail: function(newEmail) {
        return newEmail !== 'text@mail.ru'
      }
    },
    password: {
      minLength: minLength(6),
      required: required
    },
    confirmPassword: {
      sameAs: sameAs('password')
    }
  }
}
</script>

<style lang="sass" scoped>
  .invalid-feedback
    display: block
  .form-group
    margin-bottom: 20px
</style>
