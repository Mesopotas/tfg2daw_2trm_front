<template>
  <v-app>
    <v-app-bar class="app-bar">
      <v-app-bar-title>Inicio de Sesión</v-app-bar-title>
    </v-app-bar>
    <v-main>
      <v-container class="login-container">
        <v-row class="login-row"> <!-- similar al flexbox de css,  agrupa columnas y las distribuye en filas-->
          <v-col class="login-col"> <!-- similar al  flex-item, adpata al tamaño de v-row para ajustarse, por lo que son complementarios-->
            <v-card class="login-card">
              <v-card-title class="login-card__title">Iniciar Sesión</v-card-title>
              <v-card-text class="login-card__content">
                <v-form  class="login-form">
                  <v-text-field
                    v-model="email"
                    label="Correo Electrónico"
                    type="email"
                    required
                    class="login-form__input"
                  ></v-text-field> 
                    <!-- inputs de la data del login -->
                  <v-text-field
                    v-model="password"
                    label="Contraseña"
                    type="password"
                    required
                    class="login-form__input"
                  ></v-text-field>

                  <v-btn type="submit" class="login-button">
                    Ingresar
                  </v-btn>
                </v-form>
              </v-card-text>
              <v-card-actions class="login-card__actions">
                <v-spacer></v-spacer> <!-- espaciado para boton de contraseña olvidada -->
                <v-btn text class="login-card__forgot-password">
                  ¿Olvidó su contraseña?
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    submit() {

      // añadir la logica para iniciar sesion involucrando la API y stores de vue, asi como el formato de los datos introducidos

    },
  },
};
</script>

<style lang="scss">
@import '@/assets/styles/_login.scss';
</style>
